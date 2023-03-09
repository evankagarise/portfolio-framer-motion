import React from 'react'
import {fadeIn} from '../variants'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center' id='about'>
    <div className='container mx-auto'>
    <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='sm:text-right md:text-left pb-8 pl-4'>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-4xl font-bold inline border-b-4 border-pink-600 text-left left-0'>
              About
            </motion.p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <motion.p
             variants={fadeIn('up', 0.8)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iusto! </motion.p>
            </div>
            <div>
              <motion.p
               variants={fadeIn('up', 1.2)}
               initial='hidden'
               whileInView={'show'}
               viewport={{once: false, amount: 0.7}}
              >I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</motion.p>  
            </div>
        </div>
        </div> 
        </div>
  )
}

export default About