import FeaturedPlaylist from "./featuredPlaylists";
import TopCategories from "./topCategories";
import TrendingNow from "./trendingNow";

console.log("id", import.meta.env.VITE_CLIENTID);
console.log("secret", import.meta.env.VITE_CLIENTSECRET);


export default function MainHome() {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 lg:h-full h-screen">
      <div className="overflow-auto">
        <TrendingNow />
      </div>
      <div className="w-full h-full grid">
        <div>
          <FeaturedPlaylist />
        </div>

        <div>
          <TopCategories />
        </div>
      </div>
    </div>
  );
}
