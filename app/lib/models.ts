import modelsData from "../data/models.json";
import {Model} from "@/app/types";

export async function getAllModels(): Promise<Model[]> {
    return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find(
        (model: Model) => model.id.toString() === id.toString(),
    );
    if (!foundModel) {
        throw new Error(`No model with id ${id}`);
    }
    return foundModel;
}

export async function getModelByCategory(category: string): Promise<Model[]> {
    const filterModel = modelsData.filter(
        (model: Model) => model.category.toUpperCase() === category.toUpperCase(),
    );
    if (!filterModel) {
        throw new Error(`No model with category ${category}`);
    }
    return filterModel;
}