import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function ViewBook() {
  return (
    <>
      <Navbar />
      <section>
        <div className='flex bg-[#FF1616] w-[80%] mx-auto'>
          <div className='flex flex-row justify-around items-center w-[40%] py-6'>
            <img src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best-books1.jpg" alt=" book cover" />
          </div>

          <form id="" class="flex flex-col justify-around items-center mt-10 h-[50vh] w-[35%] mx-auto">
            <input type="text" name="" id="" placeholder='Edit Description' className='w-full h-[20vh] bg-white' />

            <div className='flex flex-row gap-5'>
            <button className='bg-white py-2 px-6 rounded-3xl mb-15'>Add new Book</button>
            <button className='bg-white py-2 px-6 rounded-3xl mb-15'>Edit Book</button>

            </div>

          </form>


          <div className='flex flex-row items-center justify-center gap-2'>
          </div>
        </div>


      </section>
      <Footer />
    </>
  );
}