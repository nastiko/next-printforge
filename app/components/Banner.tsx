"use client";
import Link from "next/link";
import {useState} from "react";
import { IoCloseOutline } from "react-icons/io5";
import {usePathname} from "next/navigation";

export default function Banner() {
    const [closeBanner, setCloseBanner] = useState<boolean>(true);
    const pathname: string = usePathname()
    const isHomePage : boolean = pathname === "/";

    const handleCloseBanner = () => {
        setCloseBanner(false);
    }

    return (
        <>
            {isHomePage && (
                <div className={`w-full ${closeBanner ? 'flex' : 'hidden'} justify-center items-center bg-[#F77429] relative py-3`}>
                    <p className="text-[14px] text-[#1E1E1E] text-center px-[25px] mr-[25px]">The Printforge project was built using React, Next.js, TypeScript and Tailwind to create a dynamic and user-friendly experience.
                        You can view the source code on <Link className="underline decoration-1 font-semibold" href="https://github.com/nastiko/next-printforge">GitHub</Link> for a deeper look.</p>
                    <div onClick={handleCloseBanner} className="flex items-center absolute inset-y-0 right-0 py-3 pr-[25px] cursor-pointer">
                        <IoCloseOutline className="text-[20px]" />
                    </div>
                </div>
            )}
        </>
    )
}