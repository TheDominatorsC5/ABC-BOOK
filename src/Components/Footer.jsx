import { Search, Mail, PhoneCall } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <footer id="footer" className="bg-red-200">

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">


          {/* column 1 */}

          <div className="flex flex-col items-center gap-1 p-2">
            <div className="mt-1">
              <img className="flex shrink-0 text-sm " src={logo} alt="Logo" />
            </div>


            <div className="flex gap-4 items-center text-gray-70 ">
              <div className="flex justify-between items-center w-10 h-10 border-1 border-gray-400 rounded-full text-gray-400 hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </div>
              <div className="flex justify-between items-center w-10 h-10 border-1 border-gray-400 rounded-full text-gray-400 hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" w-full lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></div>

              <div className="flex justify-between items-center w-10 h-10 border-1 border-gray-400 rounded-full text-gray-400 hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></div>


              <div className="flex justify-between items-center w-10 h-10 border-1 border-gray-400 rounded-full text-gray-400 hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" className="size-3" /></svg></div>
            </div>
          </div>


          {/* column 2 */}
          <div className="flex flex-col gap-5 p-3 mt-22">
            <h3 className="text-sm font-bold text-gray-800">Book Category</h3>
            <ul className="flex flex-col gap-1 ">
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="">Picture Books</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="">Early Readers</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="">Histroy</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="">Folklore</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="">Fairy Tales</a></li>
            </ul>
          </div>


          {/* column 3*/}
          <div className="flex flex-col gap-5 p-3 mt-27">
            <h3></h3>
            <ul className="flex flex-col gap-1">
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="#">Bedtime Stories</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="#">Adventure</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="#">Anime</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="#">Comics & Graphic Novels</a></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="#">Learning ABCs & Numbers</a></li>
            </ul>
          </div>


          {/* column 4 */}
          <div className="flex flex-col gap-5 p-3 mt-27">
            <h3 className="text-sm font-bold text-gray-800">Site Map</h3>
            <ul className="flex flex-col gap-1">
              <li><Link className="text-gray-700 hover:text-red-600 font-semibold text-xs" to="/">Home</Link></li>
              <li><Link className="text-gray-700 hover:text-red-600 font-semibold text-xs" to="/bookspage">Categories</Link></li>
              <li><Link className="text-gray-700 hover:text-red-600 font-semibold text-xs" to="/viewbook">View Book</Link></li>
              <li><a className="text-gray-700 hover:text-red-600 font-semibold text-xs" href="#footer">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-700 text-center font-semibold gap-5 text-xs ml-10 ">
        <h4 className=" hover:text-red-600 hover:underline">Email: abcchildrensbookstore@gmail.com</h4>
        <h4 className=" hover:text-red-600 hover:underline">Phone: +233 5473 89723</h4>
      </div>
      
      <p className="p-3 text-center text-xs mt-10 text-black">Copyright© 2025 All rights reserved | by ABC Children's Bookstore</p>

    </footer>

  );
}