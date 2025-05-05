import React from "react";

export type Model = {
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
        id: number,
    }>
}

// Component type - props
export type ModelCardProps = {
    model: Model
}

export type ModelCardsProps = {
    data: Model[];
}

export type FormatDateContextType = {
    formatDate: (dateAdded: string | number) => string;
}

export type RootLayoutProp = Readonly<{ children: React.ReactNode; }>
