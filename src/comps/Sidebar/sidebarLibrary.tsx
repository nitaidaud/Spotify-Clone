import SidebarLink from './sidebarLink'

export default function SidebarLibrary() {
  return (
    <div className='text-start mt-10 w-full hidden lg:block'>
        <h2 className='text-white font-bold mb-3'>Library</h2>

        <SidebarLink content='Recently Played'/>

        <SidebarLink content='Favorite Tracks'/>
        
        <SidebarLink content='Charts'/>
        
        <SidebarLink content='Recently'/>

    </div>
  )
}
