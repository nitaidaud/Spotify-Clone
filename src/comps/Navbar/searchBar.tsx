/* eslint-disable @typescript-eslint/ban-ts-comment */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import SearchResult from "./searchResult";
// import { ArtistFechModel } from '../../Models/ArtistsFechModel';
import { fetchSearch } from "../../Utilities/fetcher";
// import { Album } from '../../Models/Album';
// import { TrackSearch } from '../../Models/TrackSearch';
import { PartialSearchResult } from "@spotify/web-api-ts-sdk";

export default function SearchBar() {
  const [hidden, setHidden] = useState(false);

  const [search, setSearch] = useState<string>("");

  // const [artist, setAtrist] = useState<ArtistFechModel>();

  // const [artistTest, setAtristTest] = useState<Required<Pick<PartialSearchResult, "artists">>>();

  // const [album, setAlbum] = useState<Album>();

  // const [albumTest, setAlbumTest] = useState<Required<Pick<PartialSearchResult, "albums">>>();

  // const [track, setTrack] = useState<TrackSearch>();
  // const [trackTest, setTrackTest] = useState<Required<Pick<PartialSearchResult, "tracks">>>();

  const [data, setData] =
    useState<
      Required<Pick<PartialSearchResult, "tracks" | "albums" | "artists">>
    >();

  const fetchData = async (search: string) => {
    // setAtrist(await fetchArtist(search))
    // setAtristTest(await fetchArtistTest(search))
    // setAlbum(await fetchAlbum(search))
    // setAlbumTest(await fetchAlbumTest(search))
    // setTrack(await fetchTrack(search));
    // setTrackTest(await fetchTrackTest(search));

    setData(await fetchSearch(search));
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const inputVisability = hidden ? "p-2" : "w-0 p-0";
  const iconVisability = !hidden ? "p-2" : "w-0 p-0";

  useEffect(() => {
    window.addEventListener("click", (ev) => {
      // @ts-expect-error
      const element: HTMLElement = ev.target;
      if (element.id == "searchIcon") {
        setHidden(true);
        setSearch("");
      } else if (element.id != "searchInput") {
        setHidden(false);
      }
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center text-gray-500">
      <FontAwesomeIcon
        icon={faSearch}
        id="searchIcon"
        className={`${iconVisability} hover:text-white duration-300`}
      />
      <div className="xl:absolute md:right-3 flex flex-col justify-center items-center ">
        <input
          type="search"
          id="searchInput"
          className={`right-3 text-black text-xl rounded-3xl bg-white bg-opacity-50 hover:bg-opacity-60 duration-300 outline-none ${inputVisability}`}
          value={search == "" ? "" : search}
          onInput={(ev) => {
            setSearch(ev.currentTarget.value.toString());
            if (search != "") {
              fetchData(search);
            }
          }}
        />

        {/* {hidden && artistTest && albumTest && trackTest && search != "" && <SearchResult artist={artistTest} album={albumTest} track={trackTest} />} */}

        {hidden && data && search != "" && <SearchResult data={data} />}
      </div>
    </div>
  );
}
