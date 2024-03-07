import { Route, Routes } from 'react-router-dom'
import MainHome from './Homepage/mainHome'
import MainAlbum from './Albums/mainAlbum'
import MainTracks from './Tracks/mainTracks'
import MainGenres from './Genres/mainGenres'
import SearchResultPage from './SearchResult/searchResultPage'

export default function AppRoutes() {
    return (
        <div className='absolute right-0 w-full lg:h-full h-4/5 lg:py-12 py-10 m-auto top-0'>
            <Routes>
                <Route index element={<MainHome />} />

                <Route path="/Albums" element={<MainAlbum />} />

                <Route path="/Tracks" element={<MainTracks />} />

                <Route path="/Genres" element={<MainGenres />} />

                <Route path='/Search/:id' element={<SearchResultPage />} />

            </Routes>
        </div>
    )
}
