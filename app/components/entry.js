"use client"
import styles from "./entry.css"
import {useFormatter} from 'next-intl';
import { format } from "date-fns"
export default function Entry({content, author, time}) {

    let datef = ""
    if (time) {
        datef = time.slice(8, 10) + "." + time.slice(5, 7) + "." + time.slice(0, 4) + " " + time.slice(11, 16)
    }

    return (
        <div className={"entry-con"}>
            <div className={"entry-body"}>
                <p>{content}</p>
            </div>
            <div className={"entry-info"}>
                <div className={"author-name"}>
                    {author}
                </div>
                <div className={"time-stamp"}>
                    {datef}
                </div>
            </div>
        </div>
    )
}
