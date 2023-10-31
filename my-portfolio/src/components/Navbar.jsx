import React from 'react'
import Logo1 from '../assests/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
 
  return ( 
    
      
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
            <div>
                <img src = {Logo1} alt="Logo1" style={{width: '50px'}} />
            </div>

       {/*menu*/}     
        <div className='hidden md:flex'>
          <ol className="flex gap-5 text-slate-100">
            <li className="flex-row">Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Resume</li>
          </ol>
        </div>

    {/*Hamburger*/}
        <div className='hidden'>
            <FaBars/>
        </div>
    {/*Mobile*/}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Resume</li>
        </ul>

    {/*Social */}
    <div className='hidden'>

    </div>

    </div>
    
  )
}


export default Navbar;
