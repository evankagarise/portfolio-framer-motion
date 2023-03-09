import React from 'react';

import Image from'../assets/cyber-bg.png';

import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

const Banner = () => {
  return <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left text-white'>
          <motion.h1
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            Hi I'm <span className='text-purple-400'>Evan</span>
          </motion.h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppcase leading-[1]'>
            <span className='mr-2'>I am a </span>
            <TypeAnimation 
            sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Creator',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span' 
            repeat={Infinity}
            />
          
          </div>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg '>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
            </div>
        </div>
        <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src={Image} alt='avatar' className=' hover:saturate-150'/>
        </div>
      </div>
    </div>
  </div>;
};

export default Banner;
