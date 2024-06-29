"use client";
import { useEffect, useState } from 'react';
import fetchBaslik from "@/app/baslik/server-component";
import Entry from "@/app/components/entry";
import styles from "./baslik.css"

export default function ClientComponent({ id }) {
    const [title, setTitle] = useState('');
    const [entries, setEntries] = useState([])

    useEffect(() => {
        async function getBaslik() {
            const result = await fetchBaslik(id);
            setTitle(result.title);
            setEntries(result.entries)
        }

        getBaslik();
    }, [id]);

    return (
        <div className={"baslik-main"}>
            <h1>{title}</h1>
            {
                entries.map(e => (
                    <Entry content={e.content} author={e.authorName} key={e.no}/>
                ))
            }
        </div>
    );
}
