import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useSearchParams, useNavigate } from 'react-router';
import { apiClient } from '../api/client';
import { useEffect, useState } from 'react';
import SubmitButton from '../Components/SubmitButton';

export default function EditBook() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [book, setBook] = useState({});

    const getBook = () => {
        apiClient.get(`/books/${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(getBook, []);

    const patchBook = async (data) => {
        // Post data to API
        try {
            const response = await apiClient.patch(`/books/${id}`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <section>
                <div className='flex flex-col lg:flex-row bg-[#FF1616] w-[90%] lg:w-[80%] xl:w-[60%] mx-auto my-6 overflow-hidden'>

                    <div id='edit-image' className='w-full lg:w-[50%] flex justify-center items-start p-6'>
                        <img
                            src={book.image}
                            alt=" book cover"
                            className='w-full h-auto object-cover rounded-lg' />
                    </div>

                    <form action={patchBook} className="flex flex-col justify-around items-start w-full lg:w-[50%] px-6 py-4">

                        <p className='text-3xl text-white font-bold pb-4'>Edit Details</p>

                        <div className='flex flex-col w-full space-y-3'>

                            <input type="text"
                                name="title"
                                placeholder='Book Title'
                                defaultValue={book.title}
                                className='w-full bg-white p-2 rounded-lg'
                            />

                            <input type="text"
                                name="author"
                                placeholder='Author'
                                defaultValue={book.author}
                                className='w-full bg-white p-2 rounded-lg' />

                            <input type="text"
                                name="year"
                                placeholder='Publication Year'
                                defaultValue={book.year}
                                className='w-full bg-white p-2 rounded-lg' />

                            <textarea
                                name="description"
                                placeholder='Description'
                                defaultValue={book.description}
                                className='w-full bg-white p-2 rounded-lg h-[15vh]'></textarea>

                            <input type="text"
                                placeholder="Choose file URL"
                                name="image"
                                defaultValue={book.image}
                                className="bg-white px-6 py-3 text-zinc-700 rounded-md w-full sm:w-auto" />

                            {/* <select name="type" id="type" className="bg-white p-2 rounded-lg mt-2">
                                <option selected disabled>Choose Category</option>
                                <option value="drama">Anime</option>
                                <option value="tech">Adventure</option>
                                <option value="tech">Bedtime Stories</option>
                                <option value="tech">Comics</option>
                                <option value="tech">Early Readers</option>
                                <option value="tech">Fairy Tales</option>
                                <option value="tech">Folklore</option>
                                <option value="tech">Learning ABCs</option>
                                <option value="tech">History</option>
                                <option value="tech">Picture Books</option>
                            </select> */}


                        </div>

                        <div className="flex justify-center items-center text-sm pt-4">
                            <SubmitButton
                                title={"Confirm Changes"}
                                className="border border-white px-6 py-3 text-white rounded-md hover:bg-white hover:text-[#FF1616] bg-transparent transition"
                            />
                        </div>

                    </form>

                </div>

            </section>
            <Footer />
        </>
    )
}