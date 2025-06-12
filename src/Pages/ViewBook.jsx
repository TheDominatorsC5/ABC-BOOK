import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import lemonCase from '../assets/images/lemon-case-image.png';
import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

export default function ViewBook() {
  return (
    <>
      <Navbar />

      <section className='h-full'>
        <div className='max-w-screen-xl mx-auto py-8 md:py-12 bg-red-300 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 sm:px-8'>
          <div className='mx-24 shadow-xl/30 items-center'>
            <img className='max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg' src={lemonCase} alt="The lemon suite case" />
          </div>

          <div className='text-slate-800 text-center md:text-left flex-grow items-center'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'>The lemon suite case</h1>
            <p className='text-xl sm:text-2xl font-semibold mb-1'>By: Peggy Oppong</p>
            <p className='font-semibold text-lg sm:text-xl mb-1'>25$</p>
            <p className="text-slate-700 font-semibold text-base sm:text-lg">Published: 18/01/24</p>

            <div className='flex justify-center md:justify-start gap-6 sm:gap-10 mt-8 sm:mt-12'>

              <Link className='hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out' to="#">
                <ShoppingCart />
              </Link>

              <Link className='hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out' to="/editbook">
                <SquarePen />
              </Link>

              <Link className='hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out' to="#">
                <Trash2 />
              </Link>

            </div>
          </div>
        </div>
        <div>
          <h2 className='text-center text-3xl font-bold text-slate-600 underline m-6'>Description</h2>

          <p className='w-[60%] mx-auto mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eaque! Eum beatae aliquam at adipisci tempore error exercitationem praesentium molestiae amet, expedita autem veniam voluptate tenetur in sit magnam, ipsam ab! Necessitatibus consequatur animi aperiam similique nobis illum, commodi maxime unde natus maiores itaque laudantium recusandae asperiores odit placeat nam!</p>
        </div>
      </section>

      <Footer />
    </>
  );
}