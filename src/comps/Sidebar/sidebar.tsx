
import BrowseMusic from './browseMusic'
import SidebarLibrary from './sidebarLibrary'

export default function Sidebar() {
    return (
        <div className='fixed sidebar z-50 lg:max-w-28 lg:top-32 bottom-0 lg:left-10 left-0 lg:px-0 px-2 flex lg:flex-col text-gray-500 lg:justify-start lg:h-full lg:w-1/12 w-full min-w-fit border-r border-collapse border-gray-500'>

            <BrowseMusic />

            <SidebarLibrary />
        </div>
    )
}
