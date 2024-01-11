import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
    

  return (
    <footer className='bg-slate-200' style={{
      bottom:"0",position:"relative",left:"0",width:"100%"}}
    >
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>BESTMOVE</span>
          <span className='text-slate-700'>HOUSE</span>
        </h1>
      </Link>
      <span style={{color:"darkgreen",display:"flex",fontSize:"20px", fontWeight:"bolder"}}>
      <FaPhone className='text-slate-600 mt-2' onClick={()=>window.open("tel:+91-9262685542")}/>+91-9262685542
      </span>
      </div>
      
     </footer>
  )
}
