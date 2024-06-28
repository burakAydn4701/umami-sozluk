"use client"
import {useSearchParams} from "next/navigation";
import Data from "@/app/data";
import Entry from "@/app/components/entry";
import styles from "./baslik.css"
import InputForm from "@/app/api/input/route";
export default function Baslik(request) {
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
            <InputForm />
        </div>
    )
}