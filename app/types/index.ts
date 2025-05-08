import React from "react";

export type Card = {
    id: number,
    name: string,
    description: string,
    likes: number,
    image: string,
    category: string,
    dateAdded: string
}

export type ModelDetailsPageProps = {
    params: Promise <{
        id: number
    }>
}

export type ModelsByCategories = {
    params: Promise <{
        category: string
    }>
}

// Component type - props
export type ModelCardProps = {
    model: Card;
}

export type ModelCardsProps = {
    data: Card[];
}

export type FormatDateContextType = {
    formatDate: (dateAdded: string | number) => string;
}

// Models nav
export type navFilter = {
    id: number,
    title: string,
    url: string,
}

export type navFilterProps = {
    navData: navFilter[];
}

export type RootLayoutProp = Readonly<{ children: React.ReactNode; }>
