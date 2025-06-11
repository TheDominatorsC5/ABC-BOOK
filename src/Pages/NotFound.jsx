import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NF from "../assets/images/NF.png";
import { Link } from "react-router";



export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center '>
        <img src={NF} alt="NotFound" />
      </div>
      <div className='flex justify-center mt-15 mb-20'><Link to="/">
        <button className="text-white bg-red-400 hover:bg-red-700 hover:scale-125 transition-transform duration-600 ease-in-out py-2 px-6 rounded-2xl text-sm " >
          Back to Home</button></Link>
      </div>
      <Footer />
    </>
  );
} 