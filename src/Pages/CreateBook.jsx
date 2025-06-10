import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function ViewBook() {
  return (
    <>
      <Navbar />
      <section>
        <div className='flex bg-[#FF1616] w-[60%] mx-auto my-6'>

          <div id='edit-image' className='items-start w-[70%] py-6 pl-14'>
            <img src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best-books1.jpg" alt=" book cover" />
          </div>

          <form id="" class="flex flex-col justify-around items-start mt-10 h-[50vh] w-[95%] mx-auto">
            <p className='text-2xl text-white font-semibold pb-6'>Create Book</p>
            <div className='flex flex-col w-[75%]'>
              <input type="text" name="" id="" placeholder='Book Title' className='w-full bg-white p-2 rounded-lg' />
              <input type="text" name="" id="" placeholder='Author' className='w-full bg-white p-2 rounded-lg mt-2' />
              <select name="type" id="type" className="bg-white p-2 rounded-lg mt-2">
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
              </select>

              <input type="text" name="" id="" placeholder='Description' className='w-full h-[15vh] bg-white p-2 rounded-lg mt-2' />

            </div>

          <form className="flex justify-center items-center text-sm gap-2 pt-12">
                    <input type="file" placeholder="choose file" name="" className="bg-white border-1 px-6 py-3 text-zinc-500 rounded-md cursor-pointer" />

                    <button type="submit" className="border-1 px-8 py-3 border-radius- text-white rounded-md hover:bg-white hover:text-[#FF1616] cursor-pointer">Add Book</button>
                </form>

          </form>



        </div>


      </section>
      <Footer />
    </>
  );
}