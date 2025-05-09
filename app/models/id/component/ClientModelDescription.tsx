'use client';
import {ModelCardProps} from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import {FaRegHeart} from "react-icons/fa6";
import {useFormatDateContext} from "@/contextProvider/FormatDateContext";

export default function ClassDescription({model}: ModelCardProps) {
    const {formatDate} = useFormatDateContext();

    return (
        <>
            <div className="max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto relative px-[25px] xl:px-0">
                <Image
                    src={model.image}
                    alt={model.name}
                    width={662}
                    height={662}
                    sizes="(min-width: 1280px) 662px, (min-width: 1040px) calc(29.55vw + 213px), (min-width: 540px) 459px, calc(94.55vw - 33px)"
                    className="w-full h-[350px] sm:h-[662px] sm:w-[662px] object-cover mt-10 lg:mt-0"
                />
                <div className="">
                    <div className="absolute top-0">
                        <Link href="/models"
                              className="text-[14px] tracking-[5%] text-[#606060] font-semibold uppercase">Back to
                            overview</Link>
                    </div>
                    <div className="h-full flex flex-col justify-center mb-10">
                        <div className="flex items-center gap-2">
                            <FaRegHeart className="text-[32px] text-[#606060]"/>
                            <span className="text-[24px] text-[#606060] font-normal">{model.likes}</span>
                        </div>
                        <h1 className="text-[32px] text-[#1E1E1E] font-bold capitalize">{model.name}</h1>
                        <span
                            className="w-max border-[1px] border-[#A1A1A1] rounded-full text-[16px] text-[#1E1E1E] font-normal px-2 py-1 my-4">{model.category}</span>
                        <p className="text-[24px] leading-none text-[#1E1E1E] font-normal mb-6">{model.description}</p>
                        <p>{formatDate(model.dateAdded)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}