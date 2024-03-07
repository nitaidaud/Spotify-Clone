import { Image } from "./Image"

export interface NewReleases {
    albums: {
        href: string,
        items: [{
            album_type: string,
            artists: [{
                external_urls: { spotify: string },
                href: string,
                id: string,
                name: string,
                type: string,
                uri: string
            }],
            available_markets: string[],
            external_urls: { spotify: string },
            href: string,
            id: string,
            images: Image[],
            name: string,
            release_date: string,
            release_date_precision: string,
            total_tracks: string,
            type: string,
            uri: string
        }],
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number
    }
}