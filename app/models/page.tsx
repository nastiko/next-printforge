import {getAllModels} from "@/app/lib/models";
import {Model} from "@/app/types";
import Link from "next/link";

export default async function Models() {
    const data = await getAllModels();
    return (
        <>
            <h1>Model page</h1>
            {data.map((model: Model) =>
                <Link href={`/models/${model.id}`} key={model.id}>{model.name}</Link>
            )}
        </>
    )
}