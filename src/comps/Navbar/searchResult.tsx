import { PartialSearchResult } from '@spotify/web-api-ts-sdk';
// import { Album } from '../../Models/Album';
// import { ArtistFechModel } from '../../Models/ArtistsFechModel';
// import { TrackSearch } from '../../Models/TrackSearch';
import SearchResultItem from './searchResultItem/searchResultItem';
import SearchResultSong from './searchResultItem/searchResultSong';

export default function SearchResult(props:
    {
        // artist: Required<Pick<PartialSearchResult, "artists">>;

        // album: Required<Pick<PartialSearchResult, "albums">>;

        // track: Required<Pick<PartialSearchResult, "tracks">>

        data: Required<Pick<PartialSearchResult, 'tracks' | 'albums' | 'artists'>>

    }) {

    const artist = props.data.artists
    const artistItems = artist.items

    const album = props.data.albums
    const albumItems = album.items

    const track = props.data.tracks
    const trackItems = track.items

    // const noDataFound = artist.artists.total == 0 && album.albums.total == 0 && track.tracks.total == 0 ? "No Data Found" : ""

    const noDataFound =
        artist.total == 0 &&
            album.total == 0 &&
            track.total == 0 ?
            "No Data Found" : ""

    return (
        <div className='search-result absolute top-12 bg-white backdrop-blur-lg bg-opacity-50 text-black w-11/12 rounded-xl grid h-fit p-3 overflow-auto max-h-72'>

            {artistItems.length > 0 && <div className='w-2/3 pl-2 border-b border-gray-500 my-2'>
                <h2>Artists</h2>
            </div>}

            {artistItems.length == 0 && albumItems.length == 0 && noDataFound}

            {artistItems.length > 0 && artistItems.map((artist) => {
                if (artist != null) {
                    return (
                        <SearchResultItem data={artist} key={artist.id} />
                    )
                }
            })}

            {albumItems.length > 0 && <div className='w-2/3 pl-2 border-b border-gray-500 my-2'>

                <h2>Albums</h2>

            </div>}

            {albumItems.length > 0 && albumItems.map((album) => {
                if (album != null) {
                    return (
                        <SearchResultItem data={album} key={album.id} />
                    )
                }
            })}

            {trackItems.length > 0 && <div className='w-2/3 pl-2 border-b border-gray-500 my-2'>

                <h2>Songs</h2>

            </div>}

            {trackItems.length > 0 && trackItems.map((track) => {
                if (track != null) {
                    return (
                        <SearchResultSong data={track} key={track.id} />
                    )
                }
            })}
        </div>
    )
}
