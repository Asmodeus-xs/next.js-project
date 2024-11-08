import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import HeaderBackground from "./Header-background";
import NavLink from "./nav-link";




export default function Header() {



    return (
        <>
            <HeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href={"/"}><Image src={logo} priority alt="a plate with food on it" />
                    Next level food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href={"/meals"}>Browse meals</NavLink></li>
                        <li><NavLink href={"/community"}>Foodies Community</NavLink></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}