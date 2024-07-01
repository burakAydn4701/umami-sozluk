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
    topics.sort((a, b) => Number(b.id) - Number(a.id))

    const basliks = [
        {
            id: 1,
            title: "24 haziran 2024 almanya danimarka maçı"
        },
        {
            id: 2,
            title: "türkiye'de memur sayısı çok safsatası"
        },
        {
            id: 3,
            title: "chatGPT"
        },
        {
            id: 4,
            title: "arda güler'in gürcistan'a attığı gol"
        },
        {
            id: 5,
            title: "tereddüt çizgisi"
        },
        {
            id: 6,
            title: "tiktok'ta dans eden gençler"
        },
        {
            id: 7,
            title:  "recep ivedik"
        }
        ]

    return (
        <nav className={"sidenav"}>
            <h2 className={"heading"}>gündem</h2>
            <ul className={"linkList"}>
                {topics.map(t => (
                    <li key={t.id} className={"linkItem"}>
                        <Link href={`/baslik?id=${t.id}`} className={"link"}>
                            {t.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}