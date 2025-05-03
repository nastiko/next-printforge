import React from "react";

export type RootLayoutProp = Readonly<{ children: React.ReactNode; }>

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
