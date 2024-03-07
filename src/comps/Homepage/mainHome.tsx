import TrendingNow from './trendingNow'

export default function MainHome() {
  return (
    <div className='relative grid justify-between w-full h-full p-5 m-auto rounded-3xl'>
      <div className='w-full h-fit backdrop-blur-xl font-bold text-3xl'>
        <h2 className='text-start w-full p-3 '>Trending Right Now</h2>
      </div>
      <div className='w-fit max-w-96 trending-container overflow-y-auto'>
        <TrendingNow />
      </div>
    </div>
  )
}
