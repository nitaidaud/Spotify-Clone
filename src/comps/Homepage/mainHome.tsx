import { spotifyApi } from '../../Utilities/fetcher';
import FeaturedPlaylist from './featuredPlaylists';
import TopCategories from './topCategories';
import TrendingNow from './trendingNow'

console.log("test playlist", await spotifyApi.browse.getFeaturedPlaylists('IL', 'en', undefined, 10));


export default function MainHome() {
  return (

    <div className='grid lg:grid-cols-2 lg:grid-rows-1 lg:h-full h-screen'>
      <div className='overflow-auto'>
        <TrendingNow />
      </div>
      <div className='w-full h-full grid'>
        <div>
          <FeaturedPlaylist />
        </div>

        <div>
          <TopCategories/>
        </div>
      </div>
    </div>
  )
}
