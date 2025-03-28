
import Link from "next/link";
import classes from "./main-header.module.css";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import Background from "@/components/header/Background";
import NavLink from "@/components/Nav-link/NavLink";


export default function Header() {


    return (
        <>
            <Background/>
            <header className={classes.header}>
                <Link href="/26-onward-food/public" className={classes.logo}>
                    <Image src={logoImg} alt="Onward Food Logo" priority/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Brower Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}