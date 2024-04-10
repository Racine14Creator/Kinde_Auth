"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
]

export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav className="w-full bg-grey-40">
            <div className="flex justify-between items-center container max-w-[1000px] mx-auto h-[10vh]">
                <h1><Link href={'/'}>Racine14 Auth</Link></h1>
                <ul className="flex gap-x-2">
                    {navLinks.map((item, index) => (
                        <li key={index} className={`px-5 py-2 rounded-md cursor-pointer transition-all ${pathname === item.href ? 'bg-success' : 'bg-transparent'}`}><Link href={item.href}>{item.name}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}