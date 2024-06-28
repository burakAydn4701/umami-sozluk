import Link from "next/link";
import styles from "./sidenav.css";
import Data from "@/app/data";

export default function Sidenav() {
    const basliks = Data();

    return (
        <nav className={"sidenav"}>
            <h2 className={"heading"}>gündem</h2>
            <ul className={"linkList"}>
                {basliks.map(baslik => (
                    <li key={baslik.id} className={"linkItem"}>
                        <Link href={`/baslik?id=${baslik.id}`} className={"link"}>
                            {baslik.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}