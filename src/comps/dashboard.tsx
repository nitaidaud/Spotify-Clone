import Sidebar from './Sidebar/sidebar'
import AppRoutes from './appRoutes'

export default function Dashboard() {
    return (
        <div className='relative flex justify-start items-center  h-full m-auto w-full'>
            <div className='relative lg:block bottom-0 xl:w-1/12 max-w-28'>
                <Sidebar />
            </div>
            <div className='relative py-12 2xl:w-5/6 w-9/12 m-auto h-full'>
                <AppRoutes />
            </div>
        </div>
    )
}
