import { Categories } from '@spotify/web-api-ts-sdk';
import { useEffect, useState } from 'react'
import { spotifyApi } from '../../Utilities/fetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';

export default function TopCategories() {

  const [categories, setCategories] = useState<Categories>();

  const getCategories = async () => {

    const data = await spotifyApi.browse.getCategories('IL', undefined, 10)

    setCategories(data)
    
  };

  useEffect(() =>{
    getCategories()
  },[])

  return (
    <div className='relative flex flex-col w-full h-full p-5 m-auto rounded-3xl'>
            <div className='w-full h-fit backdrop-blur-xl font-bold text-3xl'>
                <h2 className='text-center w-full p-3'>Top Categories</h2>
            </div>

            {!categories &&
                <div>
                    <FontAwesomeIcon icon={faSpinner} spin /> Loading
                </div>
            }

            <div className="mx-auto h-1/2 w-fit">
                {categories && <Carousel
                    showArrows
                    infiniteLoop
                    animationHandler={"fade"}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    interval={3000}
                    transitionTime={2000}
                    stopOnHover
                    useKeyboardArrows
                    autoPlay
                    className="max-w-4xl"
                >

                    {categories.categories.items.map((category) => {
                        const { icons } = category
                        return (
                            <div key={category.id} className="w-fit m-auto hover:opacity-60 duration-500">
                                {icons && <img src={icons[0].url} className='h-full w-full rounded-full' />}
                            </div>
                        )
                    })}
                </Carousel>}
            </div>

        </div>
  )
}
