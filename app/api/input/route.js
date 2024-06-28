"use client"
import React, { useState } from 'react';
import styles from "./input.css"

const InputForm = () => {
    const [text, setText] = useState('');

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
        <form className="entry-form" onSubmit={handleSubmit}>
      <textarea
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Entry girin..."
      />
            <button type="submit" className="submit-button">gir</button>
        </form>
    );
};

export default InputForm;