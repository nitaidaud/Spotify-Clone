import { Item } from "./Items";


export interface Album {
    albums: {
        href: string,
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number,
        items: Item[]
    }
}