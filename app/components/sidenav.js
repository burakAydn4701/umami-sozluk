import Data from "@/app/data";
import styles from "./sidenav.css"
import Link from "next/link";
export default function Sidenav() {
    let basliks = Data()

    return (
        <div className={"sidenav"}>
            <h3 className={"gündem"}>gündem</h3>
            <div className={"solframe"}>
                {basliks.map(b => (
                    <div  key={b.id} className={"frame-baslik"}>
                        <Link href={"/baslik?id=" + b.id}>
                            <p className={"solframe-baslik-link"}>{b.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}