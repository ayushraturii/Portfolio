import React from 'react'
import {HERO_CONTENT} from '../constants'
/* import ProfilePic from '../assets/kevinRushProfile.png' */
import ProfilePic from '../assets/ayushimg.jpg'
import { motion } from "motion/react"
import TypingEffect from 'react-typing-effect';

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5 ,delay:delay} 
    }
})

const Hero = () => {
  return (
    <div id='home' className='border-b border-neutral-900 pb-4 lg-:mb-35 pt-16'>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin -tracking-tight lg:mt-16 lg:text-8xl'>
                        AYUSH RATURI
                    </motion.h1>
                    <div className="writing-effect-container">
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                            bg-clip-text text-3xl tracking-tight text-transparent'>
                            I'm a passionate <br></br> <TypingEffect
                            text={['Full Stack Developer', 'Machine Learning Enthusiast', 'Web Application Developer', 'AI Developer','Programmer']}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={500}
                            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                            />
                        </motion.span>
                    </div>
                    
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 '>
                <div className='flex justify-center'> 
                    <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    src={ProfilePic} alt="Ayush Raturi" className='rounded-2xl' />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero
