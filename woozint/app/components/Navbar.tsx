"use client"

import "./navbar.scss"
import Link from "next/link"
import { Logo } from "./Logo"

export const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="nav_container">
                <div className="nav_logo">
                   <Logo/>
                </div>
                    <ul className="nav_links">
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Fonctionnalités</a></li>
                        <li><a href="#">Tarifs</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                <div className="login">
                    <Link href="/login">
                       Inscription
                    </Link>
                    <Link href="/register" className="special_link">
                       Connexion
                    </Link>
                </div>
            </div>
        </nav>
    )
}
