import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeCards from '../Components/HomeCards';
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

    ])

    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center px-4 md:px-24 transform hover:scale-105 transition-transform duration-500 ease-in-out'>
                <img src="https://i.pinimg.com/736x/4b/a0/29/4ba029d7dc0d448bc9497c1ff995c779.jpg" alt="" className='w-full h-44 md:h-[90vh] object-cover relative z-10' />
            </div>
            <div className='animate_animated animate-bounce animate_delay-2s flex flex-col items-center justify-center px-6 md:px-24'>
                <h1 className="text-center text-4xl font-bold mt-8 word-spacing-3">Welcome To{' '}
                    <span className='text-[#0A78A0]'>A</span>
                    <span className='text-[#8EC81E]'>B</span>
                    <span className='text-[#D12A2F]'>C</span>{' '}
                    <span className='text-[#F87171]'>BOOKS</span> Store</h1>
            </div>
            <h1 className='mx-4 md:mx-24 text-2xl font-bold word-spacing-3 mt-20'>
                Featured This Week
            </h1>

            <HomeCards books={books} />
            <Footer />
        </>
    )
} 