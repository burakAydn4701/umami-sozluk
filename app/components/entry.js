import styles from "./entry.css"
export default function Entry({content, author, time}) {
    return (
        <div className={"entry-con"}>
            <div className={"entry-body"}>
                <p>{content}</p>
            </div>
            <div className={"entry-info"}>
                <p>{author}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}
