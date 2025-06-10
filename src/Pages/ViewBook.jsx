import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import lemonCase from '../assets/images/lemon-case-image.png';
import { Link } from 'react-router';

export default function ViewBook() {
  return (
    <>
      <Navbar />

        <section className='h-full'>
          <div className='w-auto h-80 bg-red-400 flex justify-center m-4 items-center gap-16'>
            <div className='m-2'>
              <img className='' src={lemonCase} alt="The lemon suite case" />
            </div>

            <div>
              <h1 className='text-4xl'>The lemon suite case</h1>
              <p className='text-2xl'>By: Peggy Oppong</p>
              <p>25$</p>
              <p className="text-sm text-gray-500 mt-1">Published: 18/01/24</p>
            </div>
          </div>
        </section>

      <Footer />
    </>
  );
}