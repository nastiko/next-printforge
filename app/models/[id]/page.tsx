import {Model, ModelDetailsPageProps} from "@/app/types";
import {getModelById} from "@/app/lib/models";
import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default async function ModelDescription({params}: ModelDetailsPageProps) {
    const {id} = await params;
    const model: Model = await getModelById(id);

    console.log(model);

    return (
        <>
            <div className="max-w-7xl flex flex-col md:flex-row gap-8 mx-auto px-[25px] xl:px-0">
                <Image
                    src={model.image}
                    alt={model.name}
                    width={902}
                    height={902}
                    className="w-full xl:w-[902px] object-cover"
                />
                <div>
                    <div>
                        <Link href="/models" className="text-[14px] tracking-[5%] text-[#606060] font-semibold uppercase">Back to overview</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegHeart className="text-[32px] text-[#606060]" />
                        <span className="text-[24px] text-[#606060] font-normal">{model.likes}</span>
                    </div>
                    <div>
                        <h1 className="text-[32px]">{model.name}</h1>
                    </div>

                </div>
            </div>
        </>
    )
}