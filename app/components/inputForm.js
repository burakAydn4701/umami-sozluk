"use client"
import React, { useState } from 'react';
import styles from "./inputForm.css"
import {Enter} from "@/app/api/input/enter";

const InputForm = () => {
    const [text, setText] = useState('');
    const [nick, setNick] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    };
    const handleSubmit = () => {
        Enter({text, nick})
    }

    return (
        <div className={"form-container"}>
            <form className="entry-form" action={Enter}>
                <textarea
                    className="text-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="entry"
                    rows={5}
                    cols={10}
                />
                <textarea
                    className="nick-input"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="nick"
                    cols={10}
                />
                <button type="submit" className="submit-button">gir</button>
            </form>
        </div>
    );
};

export default InputForm;