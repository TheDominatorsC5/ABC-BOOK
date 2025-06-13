import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import lemonCase from '../assets/images/lemon-case-image.png';
import { Link } from 'react-router';
import { ShoppingCart, SquarePen, Trash2 } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router';
import { apiClient } from '../api/client';
import { useEffect, useState } from 'react';

export default function ViewBook() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [book, setBook] = useState({});

  const getBook = () => {
    apiClient.get(`/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(getBook, []);

  const deleteBook = () => {
    apiClient.delete(`/books/${book.id}`)
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <Navbar />

      <section className='h-full'>
        <div className='max-w-screen-xl mx-auto py-8 md:py-12 bg-red-300 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 sm:px-8'>
          <div className='mx-24 shadow-xl/30 items-center'>
            <img className='h-80 shadow-xl/20 block max-w-xs sm:max-w-sm md:max-w-md rounded-lg' src={book.image} alt="Book image" />
          </div>

          <div className='text-slate-800 text-center md:text-left flex-grow items-center'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'>{book.title}</h1>
            <p className='text-xl sm:text-2xl font-semibold mb-1'>By: {book.author}</p>
            <p className="text-slate-700 font-semibold text-base sm:text-lg mb-1">Published: {book.year}</p>


            <div className='flex justify-center md:justify-start gap-6 sm:gap-10 mt-8 sm:mt-12'>

              <Link className='hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out' to="#">
                <ShoppingCart />
              </Link>

              <Link
                to={`/editbook?id=${id}`}
                className='hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out'
                title="Edit Book">
                <SquarePen />
              </Link>

              <button onClick={deleteBook} className='cursor-pointer hover:text-red-600 hover:scale-125 transition-transform duration-600 ease-in-out'>
                <Trash2 />
              </button>

            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}