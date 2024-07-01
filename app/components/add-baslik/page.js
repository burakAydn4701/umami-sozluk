// InputForm.js
"use client"
import React, { useState } from 'react';
import "./addbaslik.css"
import { useRouter } from "next/navigation"

const BaslikForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add baslik first
            const baslikResponse = await fetch('/api/addBaslik', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title }),
            });

            if (!baslikResponse.ok) {
                throw new Error('Failed to add baslik');
            }

            // Add entry next
            const entryResponse = await fetch('/api/addEntry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: text, authorName: nick, baslikName: title }),
            });

            if (!entryResponse.ok) {
                throw new Error('Failed to add entry');
            }

            // If both requests are successful
            setMessage('Baslik and Entry added successfully');
            setTitle('');
            setText('');
            setNick('');

            // Redirect to the home page or another page
            router.push("/baslik?name=" + title);
        } catch (error) {
            console.error('Error adding baslik or entry:', error);
            setMessage('An error occurred');
        }
    };

    return (
        <div className={"baslik-form-container"}>
            <form className="baslik-form" onSubmit={handleSubmit}>
                <label>Başlık adı</label>
                <textarea
                    className="baslik-title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    rows={2}
                    cols={15}
                    required
                />
                <label>İlk entry</label>
                <textarea
                    className="baslik-text-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    cols={15}
                    required
                />
                <label>Nick</label>
                <textarea
                    className="baslik-nick-input"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
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

export default BaslikForm;
