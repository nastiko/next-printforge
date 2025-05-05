import React from "react";
import "./globals.css";
import {Albert_Sans, Montserrat_Alternates} from "next/font/google";
import {RootLayoutProp} from "@/app/types";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FormatDateContext from "@/contextProvider/FormatDateContext";

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

export default function RootLayout({children}: RootLayoutProp) {
    return (
        <html lang="en">
        <body className={`${albert_Sans.className} ${montserrat.variable} box-border overflow-x-hidden`}>
        <div className="h-screen flex flex-col justify-between">
            <Header/>
            <FormatDateContext>
                {children}
            </FormatDateContext>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
