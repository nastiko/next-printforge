import {Model} from "@/app/types";
import {getAllModels} from "@/app/lib/models";
import ClientModelCards from "@/app/models/component/ClientModelCards";

export default async function Models() {
    const data: Model[] = await getAllModels();
    console.log('data', data);
    return <ClientModelCards data={data}/>
}