import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
    const handleCall = () => {
        // Replace this with the logic to trigger a call
        window.location.href = 'tel:+919262685542';
      };

  return (
    <footer className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>BESTMOVE</span>
          <span className='text-slate-700'>HOUSE</span>
        </h1>
      </Link>
      <Link href="tel:+919262685542">
      <FaPhone className='text-slate-600'/></Link>
      </div>
      
     </footer>
  )
}
