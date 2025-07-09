import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {

       const scrollToHome = (e) => {
              e.preventDefault();
              document.getElementById('Home').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToAbout = (e) => {
              e.preventDefault();
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToProjects = (e) => {
              e.preventDefault();
              document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToProduct = (e) => {
              e.preventDefault();
              document.getElementById('Product').scrollIntoView({ behavior: 'smooth' });
       };
       const scrollToContact = (e) => {
              e.preventDefault();
              document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
       };


       return (
              <>
                     <footer id='Contact' className='h-screen w-full bg-zinc-  font-[font] text-[var(--primary-color)] px-4 flex flex-col justify-between '>
                            <div className="top text-4xl py-2 w-full">
                                   <h1 className='flex'>Get In Touch <span><MdArrowOutward /></span> </h1>
                            </div>
                            <div className="links w-full  h-[20vh] flex gap-2  ">
                                   <div className="menu w-1/2">
                                          <h1 className='border-b-1 lg:w-[60%] '>Menu</h1>
                                          <div className="text-sm flex flex-col gap-1 pt-2">
                                                 <a href="#Home" onClick={scrollToHome}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Home</h1></a>
                                                 <a href="#About" onClick={scrollToAbout}><h1 className='cursor-pointer hover:border-b-1 w-fit'>About</h1></a>
                                                 <a href="#About" onClick={scrollToProduct}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Product</h1></a>
                                                 <a href="#Projects" onClick={scrollToProjects}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Projects</h1></a>
                                                 <a href="#Contact" onClick={scrollToContact}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Contact us</h1></a>

                                          </div>
                                   </div>
                                   <div className="social w-1/2">
                                          <h1 className='border-b-1 lg:w-[60%] '>Social</h1>
                                          <div className="text-sm flex flex-col gap-1 pt-2 ">
                                                 <a href="https://wa.me/919782738820" target="_blank"> <p className='hover:border-b-1 w-fit cursor-pointer'>Whatsapp</p></a>
                                                 <a href="https://www.instagram.com/sre.org.in/"> <p className='hover:border-b-1 w-fit cursor-pointer'>Instagram</p></a>
                                                 <a href="https://www.facebook.com/sre.org.in"> <p className='hover:border-b-1 w-fit cursor-pointer'>Facebook</p></a>
                                                 <a href=""></a><p className='hover:border-b-1 w-fit cursor-pointer select-none '>Linkedin</p>
                                                 <a href=""></a><p className='hover:border-b-1 w-fit cursor-pointer select-none '>X</p>
                                          </div>
                                   </div>

                            </div>
                            <div className="">
                                   <h1 className='text-9xl leading-18'>SRE&copy;</h1>
                                   <p className='text-sm'>( Stone Art Company )</p>
                            </div>
                            <div className="bottom pb-3 text-sm flex justify-between">
                                   <h1 className=']'>Copyright © 2025 <br /> Shree Ram Enterprises</h1>
                                   <h1 className='hover:border-b-1 w-fit cursor-pointer'  > <br /> Crafted by <a href="https://www.instagram.com/the_jekeyy/"><span>jekey</span></a></h1>
                            </div>
                     </footer >
              </>
       )
}

export default Footer