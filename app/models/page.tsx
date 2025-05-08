import {Card} from "@/app/types";
import {getAllModels} from "@/app/lib/models";
import ClientModelCards from "@/app/models/component/ClientModelCards";

export default async function Models() {
    const data: Card[] = await getAllModels();
    return <ClientModelCards data={data}/>
}