import lemonCase from '../assets/images/lemon-case-image.png';
import { Link } from 'react-router';

export default function BooksCards({ books }) {

  return (
    <div className="book-card border rounded-lg p-4 shadow-md bg-white text-gray-800">
      <img
        src={lemonCase}
        alt= 'The lemon suite case'
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold">The Lemon Suite case</h2>
      <p className="text-md font-medium">By: Peggy Oppong</p>
      
      <div className='flex justify-between items-center'>
          <div>
              <p>25$</p>
              <p className="text-sm text-gray-500 mt-1">Published: <br />18/01/24</p>
          </div>
          <div><button className='text-white bg-orange-600 hover:bg-red-700 py-2 px-6 rounded-2xl text-sm mt-5'><Link to="/viewbook">View Book</Link></button></div>
              </div>
      </div>
  );
}