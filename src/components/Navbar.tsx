import Link from "next/link";

const links = [
    { href: "/client", label: "client" },
    { href: "/drinks", label: "drinks" },
    { href: "/tasks", label: "tasks" },
    { href: "/query", label: "query" },
]

import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-base-300 py-4">
            <div className="navbar max-w-7xl px-8 mx-auto flex-col sm:flex-row">
                <Link className="btn btn-primary" href="/"> Next.js</Link>
                <ul className="menu menu-horizontal md:ml-8">
                    {links.map((link) => {
                        return (
                            <li key={link.href}>
                                <Link href={link.href} className="capitalize">
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
