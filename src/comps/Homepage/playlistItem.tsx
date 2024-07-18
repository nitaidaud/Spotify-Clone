import { FeaturedPlaylists } from '@spotify/web-api-ts-sdk'

export default function PlaylistItem(props: { featuredPlaylists: FeaturedPlaylists }) {

    const playlist = props.featuredPlaylists

    // const { images } = playlist
    return (
        // <div className='grid grid-flow-col items-center h-full'>


        // <ul className='min-h-fit w-full gap-2 max-h-fit pt-4 '>
            playlist.playlists.items.map((playlist) => {
                const { images } = playlist
                return (
                    <li className="w-full h-full">
                        {images && <img src={images[0].url} className='h-full w-full'/>}
                    </li>
                )
            })
        // </ul>


        // <ul className='min-h-fit w-full gap-2 max-h-fit pt-4 overflow-auto'>

            // <div className="w-full h-full">
            //     {images && <img src={images[0].url} className='w-1/3' />}
            // </div>

        // </ul>



    )
}
