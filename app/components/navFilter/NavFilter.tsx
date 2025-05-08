import Link from "next/link";
import {navFilter, navFilterProps} from "@/app/types";

export default function NavFilter({navData}:navFilterProps) {
    return (
        <>
            {navData.map((item: navFilter) => (
                <ul key={item.id}>
                    <Link href={`/models/category/${item.url}`}>
                        <li className="w-[145px] xl:w-max border-[1px] xl:border-0 border-[#A1A1A1] rounded-full xl:rounded-none text-center xl:text-left uppercase">{item.title}</li>
                    </Link>
                </ul>
            ))}
        </>
    )
}