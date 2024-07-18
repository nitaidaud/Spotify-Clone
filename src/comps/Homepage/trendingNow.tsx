import { useEffect, useState } from 'react'
import { fetchNewReleasesTest } from '../../Utilities/fetcher'
import TrendingNowInfo from './trendingNowInfo';
import { NewReleases } from '@spotify/web-api-ts-sdk';

export default function TrendingNow() {

    // const [trending, setTrending] = useState<NewReleases>()

    const [trendingTest, setTrendingTest] = useState<NewReleases>()

    const fetchTrending = async () => {

        const data = await fetchNewReleasesTest()
        setTrendingTest(data)

        return data
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className='relative grid justify-between w-full h-full p-5 m-auto rounded-3xl'>
            <div className='w-full h-fit backdrop-blur-xl font-bold text-3xl'>
                <h2 className='text-start w-full p-3 '>Trending Right Now</h2>
            </div>
            <div className='w-fit max-w-96 trending-container overflow-y-auto'>
                <div className='flex h-full w-full bg-opacity-20'>
                    <div className='w-full'>
                        {trendingTest && <TrendingNowInfo trending={trendingTest!} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
