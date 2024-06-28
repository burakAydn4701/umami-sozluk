
"use client"
import React, { useState } from 'react';
import {Form, useForm} from "react-hook-form"
import styles from "../login/page"
import * as z from "zod"



export default function SignupForm() {
    const formSchema = z.object({
        username: z.string().min(1, "kullanıcı adı boş kalamaz").max(20,
            "kullanıcı adı 20 karakterden uzun olamaz"),
        password: z.string().min(1, "şifre boş kalamaz").max(20,
            "şifre 20 karakterden uzun olamaz")
    })

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

