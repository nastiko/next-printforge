'use client';

import {createContext, useContext} from "react";
import {FormatDateContextType, RootLayoutProp} from "@/app/types";

const defaultDateAdded = (dateAdded: string | number): string => {
    return new Date(dateAdded).toLocaleDateString();
}

export const ContextFormatDate = createContext<FormatDateContextType>({
    formatDate: defaultDateAdded
});

export default function FormatDateContext({children}: RootLayoutProp) {
    const formatDate: FormatDateContextType['formatDate'] = (dateAdded) => {
        return new Date(dateAdded).toLocaleDateString();
    }

    return (
        <ContextFormatDate.Provider
            value={{formatDate}}>
            {children}
        </ContextFormatDate.Provider>
    )
}

export function useFormatDateContext() {
    return useContext(ContextFormatDate);
}