import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import kidsBanner from "../assets/images/kids-blank-banner.jpg";
import BooksCards from '../Components/BooksCards';
import { Plus } from "lucide-react";
import { Link } from 'react-router';
import { apiClient } from '../api/client';
import { useState, useEffect } from 'react';

export default function BooksPage() {
  // Dummy book array (for now, just to repeat the same BookCard)
  // const books = [1, 2, 3, 4];

  const [books, setBooks] = useState([]);

  const getBooks = () => {
    apiClient.get('/books')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(getBooks, []);


  return (
    <>
      <Navbar />

      <section>
        
          <div
            className="w-full relative overflow-hidden bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${kidsBanner})`,
              paddingBottom: '40.25%',
            }}
          >
            <div className="absolute inset-0 flex flex-col gap-0 items-center justify-center text-center text-violet-600 p-8">
              <p className='font-bold mt-2 mb-0 p-0'
                style={{ fontSize: 'clamp(1.25rem, 4vw, 2.8rem)' }}
              >
                Find a Book
              </p>
              <p className='font-semibold mt-0 p-0'
                style={{ fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' }}
              >
                Welcome to the ABC Books Page!
              </p>
            </div>
          </div>

          <div className="mr-16 flex-shrink-0 justify-items-end">

            <Link to="/createbook" className="group block text-center hover:scale-110 transition-transform duration-600 ease-in-out text-sm md:text-base p-2 md:p-0">
              <Plus className="text-slate-700 border-2 rounded-full stroke-2 size-10 xs:size-8 group-hover:text-red-700 mx-auto" />
              <p className='text-sm font-semibold mt-2 text-slate-700 group-hover:text-red-700 mx-auto whitespace-nowrap'>Add Book</p>
            </Link>
          </div>

      </section>

      <section>
        <h2 id='pictureBooks' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Picture Books</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='earlyReaders' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Early Readers</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='history' className='text-center text-4xl font-bold text-slate-600 underline m-6'>History</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='folklore' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Folklore</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='fairyTales' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Fairy Tales</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='bedtimeStories' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Bedtime Stories</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='adventure' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Adventure</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='anime' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Anime</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='comics' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Comics & Graphic Novels</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <section>
        <h2 id='abcNumbers' className='text-center text-4xl font-bold text-slate-600 underline m-6'>Learning ABCs & Numbers</h2>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4 mx-8">
          {books.map(book => {
            return (
              <BooksCards key={book._id} book={book} />
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}