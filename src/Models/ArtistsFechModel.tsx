import { Artist } from "./Artist";

export interface ArtistFechModel {
    artists: {
        herf: string,
        items: Artist[],
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number
    }
}