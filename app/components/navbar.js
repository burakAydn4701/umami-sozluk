import logo from "./lotus-logo.png"
import Image from "next/image";
import styles from "./navbar.css"
import Link from "next/link";
export default function Navbar() {
    return (
        <div className={"bar"}>
            <a href={"/"} className={"logo-link"}>
                <Image src={logo}
                       alt={"logo"}
                       height={45}
                       width={45}
                       className={"bar-logo"}
                />
            </a>
            <a href={"/"} >
                <h1>Umami Sözlük</h1>
            </a>
        </div>
    )
}