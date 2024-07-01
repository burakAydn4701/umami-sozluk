// InputForm.js
import React, { useState } from 'react';
import "./inputForm.css"
import {useRouter} from "next/navigation";
import fetchBaslik from "@/app/baslik/server-component";
const InputForm = ({ baslikName }) => {
    const [text, setText] = useState('');
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/addEntry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: text, authorName: nick, baslikName: baslikName }),
            });

            if (!response.ok) {
                throw new Error('Failed to add entry');
            }

            const result = await response.json();
            setMessage('Entry added successfully');
            setText('');
            setNick('');

            router.push("/baslik?name=" + baslikName);
        } catch (error) {
            console.error('Error adding entry:', error);
            setMessage('An error occurred');
        }

    };

    return (
        <div className="form-container">
            <form className="entry-form" onSubmit={handleSubmit}>
                <textarea
                    className="text-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Entry"
                    rows={4}
                    cols={15}
                    required
                />
                <textarea
                    className="nick-input"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    placeholder="Nick"
                    rows={2}
                    cols={15}
                    required
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default InputForm;
