import React from 'react';


import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'

import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className=' fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 '>
    <div className='container mx-auto'>
       <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px]
     mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
       <Link 
       offset={-200}
       activeClass='active'
       smooth={true}
       spy={true}

       to='home'
       className='cursor-pointer w-[60px] h-[60px]  flex items-center justify-center'>
    <BiHomeAlt className='hover:text-white' />
    </Link>
    <Link 
      activeClass='active'
      smooth={true}
      spy={true}

    to='about'
    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
    <BiUser  className='hover:text-white' />
    </Link>
    <Link
      activeClass='active'
      smooth={true}
      spy={true}

    to='skills'
     className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
    <BsClipboardData  className='hover:text-white' />
    </Link>
    <Link 
      activeClass='active'
      smooth={true}
      spy={true}

    to='work'
    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
    <BsBriefcase className='hover:text-white' />
    </Link>
    <Link 
      activeClass='active'
      smooth={true}
      spy={true}

    to='contact'
    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
    <BsChatSquare className='hover:text-white' />
    </Link>
    </div>
    </div>
   
   
  </nav>;
};

export default Nav;
