import Link from "next/link";
import styles from "./sidenav.css";
import Data from "@/app/data";

export default function Sidenav() {
    const basliks = [
        {
            id: 1,
            title: "recep ivedik"
        },
        {
            id: 2,
            title: "tiktok'ta dans eden gençler"
        },
        {
            id: 4,
            title: "arda güler'in gürcistan'a attığı gol"
        }]

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