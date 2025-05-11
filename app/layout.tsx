import "./globals.css";
import React from "react";
import {RootLayoutProp} from "@/app/types";
import {Albert_Sans, Montserrat_Alternates} from "next/font/google";

//components
import Banner from "@/app/components/Banner";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import LayoutWrapper from "@/app/components/LayoutWrapper";

//contextProvider
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
        <LayoutWrapper>
            <div>
                <Banner/>
                <Header/>
            </div>
            <FormatDateContext>
                {children}
            </FormatDateContext>
            <Footer/>
        </LayoutWrapper>
        </body>
        </html>
    );
}
