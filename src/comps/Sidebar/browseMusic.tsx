import SidebarBtn from './sidebarBtn'
import { faHome, faList, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { faItunesNote } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

export default function BrowseMusic() {
    return (
        <div className='browse-music flex lg:flex-col justify-around w-full'>

            <h2 className='text-white capitalize font-semibold text-start mb-3 lg:block hidden'>Browse Music</h2>

            <NavLink to={"/"} className={"w-full"}>
                <SidebarBtn content={'Home'} icon={faHome} />
            </NavLink>

            <NavLink to={"/Albums"} className={"w-full"}>
                <SidebarBtn content={'Albums'} icon={faRecordVinyl} />
            </NavLink>

            <NavLink to={"/Tracks"} className={"w-full"}>
                <SidebarBtn content={'Tracks'} icon={faList} />
            </NavLink>

            <NavLink to={"/Genres"} className={"w-full"}>
                <SidebarBtn content={'Genres'} icon={faItunesNote} />
            </NavLink >
        </div>
    )
}
