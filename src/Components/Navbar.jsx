import React from 'react'
import '../index.css';
import { motion } from 'motion/react';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
       const scrollToHome = (e) => {
              e.preventDefault();
              document.getElementById('Home').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToAbout = (e) => {
              e.preventDefault();
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
       };

       const scrollToProduct = (e) => {
              e.preventDefault();
              document.getElementById('Product').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToProjects = (e) => {
              e.preventDefault();
              document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToContact = (e) => {
              e.preventDefault();
              document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
       };

       return (
              <div className=" h-16 max-w-screen mx-auto text-[var(--primary-color)] font-['font']  px-6 py-6 flex justify-between">
                     <motion.div className=" relative name h-8 flex gap-1 items-center font-['font']">
                            <a href="/home">


                                   <motion.h1
                                          initial={{ opacity: 0, }}
                                          animate={{ opacity: 1, }}
                                          transition={{ duration: .5, delay: 2.1, }}
                                          className='font-black cursor-pointer text-3xl md:text-5xl lg:text-3xl relative inline '>
                                          SRE
                                   </motion.h1>
                            </a>
                            <motion.span
                                   initial={{ opacity: 0, }}
                                   animate={{ opacity: 1, }}
                                   transition={{ duration: .5, delay: 2.1, }}
                                   className='text-sm relative top-1 md:text-xl lg:text-sm'>
                                   (Stone Art)
                            </motion.span>
                     </motion.div>
                     <motion.div
                            className="links gap-10   md:inline-flex md:text-xl md:gap-10  lg:text-[16px]">
                            <a href="#Home" onClick={scrollToHome}><h1 className='cursor-pointer'>Home</h1></a>
                            <a href="#About" onClick={scrollToAbout}><h1 className='cursor-pointer'>About</h1></a>
                            <a href="#Product" onClick={scrollToProduct}><h1 className='cursor-pointer'>Product</h1></a>
                            <a href="#Projects" onClick={scrollToProjects}><h1 className='cursor-pointer'>Projects</h1></a>
                            <a href="#Contact" onClick={scrollToContact}><h1 className='cursor-pointer'>Contact us</h1></a>
                     </motion.div>

              </div >
       )
}

export default Navbar
