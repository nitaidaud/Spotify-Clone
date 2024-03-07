import { Track } from '@spotify/web-api-ts-sdk'
// import{ useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchResultSong(props: { data: Track }) {

    const data: Track = props.data
    
    const { name, id } = data
    const{images} = data.album

    // const [ isPlay, setIsPlay ] = useState(false);

    // const audioRef = useRef<HTMLAudioElement>(null);

    const imageNotFound = 'src/assets/imageNotFound.jpg'

    // useEffect(() => {
    //     if (isPlay) {
    //       audioRef.current?.play();
    //     } else {
    //       audioRef.current?.pause(); 
    //     }
    //   },[isPlay]);

    return (
        <Link to={`Search/${id}`} className='flex justify-between w-full hover:bg-white hover:bg-opacity-30 rounded-lg p-2 duration-200 items-center' 
        // onClick={() =>{
        //     setIsPlay(!isPlay)
        //     audioRef.current?.play()
        // }}
        >

            <h3 className=' w-full '>
                {`${name}`}
            </h3>

            <img src={images[0] != undefined ? images[0].url : imageNotFound} className='rounded-lg w-1/4' />

            {/* <audio ref={audioRef} src={preview_url!} controls/> */}

        </Link>
    )
}
