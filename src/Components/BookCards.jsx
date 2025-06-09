export default function BookCards({ books }) {
  return (
    <div className="book-cards">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>Published: {book.publishedDate}</p>
        </div>
      ))}
    </div>
  );
}