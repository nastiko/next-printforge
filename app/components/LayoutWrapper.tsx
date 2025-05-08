"use client";
import {RootLayoutProp} from "@/app/types";
import {usePathname} from "next/navigation";

export default function Layout({children}: RootLayoutProp) {
    const pathname: string = usePathname()
    const isModelsPage : boolean = pathname === "/models";

    return (
        <>
            <div className={`${isModelsPage ? '' : 'h-screen'} flex flex-col justify-between`}>
                {children}
            </div>
        </>
    )
}