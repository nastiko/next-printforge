import {Model, ModelDetailsPageProps} from "@/app/types";
import {getModelById} from "@/app/lib/models";
import ClientModelDescription from "@/app/models/[id]/component/ClientModelDescription";

// Параметры извлекаем напрямую из props для страницы
interface ModelPageProps {
    params: {
        id: string | number;
    }
}

export default async function ModelDescription({params}: ModelPageProps) {
    const {id} = await params;
    const model: Model = await getModelById(id);

    return <ClientModelDescription model={model} />
}