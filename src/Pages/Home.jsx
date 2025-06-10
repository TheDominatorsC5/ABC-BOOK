import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BookCards from '../Components/BookCards';
import { useState } from 'react';


export default function Home() {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'Book One',
            imageUrl: 'https://i.pinimg.com/736x/3a/dc/ff/3adcff7a670cde2ea2bb8ceadb6cceac.jpg',
            description: 'This is a description of Book One.',
            rating: 4.5,
            author: 'Author One',
            publishedDate: '2023-01-01',
        },
        {
            id: 2,
            title: 'Book Two',
            imageUrl: 'https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg',
            description: 'This is a description of Book Two.',
            rating: 4.0,
            author: 'Author Two',
            publishedDate: '2023-02-01',
        },
        {
            id: 3,
            title: 'Book Three',
            imageUrl: 'https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling5.jpg',
            description: 'This is a description of Book Three.',
            rating: 3.5,
            author: 'Author Three',
            publishedDate: '2023-03-01',
        },
        {
            id: 4,
            title: 'Book Four',
            imageUrl: 'https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg',
            description: 'This is a description of Book Four.',
            rating: 5.0,
            author: 'Author Four',
            publishedDate: '2023-04-01',
        },
        {
            id: 5,
            title: 'Book One',
            imageUrl: 'https://i.pinimg.com/736x/3a/dc/ff/3adcff7a670cde2ea2bb8ceadb6cceac.jpg',
            description: 'This is a description of Book One.',
            rating: 4.5,
            author: 'Author One',
            publishedDate: '2023-01-01',
        },
        {
            id: 6,
            title: 'Book Two',
            imageUrl: 'https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg',
            description: 'This is a description of Book Two.',
            rating: 4.0,
            author: 'Author Two',
            publishedDate: '2023-02-01',
        },
        {
            id: 7,
            title: 'Book Three',
            imageUrl: 'https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling5.jpg',
            description: 'This is a description of Book Three.',
            rating: 3.5,
            author: 'Author Three',
            publishedDate: '2023-03-01',
        },
        {
            id: 8,
            title: 'Book Four',
            imageUrl: 'https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg',
            description: 'This is a description of Book Four.',
            rating: 5.0,
            author: 'Author Four',
            publishedDate: '2023-04-01',
        },
    ])

    return (
        <>
            <Navbar />
            <BookCards books={books} />
            <Footer />
        </>
    )
} 