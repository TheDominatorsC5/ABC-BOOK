import { Link } from 'react-router';

export default function BooksCards({ book }) {

  return (
    <div className="book-card border-2 border-slate-300 rounded-lg p-4 shadow-md bg-white text-slate-700">
      <img
        src={book.image}
        alt='Book image'
        className="h-48 object-contain mb-4 shadow-xl/20 mx-auto block"
      />
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-md font-medium">By: {book.author}</p>

      <div className='flex justify-between items-center font-semibold'>
        <div>
          <p className='mt-1 mx-4 text-orange-800'>25$</p>
          <p className="text-sm text-gray-500 mt-1">Published: <br />{book.year}</p>
        </div>
        <div>
          <Link to={`/viewbook?id=${book.id}`} className='text-white bg-orange-600 hover:bg-red-700 py-2 px-2 rounded-2xl text-sm mt-5 font-semibold'>
            View Book
          </Link>
        </div>
      </div>
    </div>
  );
}