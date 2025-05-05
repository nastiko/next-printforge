'use client';
import {usePathname} from "next/navigation";
import {Model, ModelCardsProps} from "@/app/types";
import ModelCard from "@/app/components/ModelCard";

export default function ClientModelCards({data}: ModelCardsProps) {
    const pathname: string = usePathname();
    const nav: string[] = ['All', '3D Printer', 'Art', 'Education', 'Fashion', 'Hobby & DIY', 'Household', 'Miniatures', 'Tools', 'Toys & Games'];

    //const isModelPage = pathname.includes('/models');

    document.body.style.overflow = pathname.includes('/models') ? 'hidden' : '';

    return (
        <>
            <div className="flex gap-x-32 px-[25px]">
                <div className="h-screen flex flex-col justify-center">
                    {nav.map((item: string, index: number) => (
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    ))}
                </div>
                <div className="w-full">
                    <h1 className="text-[32px] text-[#1E1E1E] font-bold">Model page</h1>
                    <div className="h-3/4 grid grid-cols-4 gap-8 overflow-y-scroll mx-auto">
                        {data.map((model: Model) =>
                            <ModelCard
                                key={model.id}
                                model={model}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}