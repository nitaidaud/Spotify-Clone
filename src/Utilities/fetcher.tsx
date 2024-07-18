import { SpotifyApi } from '@spotify/web-api-ts-sdk'

const base = "https://api.spotify.com/v1/";

const client_id:string = import.meta.env.CLIENTID
const client_secret:string = import.meta.env.CLIENTSECRET

export const spotifyApi = SpotifyApi.withClientCredentials(
    client_id,
    client_secret
)

export const fetchSearch = async (endpoint: string) => {
    while (endpoint != "") {

        const data = await spotifyApi.search(endpoint, ["album", "artist", "track"], 'IL', 5)

        return data;
    }
}

const fetchData = async (endpoint: string) => {
    while (endpoint != "") {

        const token = await fetchToken()

        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const url = base + endpoint

        const resp = await fetch(url, searchParameters)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
                else
                    return null
            })
            .then(data => {

                return data
            })

        const data = resp

        return data;
    }
}

export const fetchAlbum = async (search: string) => {
    while (search != "") {

        const data = await fetchData(`search?q=${search}&type=album&limit=5`);

        // console.log("dangerous:", data);

        return data;
    }
}

export const fetchAlbumTest = async (search: string) => {

    while (search != "") {

        const data = await spotifyApi.search(search, ['album'], undefined, 5)

        // console.log("dangerous:", data);

        return data;
    }
}

export const fetchArtist = async (search: string) => {
    while (search != "") {

        const data = await fetchData(`search?q=${search}&type=artist&limit=5`);

        // console.log("Artist:", data);

        return data;
    }
}

export const fetchArtistTest = async (search: string) => {

    while (search != "") {
        const data = await spotifyApi.search(search, ['artist'], undefined, 5)

        return data;

        // console.log("dangerous:", data);
    }
}

export const fetchTrack = async (search: string) => {
    while (search != "") {
        const data = await fetchData(`search?q=${search}&type=track&limit=5`);

        // console.log("Tracks:", data);

        return data;
    }
}

export const fetchTrackTest = async (search: string) => {

    while (search != "") {

        const data = await spotifyApi.search(search, ['track'], undefined, 5)

        // console.log("dangerous:", data);

        return data;
    }
}

export const fetchArtistById = async (id: string) => {
    while (id != "") {

        const data = await fetchData(`artists/${id}`);

        // console.log("Artist:", data);

        return data;
    }
}

//TODO: fix this
export const fetchArtistByIdTest = async (id: string) => {
    while (id != "") {

        const data = await spotifyApi.artists.get(id)

        return data
    }
}

export const fetchAlbumById = async (id: string) => {
    while (id != "") {

        const data = await fetchData(`albums/${id}`);

        // console.log("Artist:", data);

        return data;
    }
}

export const fetchAlbumByIdTest = async (id: string) => {
    while (id != "") {

        const data = await spotifyApi.albums.get(id)

        return data
        // const resp = await spotifyApi.makeRequest('GET', `albums/${id}`)
        // console.log("resp", resp);

        // return resp;

    }
}

export const fetchTrackByIdTest = async (id: string) => {
    while (id != "") {

        const data = spotifyApi.tracks.get(id)

        // console.log("Artist:", data);

        return data;
    }
}

export const fetchNewReleases = async () => {
    // https://api.spotify.com/v1/browse/new-releases
    const data = await fetchData(`browse/new-releases?limit=10`);

    // console.log("new release:", data);

    return data;
}

export const fetchNewReleasesTest = async () => {
    // https://api.spotify.com/v1/browse/new-releases
    const data = await spotifyApi.browse.getNewReleases('IL', 20)

    // console.log("new release:", data);

    return data;
}

export async function fetchToken() {


    const authOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
    };

    const url = "https://accounts.spotify.com/api/token"

    return fetch(url, authOptions)
        .then(result => result.json())
        .then(data => {
            return data.access_token;
        })
}