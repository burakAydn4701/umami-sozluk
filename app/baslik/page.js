"use client"
import {useSearchParams} from "next/navigation";
import Data from "@/app/data";
import Entry from "@/app/components/entry";
import styles from "./baslik.css"
export default function Baslik() {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const data = Data()
    const current = data.find(b => b.id == id)

    return (
        <div className={"baslik-main"}>
            <h1 className={"baslik-page-title"}>{current.title}</h1>
            <div className={"baslik-entrys-con"}>
                {current.entries.map(e => (
                    <Entry entrysBaslik={current} no={e.no} key={e.no} />
                ))}
            </div>
            <form>
                <textarea cols={40} rows={10} placeholder={"entry girin"}></textarea>
            </form>
        </div>
    )
}