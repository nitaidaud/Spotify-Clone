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
        <div className='flex h-full w-full bg-opacity-20'>
            <div className='w-full'>
                {trendingTest && <TrendingNowInfo trending={trendingTest!} />}
            </div>
        </div>
    )
}
