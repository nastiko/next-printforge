'use client';
import Link from "next/link";
import {Model, ModelCardsProps} from "@/app/types";
import ModelCard from "@/app/components/ModelCard";
import {useState} from "react";

export default function ClientModelCards({data}: ModelCardsProps) {
    const nav: string[] = ['All', '3D Printer', 'Art', 'Education', 'Fashion', 'Hobby & DIY', 'Household', 'Miniatures', 'Tools', 'Toys & Games'];
    const [category, setCategory] = useState('All');

    const handleCategory = (category: string): void => {
       if(data.find((item:Model): boolean => item.category === category)) {
           setCategory(category);
       }
    }

    const itemToFilter = data.filter((item: Model) => {
        return category === 'All' ? data : item.category === category;
    });

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-x-32 px-[25px]">
                <div
                    className="flex xl:flex-col xl:justify-center gap-x-2 xl:gap-x-0 overflow-x-scroll scrollbar scrollbar-thumb-transparent [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] xl:overflow-x-hidden snap-mandatory mb-5 mt-4 xl:mt-0">
                    {nav.map((item: string, index: number) => (
                        <ul key={index}>
                            <Link href={item === 'All' ? `/models/` : `/models/category/${item}`}>
                                <li onClick={() => handleCategory(item)}
                                    className="w-[145px] xl:w-max border-[1px] xl:border-0 border-[#A1A1A1] rounded-full xl:rounded-none text-center xl:text-left capitalize">{item}</li>
                            </Link>
                        </ul>
                    ))}
                </div>
                <div className="w-full">
                    <h1 className="text-[32px] text-[#1E1E1E] font-bold xl:pl-4 mb-4">3D Models</h1>
                    <div
                        className="xl:h-[calc(100vh-250px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 overflow-y-scroll xl:p-4">
                        {itemToFilter.length > 0 ? (itemToFilter.map((model: Model) =>
                            <ModelCard
                                key={model.id}
                                model={model}
                            />
                        )) : (<p>No items here</p>)}
                    </div>
                </div>
            </div>
        </>
    )
}