import {Card, ModelDetailsPageProps} from "@/app/types";
import {getModelById} from "@/app/lib/models";
import ClientModelDescription from "@/app/models/id/component/ClientModelDescription";

export default async function ModelDescription({params}: ModelDetailsPageProps) {
    const {id} = await params;
    const model: Card = await getModelById(id);

    return <ClientModelDescription model={model} />
}