
"use client"
import React, { useState } from 'react';
import {Form, useForm} from "react-hook-form"
import styles from "../login/page"
import * as z from "zod"



export default function SignupForm() {

    const handleSubmit = () => {

    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Kayıt</h2>
                <div className="form-group">
                    <label htmlFor="username">Kullanıcı adı</label>
                    <input
                        type="text"
                        id="username"
                        value={""}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        value={""}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Kayıt ol</button>
            </form>
        </div>
    );
}

