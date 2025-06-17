import React from 'react'
import { TfiClose } from "react-icons/tfi";

const Menu = () => {

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
              document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToProjects = (e) => {
              e.preventDefault();
              document.getElementById('Product').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToContact = (e) => {
              e.preventDefault();
              document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
       };
       return (
              <div className='h-screen max-w-screen mx-auto bg-[var(--primary-color)] text-[var(--secondary-color)] font-["font"]'>
                     <div className="top w-full h-12  py-10 px-6 flex items-center justify-end">
                            <span className='text-3xl font-black text-[var(--secondary-color)]'><TfiClose /> </span>
                     </div>
                     <div className="main w-full h-[70vh] flex justify-center items-center">
                            <div className="links text-3xl flex flex-col gap-2">
                                   <a href="#Home" onClick={scrollToHome}><h1 className=' md:w-[50%] lg:w-[40%]'>Home</h1></a>
                                   <a href="#About" onClick={scrollToAbout}><h1 className=' md:w-[50%] lg:w-[40%]'>About</h1></a>
                                   <a href="#Projects" onClick={scrollToProjects}><h1 className=' md:w-[50%] lg:w-[40%]'>Products</h1></a>
                                   <a href="#Product" onClick={scrollToProduct}><h1 className=' md:w-[50%] lg:w-[40%]'>Projects</h1></a>
                                   <a href="#Contact" onClick={scrollToContact}><h1 className=' md:w-[50%] lg:w-[40%]'>Contact</h1></a>
                            </div>
                     </div>
              </div>
       )
}

export default Menu
