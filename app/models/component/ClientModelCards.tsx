import {Card, ModelCardsProps} from "@/app/types";
import ModelCard from "@/app/components/ModelCard";
import GetNavFilter from "@/app/components/navFilter/GetNavFilter";

export default function ClientModelCards({data}: ModelCardsProps) {
    return (
        <>
            <div className="flex flex-col xl:flex-row gap-x-32 px-[25px]">
                <div
                    className="flex xl:gap-x-0 max-xl:overflow-x-scroll max-xl:scrollbar max-xl:scrollbar-thumb-transparent max-xl:[&::-webkit-scrollbar]:hidden max-xl:[-ms-overflow-style:none] max-xl:[scrollbar-width:none] max-xl:snap-mandatory mb-5 mt-4 xl:my-0">
                    <GetNavFilter />
                </div>
                <div className="w-full">
                    <h1 className="text-[32px] text-[#1E1E1E] font-bold xl:pl-4 mb-4">3D Models</h1>
                    <div
                        className="xl:h-[calc(100vh-250px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 overflow-y-scroll xl:p-4">
                        {data.length > 0 ? (data.map((model: Card) =>
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