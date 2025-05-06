'use client';
import {Model, ModelCardsProps} from "@/app/types";
import ModelCard from "@/app/components/ModelCard";

export default function ClientModelCards({data}: ModelCardsProps) {
    const nav: string[] = ['All', '3D Printer', 'Art', 'Education', 'Fashion', 'Hobby & DIY', 'Household', 'Miniatures', 'Tools', 'Toys & Games'];

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-x-32 px-[25px]">
                <div className="flex xl:flex-col xl:justify-center gap-x-2 xl:gap-x-0 overflow-x-scroll scrollbar scrollbar-thumb-transparent [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] xl:overflow-x-hidden snap-mandatory mb-5">
                    {nav.map((item: string, index: number) => (
                        <ul key={index}>
                            <li className="w-[145px] xl:w-max border-[1px] xl:border-0 border-[#A1A1A1] rounded-full xl:rounded-none text-center xl:text-left">{item}</li>
                        </ul>
                    ))}
                </div>
                <div className="w-full">
                    <h1 className="text-[32px] text-[#1E1E1E] font-bold xl:pl-4 mb-4">3D Models</h1>
                    <div className="xl:h-[calc(100vh-250px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 overflow-y-scroll xl:p-4">
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