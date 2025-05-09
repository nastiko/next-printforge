'use client';
import Link from "next/link";
import Image from "next/image";
import {ModelCardProps} from "@/app/types";
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
            <Link href={`/models/id/${model.id}`} className="h-full flex flex-col border-[0.89px] border-[#A1A1A1] rounded-md transform scale-100 hover:scale-105 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Image
                    className="w-full h-[368px] object-cover rounded-t-md"
                    src={model.image}
                    alt={model.name}
                    width={368}
                    height={368}
                    sizes="(min-width: 1840px) calc(25vw - 107px), (min-width: 1560px) calc(10.77vw + 152px), (min-width: 1520px) calc(-275vw + 4555px),
                    (min-width: 1280px) calc(22.27vw + 35px), (min-width: 1040px) calc(28.18vw + 26px), (min-width: 800px) calc(50vw - 42px),
                    (min-width: 640px) calc(19.29vw + 197px), (min-width: 400px) calc(98.64vw - 44px), 334px"
                />
                <div className="h-full flex flex-col justify-between p-3">
                    <div>
                        <h1 className="text-[22px] text-[#1E1E1E] font-bold capitalize">{model.name}</h1>
                        <p className="text-[17px] text-[#1E1E1E] font-normal my-3">{model.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>{formatDate(model.dateAdded)}</p>
                        <div className="w-[145px] border-[1px] border-[#A1A1A1] rounded-full text-center">
                            <p className="text-[12px] text-[#1E1E1E] font-normal uppercase px-2 py-1">{model.category}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}