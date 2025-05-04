'use client';

import Link from "next/link";
import Image from "next/image";
import {ModelCardProps} from "@/app/types";
import {FaRegHeart} from "react-icons/fa6";
import {useContext} from "react";
import {ContextFormatDate} from "@/contextProvider/FormatDateContext";

export default function ModelCard({model}: ModelCardProps) {
    const context = useContext(ContextFormatDate);
    if (!context) {
        return <p>Error: FormatDate context not available</p>;
    }
    const {formatDate} = context;

    return (
        <>
            <Link href={`/models/${model.id}`}>
                <Image
                    className="w-full object-cover"
                    src={model.image}
                    alt={model.name}
                    width={268}
                    height={268}
                />
                <div>
                    <h1 className="text-[22px] text-[#1E1E1E] font-bold capitalize">{model.name}</h1>
                    <p className="text-[17px] text-[#1E1E1E] font-normal">{model.description}</p>
                    <div className="flex items-center gap-2">
                        <FaRegHeart className="text-[32px] text-[#606060]"/>
                        <span className="text-[24px] text-[#606060] font-normal">{model.likes}</span>
                    </div>
                    <p>{formatDate(model.dateAdded)}</p>
                </div>
            </Link>
        </>
    )
}