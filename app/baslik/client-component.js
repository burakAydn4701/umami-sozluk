"use client";
import React, { useEffect, useState } from 'react';
import fetchBaslik from "@/app/baslik/server-component";
import Entry from "@/app/components/entry";
import styles from "./baslik.css";
import InputForm from "@/app/input/inputForm";
import {useRouter} from "next/navigation";
import "/app/input/inputForm.css"
import {redirect} from "next/navigation";

export default function ClientComponent({ name }) {
    const [text, setText] = useState('');
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter()
    const [title, setTitle] = useState('');
    const [entries, setEntries] = useState([]);

    async function getBaslik() {
        const result = await fetchBaslik(name);
        setTitle(result.title);
        setEntries(result.entries);
    }

    useEffect(() => {

        if (name) {
            getBaslik();
        }
    }, [name]);

    entries.sort((a, b) => a.no - b.no)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/addEntry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: text, authorName: nick, baslikName: name }),
            });

            if (!response.ok) {
                throw new Error('Failed to add entry');
            }

            const result = await response.json();
            setMessage('Entry added successfully');
            setText('');
            setNick('');
            await getBaslik()
            router.push("/baslik?name=" + name)


        } catch (error) {
            console.error('Error adding entry:', error);
            setMessage('An error occurred');
        }

    };

    return (
        <div className={"baslik-main"}>
            <h1>{title}</h1>
            {entries.map(e => (
                <Entry content={e.content} author={e.authorName} time={e.createdAt} key={e.no}/>
            ))}
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
        </div>
    );
}
