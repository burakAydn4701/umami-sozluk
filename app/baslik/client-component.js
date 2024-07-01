"use client";
import { useEffect, useState } from 'react';
import fetchBaslik from "@/app/baslik/server-component";
import Entry from "@/app/components/entry";
import styles from "./baslik.css";
import InputForm from "@/app/input/inputForm";

export default function ClientComponent({ name }) {
    const [title, setTitle] = useState('');
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        async function getBaslik() {
            const result = await fetchBaslik(name);
            setTitle(result.title);
            setEntries(result.entries);
        }

        if (name) {
            getBaslik();
        }
    }, [name]);

    entries.sort((a, b) => a.no - b.no)

    return (
        <div className={"baslik-main"}>
            <h1>{title}</h1>
            {entries.map(e => (
                <Entry content={e.content} author={e.authorName} key={e.no}/>
            ))}
            <InputForm baslikName={title}/>
        </div>
    );
}
