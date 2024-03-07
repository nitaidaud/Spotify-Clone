import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarItem from './navbarItem'
import SearchBar from './searchBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    // <nav className='navbar pb-3 w-full flex lg:flex-row flex-col items-center justify-start text-start top-0 left-0 bg-opacity-50'>

    //   <div className='w-1/4 min-w-fit'>
    //     <Link to={''}>
    //       <h1><FontAwesomeIcon icon={faSpotify} className='text-green-400' /> Musicify</h1>
    //     </Link>
    //   </div>
    //   <div className='relative md:flex md:flex-row flex-col-reverse justify-center items-center w-full mt-4 hidden'>
    //     <SearchBar />
    //     <NavbarItem content='New Releases' />
    //     <NavbarItem content='New Feed' />
    //     <NavbarItem content='Shuffle Play' />
    //   </div>
    // </nav>


    <nav className="navbar z-50 text-start">
      <div className="flex items-center lg:justify-start justify-between">

        <div className="relative w-full flex items-center lg:justify-start justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <Link to={''}>
              <h1><FontAwesomeIcon icon={faSpotify} className='text-green-400' /> Musicify</h1>
            </Link>
          </div>

          {/* Hamburger menu */}
          <div className="inset-y-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden sm:block lg:m-auto">
            <div className="flex m-auto space-x-4">
              <SearchBar />
              <NavbarItem content='New Releases' />
              <NavbarItem content='New Feed' />
              <NavbarItem content='Shuffle Play' />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${open ? '' : 'hidden'}`}>
        <div className="px-2 py-2 flex flex-col items-center justify-center">
          <SearchBar />
          <NavbarItem content='New Releases' />
          <NavbarItem content='New Feed' />
          <NavbarItem content='Shuffle Play' />
        </div>
      </div>
    </nav>

  )
}
