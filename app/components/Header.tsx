import React from "react";
import Link from "next/link";
import Image from "next/image";
import mobileLogo from "@/public/mobile_logo.svg";
import desktopLogo from "@/public/desktop_logo.svg";

export default function Header() {
    return (
        <>
            <header>
                <nav className="flex items-center justify-between px-[25px] py-3.5">
                    <div>
                        <Link href="/">
                            <Image className="block sm:hidden" src={mobileLogo} alt="Mobile logo"/>
                        </Link>
                        <Link href="/">
                            <Image className="hidden sm:block" src={desktopLogo} alt="Desktop logo"/>
                        </Link>
                    </div>
                    <ul className="flex gap-x-8">
                        <li className="text-[14px] text-[#606060] tracking-[5%] font-semibold uppercase"><Link
                            href="/models">3d Models</Link></li>
                        <li className="text-[14px] text-[#606060] tracking-[5%] font-semibold uppercase"><Link
                            href="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}