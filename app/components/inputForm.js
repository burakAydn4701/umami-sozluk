"use client"
import React, { useState } from 'react';
import styles from "./inputForm.css"

const InputForm = () => {
    const [text, setText] = useState('');
    const [nick, setNick] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            console.log('Submitted text:', text);
            // Add your submission logic here
            setText(''); // Clear the textarea after submission
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className={"form-container"}>
            <form className="entry-form" onSubmit={handleSubmit}>
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