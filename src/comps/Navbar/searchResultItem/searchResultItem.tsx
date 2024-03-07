import { Link } from 'react-router-dom'
import { Artist, SimplifiedAlbum } from '@spotify/web-api-ts-sdk'


export default function SearchResultItem(props: { data: Artist | SimplifiedAlbum }) {

    const data = props.data

    const { name, images, id } = data

    const imageNotFound = 'src/assets/imageNotFound.jpg'

    return (
        <Link to={`Search/${id}`} className='flex justify-between w-full hover:bg-white hover:bg-opacity-30 rounded-lg p-2 duration-200 items-center'>

            <h3 className=' w-full ' 
            // onClick={() => console.log(data)}
            >
                {`${name}`}
            </h3>

            <img src={images[0] != undefined ? images[0].url : imageNotFound} className='rounded-lg w-1/4' />

        </Link>
    )
}
