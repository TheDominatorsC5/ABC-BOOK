import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import kidsBanner from "../assets/kids-blank-banner.jpg";
import BookCards from '../Components/BookCards';

export default function BooksPage() {
  // Dummy book array (for now, just to repeat the same BookCard)
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <>
      <Navbar />
        <section>
          <div className="h-60 w-full bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center text-center text-violet-600 p-8"
                style={{ backgroundImage: `url(${kidsBanner})` }}>
            <h1 className='text-3xl font-bold text-center mt-4'>Books Page</h1>
            <p className='text-2xl font font-semibold text-center'>Welcome to the ABC Books Page!</p>
          </div>
        </section>

      <section>
        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-4">
          {books.map((item, index) => (
            <BookCards key={index} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}