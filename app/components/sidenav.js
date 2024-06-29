import Link from "next/link";
import styles from "./sidenav.css";
import Data from "@/app/data";

export default function Sidenav() {
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
                {basliks.map(b => (
                    <li key={b.id} className={"linkItem"}>
                        <Link href={`/baslik?id=${b.id}`} className={"link"}>
                            {b.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}