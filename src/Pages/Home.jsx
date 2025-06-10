import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeCards from '../Components/HomeCards';
import { useState } from 'react';

const HomeImg = "https://i.pinimg.com/736x/4b/a0/29/4ba029d7dc0d448bc9497c1ff995c779.jpg"

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
            <div className='flex flex-col items-center justify-center px-24 '><h1></h1>
                <img src={HomeImg} alt="" className='w-full h-[90vh] object-cover relative z-10' />
            </div>
            <h1 className="text-center text-2xl font-bold mt-8 word-spacing-3">Welcome To{' '}
                <span className='text-[#0A78A0]'>A</span>
                <span className='text-[#8EC81E]'>B</span>
                <span className='text-[#D12A2F]'>C</span>{' '}
                <span className='text-[#F87171]'>BOOKS</span> Store</h1>

            <HomeCards books={books} />
            <Footer />
        </>
    )
} 