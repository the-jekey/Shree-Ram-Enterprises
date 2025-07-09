import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
       return (
              <>
                     <footer className='h-screen w-full bg-zinc-  font-[font] text-[var(--primary-color)] px-4 flex flex-col justify-between '>
                            <div className="top text-4xl py-2 w-full">
                                   <h1 className='flex'>Get In Touch <span><MdArrowOutward /></span> </h1>
                            </div>
                            <div className="links w-full  h-[20vh] flex gap-2  ">
                                   <div className="menu w-1/2">
                                          <h1 className='border-b-1 lg:w-[60%] '>Menu</h1>
                                          <div className="text-sm flex flex-col gap-1">
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Home</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>About</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Projects</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Products</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Contact us</p>
                                          </div>
                                   </div>
                                   <div className="social w-1/2">
                                          <h1 className='border-b-1 lg:w-[60%] '>Social</h1>
                                          <div className="text-sm flex flex-col gap-1 ">
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Whatsapp</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Instagram</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Facebook</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>Linkedin</p>
                                                 <p className='hover:border-b-1 w-fit cursor-pointer'>X</p>
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
                     </footer>
              </>
       )
}

export default Footer