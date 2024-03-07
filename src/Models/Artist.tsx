import { Follower } from "./FollowerModel"
import { Image } from "./Image"

export interface Artist {
    external_urls: {spotify : string},
    followers: Follower,
    genres: string[],
    href: string,
    id: string,
    images: Image[],
    name: string,
    popularity: number,
    type: string,
    uri: string
}