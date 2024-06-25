import styles from "./entry.css"
export default function Entry({entrysBaslik, no}) {
    return (
        <div className={"entry-con"}>
            <div className={"entry-body"}>
                <p>{entrysBaslik.entries[no].text}</p>
            </div>
            <div className={"entry-info"}>
                <p>{entrysBaslik.entries[no].author}</p>
            </div>
        </div>
    )
}
