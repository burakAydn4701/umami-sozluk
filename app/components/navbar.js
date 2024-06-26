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
            <div className={"login-div"}>
                <a href={"/login"} className={"navbar-login"}>
                    <h2>giriş yap</h2>
                </a>
                <a href={"/signup"}>
                    <h2 className={"navbar-signup"}>kayıt ol</h2>
                </a>
            </div>
        </div>
    )
}