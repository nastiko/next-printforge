import {Albert_Sans, Montserrat_Alternates} from "next/font/google";
import {RootLayoutProp} from "@/app/types";
import React from "react";
import Link from 'next/link';
import "./globals.css";
import FormatDateContext from "@/contextProvider/FormatDateContext";

//Images
import Image from 'next/image';

const albert_Sans = Albert_Sans({
    subsets: ["latin"],
    display: "swap"
});

const montserrat = Montserrat_Alternates({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat"
});

//Images
import mobileLogo from "@/public/mobile_logo.svg";
import desktopLogo from "@/public/desktop_logo.svg";

export default function RootLayout({children}: RootLayoutProp) {
    return (
        <html lang="en">
        <body className={`${albert_Sans.className} ${montserrat.variable}`}>
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
        <FormatDateContext>
            {children}
        </FormatDateContext>
        </body>
        </html>
    );
}
