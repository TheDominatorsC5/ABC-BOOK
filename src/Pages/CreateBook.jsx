import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { apiClient } from '../api/client';
import SubmitButton from '../Components/SubmitButton';
import { useNavigate } from 'react-router';

export default function CreateBook() {
  const navigate = useNavigate();

  const postBook = async (data) => {
    // Post data to API
    try {
      const response = await apiClient.post("/books", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
      navigate('/bookspage')
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
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkFSyw5xNET_FkUjRWq1dNERFLFt33Q7WxQ&s"
            alt=" book cover" 
            className='w-full h-auto object-cover rounded-lg' />
          </div>

          <form action={postBook} id="" className="flex flex-col justify-around items-start h-[vh] w-full lg:w-[50%] px-6 py-4">

            <p className='text-3xl text-white font-bold pb-4'>Create Book</p>

            <div className='flex flex-col w-full space-y-3'>

              <input type="text" 
              name="title" 
              id="" 
              placeholder='Book Title' 
              className='w-full bg-white p-3 rounded-lg' />

              <input type="text" 
              name="author" 
              id="" 
              placeholder='Author' 
              className='w-full bg-white p-3 rounded-lg' />

              <input type="text" 
              name="year" 
              id="" 
              placeholder='Publication Year' 
              className='w-full bg-white p-3 rounded-lg' />

              <textarea 
              name="description" 
              id=""
              placeholder='Description'
              className='w-full bg-white p-3 rounded-lg h-[15vh]'></textarea>

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

            <div className='pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full'>
              <input type="text" 
              placeholder="Choose file URL" 
              name="image" 
              className="bg-white px-6 py-3 text-zinc-700 rounded-md w-full sm:w-auto" />

              <SubmitButton 
              title={"Add Book"} 
              className="border border-white px-6 py-3 text-white rounded-md hover:bg-white hover:text-[#FF1616] bg-transparent transition" />

            </div>

          </form>

        </div>

      </section>
      <Footer />
    </>
  );
}