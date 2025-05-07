import {Model, ModelsByCategories} from "@/app/types";
import {getModelByCategory} from "@/app/lib/models";
import ClientModelCards from "@/app/models/component/ClientModelCards";

export default async function ModelsByCategory({params}: ModelsByCategories) {
    const {category} = await params;
    const data: Model[] = await getModelByCategory(category);

    return <ClientModelCards data={data}/>
}