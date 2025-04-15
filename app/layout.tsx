import React from "react";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import "./globals.css";
import Image from 'next/image';

const albert_Sans = Albert_Sans ({
    subsets: ["latin"],
    display: "swap"
});

const montserrat = Montserrat_Alternates ({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat"
});

//Images
import mobileLogo from "@/public/mobile_logo.svg";
import desktopLogo from "@/public/desktop_logo.svg";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${albert_Sans.className} ${montserrat.variable}`}>
        <header>
            <nav className="flex items-center justify-between px-[25px] py-3.5">
                <Image className="block sm:hidden" src={mobileLogo} alt="Mobile logo" />
                <Image className="hidden sm:block" src={desktopLogo} alt="Desktop logo" />
                <ul className="flex gap-x-8">
                    <li className="text-[14px] text-[#606060] tracking-[5%] font-semibold uppercase"><a href="#">3d Models</a></li>
                    <li className="text-[14px] text-[#606060] tracking-[5%] font-semibold uppercase"><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
        {children}
        </body>
        </html>
    );
}
