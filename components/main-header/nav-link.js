"use client"
import classes from "./main-header.module.css"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {

    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? classes.active : ""}>{children}</Link>
    )
}