"use client";
import Link from "next/link";
import {navFilter, navFilterProps} from "@/app/types";
import {usePathname} from "next/navigation";

export default function NavFilter({navData}: navFilterProps) {
    const pathname: string = usePathname();
    return (
        <>
            <ul className="flex flex-row xl:flex-col xl:justify-center gap-x-2 xl:gap-x-0">
                {navData.map((item: navFilter) => {
                    const itemPath: string = `/models` + (item.url.length ? `/category/${item.url}` : '');
                    const isActive = pathname === itemPath;
                    return (
                        <Link key={item.id} href={itemPath}>
                            <li className={`w-[145px] xl:w-max border-[1px] border-[#A1A1A1] rounded-full xl:rounded-none xl:border-r-transparent xl:border-y-transparent xl:pl-2.5
                                        ${isActive ? 'text-[#F77429] border-[#F77429] xl:border-l-[1px] xl:border-l-[#F77429]' : 'text-[#606060] xl:border-l-transparent'} text-[14px] text-center xl:text-left uppercase xl:mb-3`}
                            >
                                {item.title}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}