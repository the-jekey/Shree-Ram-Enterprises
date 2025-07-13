import React from 'react'
import GrainyFilter from './GrainyFilter'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import Animation from './Animation'
import Button from './Button'
import TextReveal from './TextReveal';

const Main = () => {

       return (
              <div data-scroll data-scroll-speed="" className='h-[91vh] relative  overflow-hidden lg:h-screen max-w-screen mx-auto bg-[url("")] bg-cover bg-center bg-no-repeat  '>
                     <div id='Home' className="relative w-full h-[90.6%]">

                            <GrainyFilter />

                            <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#grainy)', opacity: 1 }}></div>

                            <div className="relative z-10">
                                   <Navbar />
                                   <div className="text h-[60vh]  w-full flex justify-center py-[20vh] md:py-[35vh] lg:py-[25vh] ">
                                          <div className="name font-['font'] text-[var(--primary-color)] text-center">
                                                 <p className='overflow-hidden'>
                                                        <TextReveal delay={0.1}>
                                                               <span

                                                                      className='inline-flex md:text-3xl lg:text-2xl'>Welcome to</span>
                                                        </TextReveal>
                                                 </p>
                                                 <motion.h1 className='text-6xl md:text-7xl lg:text-7xl overflow-hidden'>
                                                        <TextReveal delay={0.1}>


                                                               <span

                                                                      className='inline-flex '>
                                                                      Shree Ram Enterprises
                                                               </span>
                                                        </TextReveal>
                                                 </motion.h1>
                                                 <p className='w-[75%] overflow-hidden  capitalize font-semibold text-center inline-block md:text-xl lg:text-md'>
                                                        <TextReveal delay={0.1}>

                                                               <span

                                                                      className='inline-flex tracking-wider'
                                                               >
                                                                      We manufacture and deliver our products in all India and specialize in manufacturing custom designs.
                                                               </span>
                                                        </TextReveal>
                                                 </p>
                                                 <div className=" button pt-10 w-full flex justify-center items-center md:text-2xl md:py-10 lg:text-lg lg:py-5">
                                                        <a
                                                               href="https://api.whatsapp.com/send?phone=919782738820&text=Hi%20I'm%20interested%20in%20your%20services"
                                                               target='_blank'
                                                               rel="noopener noreferrer"
                                                               className='cursor-pointer hover:opacity-90 transition-opacity'
                                                        >
                                                               <Button />
                                                        </a>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="bottom w-full h-12 top-45 relative font-['font'] lg:top-48">
                                          <TextReveal delay={0.1} animateOnScroll={false}>

                                                 <p
                                                        className='text-sm text-center  text-[var(--primary-color)]' >(Scroll Down)</p>
                                          </TextReveal>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Main
