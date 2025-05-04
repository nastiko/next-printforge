import {getAllModels} from "@/app/lib/models";
import {Model} from "@/app/types";
import ModelCard from "@/app/components/ModelCard";

export default async function Models() {
    const data = await getAllModels();
    const nav: string[] = ['All', '3D Printer', 'Art', 'Education', 'Fashion', 'Hobby & DIY', 'Household', 'Miniatures', 'Tools', 'Toys & Games']

    return (
        <>
            <div className="flex gap-x-32 px-[25px]">
                <div>
                    {nav.map((item: string, index: number) => (
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    ))}
                </div>
                <div className="w-full">
                    <h1 className="text-[32px] text-[#1E1E1E] font-bold">Model page</h1>
                    <div className="grid grid-cols-4 gap-8 mx-auto">
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