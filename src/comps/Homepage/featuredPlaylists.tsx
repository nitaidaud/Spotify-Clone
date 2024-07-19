import { FeaturedPlaylists } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";
import { spotifyApi } from "../../Utilities/fetcher";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function FeaturedPlaylist() {
  const [playlist, setPlaylist] = useState<FeaturedPlaylists>();

  const getPlaylist = async () => {
    const data = await spotifyApi.browse.getFeaturedPlaylists(
      "IL",
      "en",
      undefined,
      10,
    );

    setPlaylist(data);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    // <div className="flex flex-col w-full items-center h-full">

    <div className="relative flex flex-col w-full h-full p-5 m-auto rounded-3xl">
      <div className="w-full h-fit backdrop-blur-xl font-bold text-3xl">
        <h2 className="text-center w-full p-3">Featured Playlists</h2>
      </div>

      {!playlist && (
        <div>
          <FontAwesomeIcon icon={faSpinner} spin /> Loading
        </div>
      )}

      <div className="mx-auto h-1/2 w-fit">
        {playlist && (
          <Carousel
            showArrows
            infiniteLoop
            animationHandler={"fade"}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            interval={3000}
            transitionTime={2000}
            stopOnHover
            useKeyboardArrows
            autoPlay
            className="max-w-72"
          >
            {playlist.playlists.items.map((playlist) => {
              const { images, id } = playlist;
              return (
                <Link key={id} to={`search/${id}`}>
                  <div
                    key={playlist.id}
                    className="w-fit m-auto hover:opacity-60 duration-500"
                  >
                    {images && (
                      <img
                        src={images[0].url}
                        className="h-full w-full rounded-full"
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
}
