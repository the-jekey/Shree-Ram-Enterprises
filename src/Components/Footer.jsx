import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import TextReveal from './TextReveal';
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
                     <footer id='Contact' className='h-screen w-full bg-[var(--primary-color)]  font-[font] text-[var(--secondary-color)] px-4 flex flex-col justify-between '>
                            <div className="top text-4xl py-2 w-full">
                                   <TextReveal delay={0.2}>
                                          <h1 className='flex '>Get In Touch <span><MdArrowOutward /></span> </h1>
                                   </TextReveal>
                            </div>
                            <div className="links w-full  h-[20vh] flex gap-2  ">
                                   <div className="menu w-1/2">
                                          <TextReveal delay={0.2}>

                                                 <h1 className='border-b-1 lg:w-[60%] '>Menu</h1>
                                          </TextReveal>
                                          <div className="text-sm flex flex-col gap-1 pt-2">
                                                 <TextReveal delay={0.2}>
                                                        <a href="#Home" onClick={scrollToHome}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Home</h1></a>
                                                        <a href="#About" onClick={scrollToAbout}><h1 className='cursor-pointer hover:border-b-1 w-fit'>About</h1></a>
                                                        <a href="#About" onClick={scrollToProduct}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Product</h1></a>
                                                        <a href="#Projects" onClick={scrollToProjects}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Projects</h1></a>
                                                        <a href="#Contact" onClick={scrollToContact}><h1 className='cursor-pointer hover:border-b-1 w-fit'>Contact us</h1></a>

                                                 </TextReveal>
                                          </div>
                                   </div>
                                   <div className="social w-1/2">

                                          <TextReveal delay={0.2}>
                                                 <h1 className='border-b-1 lg:w-[60%] '>Social</h1>
                                          </TextReveal>
                                          <div className="text-sm flex flex-col gap-1 pt-2 ">
                                                 <TextReveal delay={0.2}>
                                                        <a href="https://wa.me/919782738820" target="_blank"> <p className='hover:border-b-1 w-fit cursor-pointer'>Whatsapp</p></a>
                                                        <a href="https://www.instagram.com/sre.org.in/" target="_blank"> <p className='hover:border-b-1 w-fit cursor-pointer'>Instagram</p></a>
                                                        <a href="https://www.facebook.com/sre.org.in" target="_blank"> <p className='hover:border-b-1 w-fit cursor-pointer'>Facebook</p></a>
                                                        <a href="" target="_blank" ></a><p className='hover:border-b-1 w-fit cursor-pointer select-none '>Linkedin</p>
                                                        <a href="" target="_blank" ></a><p className='hover:border-b-1 w-fit cursor-pointer select-none '>X</p>
                                                 </TextReveal>
                                          </div>
                                   </div>

                            </div>
                            <div className="">
                                   <TextReveal delay={0.2}>
                                          <h1 className='text-9xl '>SRE&copy;</h1>
                                   </TextReveal>
                                   <TextReveal delay={0.2}>
                                          <p className='text-sm'>( Stone Art Company )</p>

                                   </TextReveal>
                            </div>
                            <div className="bottom pb-3 lg:pb-0 text-sm flex justify-between">
                                   <TextReveal delay={0.2} animateOnScroll={false}>
                                          <h1 className=']'>
                                                 Copyright © 2025 <br /> Shree Ram Enterprises
                                          </h1>
                                   </TextReveal>

                                   <TextReveal delay={0.2} animateOnScroll={false}>
                                          <h1 className='hover:border-b-1 w-fit cursor-pointer lg:pt-4'>
                                                 <br /> Crafted by <a href="https://www.instagram.com/the_jekeyy/"><span>jekey</span></a>
                                          </h1>
                                   </TextReveal>
                            </div>

                     </footer >
              </>
       )
}

export default Footer