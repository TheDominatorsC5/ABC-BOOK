import { House, LibraryBig, BookOpen, Contact, CircleUserRound } from 'lucide-react';
import logo from "../assets/images/logo.png";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between mb-5">
        <div className="flex items-center gap-1">
          <div>
            <img className="w-70 h-35 flex shrink-0" src={logo} alt="Logo" />
          </div>

          <div className="hidden w-full max-w-md mx-6 md:flex items-center">
            <input
              type="text"
              placeholder="Search book by author or publisher"
              className="w-full px-10 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-red-200 placeholder:text-xs"
            />
            <div className="-ml-10 flex items-center text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>


        </div>
        <div className="flex items-center gap-2.5"> <button className="text-white bg-orange-600 hover:bg-red-700 py-2 px-6 rounded-2xl text-sm ">Sign In</button><CircleUserRound className='hover-bg-red-600 text-gray-700 hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out' />
        </div>
      </div>
      <nav>

        <ul className="flex justify-center gap-15 bg-red-100 p-2">
          <li className="hover:scale-125 transition-transform duration-600 ease-in-out"><Link className="font-semibold text-sm text-gray-700 hover:text-red-600 " to="/"><House /> Home</Link></li>
          <li className='hover:scale-125 transition-transform duration-600 ease-in-out'><Link className="text-gray-700 hover:text-red-600 font-semibold text-sm" to="/bookspage"><LibraryBig />Categories</Link></li>
          <li className='hover:scale-125 transition-transform duration-600 ease-in-out'><Link className="text-gray-700 hover:text-red-600 font-semibold text-sm" to="/viewbook"><BookOpen />Book</Link></li>
          <li className='hover:scale-125 transition-transform duration-600 ease-in-out'><a className="text-gray-700 hover:text-red-600 font-semibold text-sm" href="#footer"><Contact />Contact</a></li>
        </ul>

      </nav>
    </header>
  );
}
