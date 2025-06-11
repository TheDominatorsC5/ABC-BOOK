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
          <div className='w-auto h-100 bg-red-300 flex justify-center my-4 mx-20 items-center gap-16'>
            <div className='m-2 shadow-xl/30'>
              <img className='' src={lemonCase} alt="The lemon suite case" />
            </div>

            <div className='text-slate-800'>
              <h1 className='text-4xl font-bold'>The lemon suite case</h1>
              <p className='text-2xl font-semibold mt-2'>By: Peggy Oppong</p>
              <p className='font-semibold mt-2 mx-8 text-lg'>25$</p>
              <p className=" text-slate-700 mt-1 font-semibold">Published: 18/01/24</p>

              <div className='flex gap-10 mt-12 mx-4 w-10'>

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
            <h2  className='text-center text-3xl font-bold text-slate-600 underline m-6'>Description</h2>

            <p className='w-[60%] mx-auto mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eaque! Eum beatae aliquam at adipisci tempore error exercitationem praesentium molestiae amet, expedita autem veniam voluptate tenetur in sit magnam, ipsam ab! Necessitatibus consequatur animi aperiam similique nobis illum, commodi maxime unde natus maiores itaque laudantium recusandae asperiores odit placeat nam!</p>
          </div>
        </section>

      <Footer />
    </>
  );
}