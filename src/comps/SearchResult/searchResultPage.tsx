import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchAlbumByIdTest,
  fetchArtistByIdTest,
  fetchTrackByIdTest,
} from "../../Utilities/fetcher";
import { Album, Artist } from "@spotify/web-api-ts-sdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { TrackContext } from "../../Utilities/TrackContext";

export default function SearchResultPage() {
  const [searchResult, setSearchResult] = useState<Artist | Album | null>(null);

  // const [songResult, setSongResult] = useState<Track | null>(null)

  const { track, setTrack } = useContext(TrackContext);
  const [isDataDefined, setIsDataDefined] = useState(false);

  const { id } = useParams<{ id: string }>();

  const fetchData = async (id: string) => {
    // if (searchResult?.type == "artist") {
    try {
      const artist = await fetchArtistByIdTest(id);
      if (artist) {
        setSearchResult(artist);

        setIsDataDefined(true);

        // If the fetched data is an artist, set the track state to null
        // setSongResult(null);
        setTrack(null);
        return artist;
      }
    } catch (error) {
      // Ignore errors when fetching an artist by an album | track ID
    }
    // }
    // if (searchResult?.type == "album") {
    try {
      const album = await fetchAlbumByIdTest(id);
      if (album) {
        setSearchResult(album);

        setIsDataDefined(true);

        // If the fetched data is an album, set the track state to null
        // setSongResult(null);
        setTrack(null);
        return album;
      }
    } catch (error) {
      // Ignore errors when fetching an album by a track ID
    }
    // }

    try {
      const track = await fetchTrackByIdTest(id);
      if (track) {
        setSearchResult(null);

        // setSongResult(track)
        setTrack(track);

        setIsDataDefined(true);
        return track;
      }
    } catch (error) {
      // Ignore errors when failed fetching
    }
    setIsDataDefined(false);

    // If the fetched data is not an artist or an album, set the state to null
    setSearchResult(null);

    // If the fetched data is not an artist || album || track set the track state to null
    // setSongResult(null);
    setTrack(null);
  };

  useEffect(() => {
    fetchData(id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //Loader while fetching data
  if (!isDataDefined) {
    return (
      <div>
        <FontAwesomeIcon icon={faSpinner} spin /> Loading
      </div>
    );
  }

  //return album | artist | song page depending on what was fetched
  if (searchResult) {
    const { name, images } = searchResult;
    return (
      <div className="flex flex-col justify-center items-center w-5/6 h-full bg-slate-400 p-5 m-auto rounded-3xl">
        <h3>name: {name}</h3>
        {images != null && <img src={images[0].url} className="w-1/4" />}
      </div>
    );
  }

  if (track) {
    const { name, preview_url } = track;
    const { images } = track.album;
    return (
      <div className="flex flex-col justify-center items-center w-5/6 h-full bg-slate-400 p-5 m-auto rounded-3xl">
        <h3>name: {name}</h3>
        {images != null && <img src={images[0].url} className="w-1/4" />}

        {/* {preview_url && <audio src={preview_url} id='audio' />} */}

        {!preview_url && <h3>Cant get audio right now</h3>}
      </div>
    );
  }
}
