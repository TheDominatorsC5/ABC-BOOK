import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NF from "../assets/images/NF.png";



export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center mt-20 mb-20'>
        <img src={NF} alt="NotFound" />
      </div>
      <div className='flex justify-center mb-10'>
        <button className="text-white bg-red-400 hover:bg-red-700 py-2 px-6 rounded-2xl text-sm " >Back to Home</button>
      </div>
      <div className='text-center'>
        <svg className='items-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      </div>
      <Footer />
    </>
  );
}