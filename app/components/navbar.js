// Navbar.js
import React from 'react';
import logo from "./lotus-logo.png"
import styles from "./navbar.css"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link href={"/"}>
                    <Image src={logo} alt={"logo"} width={45} height={45}/>
                </Link>
                <a href={"/"}>
                    <span className="navbar-title">Umami Sözlük</span>
                </a>
            </div>
            <div className="navbar-right">
                <a href="/login" className="navbar-link">Giriş yap</a>
                <a href="/signup" className="navbar-link navbar-button">Kayıt ol</a>
            </div>
        </nav>
    );
};

export default Navbar;