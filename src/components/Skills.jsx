import React from 'react'


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Framer from '../assets/fm.png';

const Skills = () => {
  return (
    <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center' id='skills'>
    <div className='container mx-auto'>
    <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <motion.p
             variants={fadeIn('up', 0.1)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</motion.p>
            <motion.p
             variants={fadeIn('up', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='py-4'>// These are the technologies I've worked with</motion.p>
        </div>

        <motion.div
         variants={fadeIn('up', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
        className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div 
             
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div 
             className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div 
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                <p className='my-4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                <p className='my-4'>FIREBASE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto h-22' src={Framer} alt="HTML icon" />
                <p className='my-4'>FRAMER MOTION</p>
            </div>
        </motion.div>
    </div>
        </div>
        </div>
  )
}

export default Skills