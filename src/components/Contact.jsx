



import React from 'react'
import {fadeIn} from '../variants'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  flex justify-center items-center p-4'>
        <motion.form 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        method='POST' action="https://getform.io/f/d84f1842-ea38-4977-8704-4bdac2e113f1" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <span className='font-bold text-xl text-purple-500'>evankagarise@gmail.com</span></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </motion.form>
    </div>
  )
}

export default Contact















