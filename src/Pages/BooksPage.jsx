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
        <div className='flex items-center mx-20'>
          <div className="h-60 w-full bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center text-center text-violet-600 p-8"
            style={{ backgroundImage: `url(${kidsBanner})` }}>
            <h1 className='text-3xl font-bold text-center mt-4'>Find a Book</h1>
            <p className='text-2xl font font-semibold text-center'>Welcome to the ABC Books Page!</p>
          </div>
          <div>
            <Link to="/createbook" className="group block text-center">
              <Plus className="text-slate-700 border-1 rounded-full stroke-2 size-17 group-hover:text-red-700 mx-auto" />
              <p className='text-sm font-semibold mt-2 text-slate-700 group-hover:text-red-700 mx-auto'>Add Book</p>
            </Link>
          </div>
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