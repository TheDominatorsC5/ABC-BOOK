import { Star } from "lucide-react";

export default function BookCards({ books }) {
  return (
    <section className="py-20 grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-6xl">
      {books.map((book) => (
        <div key={book.id} className=" rounded-lg shadow-md overflow-hidden bg-gray-100">
          <a href="#">
            <img src={book.imageUrl} alt={book.title} className="w-full h-96 object-cover rounded-t-md" />
          </a>
          <div className="bg-white p-4">
            <a href="#">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            </a>
            <p className="text-gray-700 mb-2 truncate">{book.description}</p>
            <p className="text-gray-500 mb-2">Author: {book.author}</p>
            <p className="text-gray-500 mb-2">Published: {new Date(book.publishedDate).toLocaleDateString()}</p>
            <p className="text-yellow-500">Rating: {book.rating}</p>
            <Star className="inline-block text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
          </div>
        </div>
      ))}
    </section>
  );
}