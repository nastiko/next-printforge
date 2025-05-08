import modelsData from "../data/models.json";
import navFilterData from "../data/navFilter.json";
import {Card, navFilter} from "@/app/types";

export async function getAllNav(): Promise<navFilter[]> {
    return navFilterData;
}

export async function getAllModels(): Promise<Card[]> {
    return modelsData;
}

export async function getModelById(id: string | number): Promise<Card> {
    const foundModel = modelsData.find(
        (model: Card) => model.id.toString() === id.toString(),
    );
    if (!foundModel) {
        throw new Error(`No model with id ${id}`);
    }
    return foundModel;
}

export async function getModelByCategory(category: string): Promise<Card[]> {
    const filterModel = modelsData.filter(
        (model: Card) => model.category.toUpperCase() === category.toUpperCase(),
    );
    if (!filterModel) {
        throw new Error(`No model with category ${category}`);
    }
    return filterModel;
}