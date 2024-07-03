"use client"
import Link from "next/link";
import styles from "../sidenav.css";
import Data from "@/app/data";
import {useEffect, useState} from "react";
import fetchBasliks from "@/app/components/sidenav/server-component";

export default function Sidenav() {

    const [topics,  setTopics] = useState([])

    useEffect(() => {
        async function fetchTopics() {
            const result = await fetchBasliks()
            setTopics(result)
        }

        fetchTopics()
    }, [])

    console.log("result:", JSON.stringify(topics))

    return (
        <nav className={"sidenav"}>
            <h2 className={"heading"}>gündem</h2>
            <ul className={"linkList"}>
                {topics.map(t => (
                    <li key={t.id} className={"linkItem"}>
                        <Link href={`/baslik?name=${t.title}`} className={"link"}>
                            {t.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}