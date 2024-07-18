import { NewReleases } from "@spotify/web-api-ts-sdk";
import { Link } from "react-router-dom";

export default function TrendingNowInfo(props: { trending: NewReleases }) {
  const trending = props.trending;

  return (
    <div className="min-h-fit w-full flex flex-col justify-start items-start gap-2 max-h-fit pt-4 px-4">
      {trending.albums.items.map((item) => {
        return (
          <Link
            key={item.id}
            to={`search/${item.id}`}
            className="flex w-full items-center gap-2 text-start hover:bg-black hover:bg-opacity-30 duration-200 p-3 rounded-lg max-h-fit"
          >
            <img
              src={item.images[0].url}
              className="rounded-full xl:w-1/12 w-1/5"
            />
            <div className="flex flex-col">
              <h3> {item.name} </h3>
              <h5 className="text-xs opacity-50">{item.artists[0].name}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
