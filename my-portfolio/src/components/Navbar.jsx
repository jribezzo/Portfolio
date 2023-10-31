import React, {useState} from 'react'
import Logo1 from '../assests/logo1.png'
import {FaBars, FaTimes,FaGithub,FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';


function Navbar() {
  const[nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return ( 
      
   <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]  text-slate-100">
            <div>
                <img src = {Logo1} alt="Logo1" style={{width: '50px'}} />
            </div>

       {/*menu*/}     
        
          <ul className="hidden md:flex gap-5">
            <li className="flex-row">Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Resume</li>
          </ul>
        
        
    {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>
    {/*Mobile*/}
        <ul className= {!nav ? 'hidden' : 'hiddden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Project</li>
            <li className='py-6 text-4xl'>Resume</li>
        </ul>

    {/*Social */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'> Linkedin <FaLinkedin size={30}/> </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'> Github <FaGithub size={30}/> </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#45434d]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'> Email <HiOutlineMail size={30}/> </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#56565f]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'> Resume <BsFillPersonLinesFill size={30}/> </a>
        </li>
      </ul>
    </div>

</div>
    
    
  )
}


export default Navbar;
