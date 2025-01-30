import React from 'react'
/* import aboutImg from '../assets/about.jpg' */
import ayushImg from '../assets/ayushimg1.jpg'
import { ABOUT_TEXT1 } from '../constants'
import { ABOUT_TEXT2 } from '../constants'
import { ABOUT_TEXT3 } from '../constants'
import { motion } from "motion/react"

const About = () => {
  return (
    <div id='about' className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl '> About <span className='text-neutral-500'> Me </span></h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8 '>
                <div className='flex items-center justify-center '>
                    <img className='rounded-2xl object-cover h-150 w-100' src={ayushImg} alt="" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
             className='w-full lg:w-1/2 text-zinc-400'>
                    <div className='text-[18px] flex-col justify-center items-center '>
                        <p className='my-2 max-x-wl pt-6 '>{ABOUT_TEXT1}</p>
                        <p className=' my-2 max-x-wl pt-6 '>{ABOUT_TEXT2}</p>
                        <p className=' my-2 max-x-wl pt-6 '>{ABOUT_TEXT3}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
