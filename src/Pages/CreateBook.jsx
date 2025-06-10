import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function ViewBook() {
  return (
    <>
      <Navbar />
      <section>
        <div className='flex flex-row border bg-[#FF1616] w-[80%] mx-auto'>
          <div className='py-8 pl-20'>
            <img src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best-books1.jpg" alt="" />
          </div>

          <div className='flex flex-col items-center justify-center gap-2'>
            <input type="text" name="" id="" placeholder='Edit Description' />
            <button className='bg-white py-2 px-6 rounded-3xl'>Add new Book</button>
            <button>Edit Book</button>
          </div>
        </div>


      </section>
      <Footer />
    </>
  );
}