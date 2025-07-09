import { motion } from 'motion/react';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Product = () => {

       return (
              <div id='Product' className='h-auto lg:pb-20 px-6 pb-5 text-[var(--primary-color)] max-w-screen mx-auto  font-["font"]'>
                     <div className="text text-6xl w-full lg:text-[10vh] flex justify-center ">
                            <div className="ext text-6xl w-full lg:text-8xl mt-10 md:text-7xl md:w-[55%] lg:w-[37%]">
                                   <h1 className='text-start '>Our</h1>
                                   <h1 className=' text-end'>Product <span className='text-sm font-black tracking-wider'>(20+)</span></h1>
                            </div>
                     </div>
                     <div className=" w-full lg:flex lg:gap-5 lg:mx-auto  lg:justify-center  ">
                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:m-0  lg:h-[40vh]  md:mx-auto h-[30vh] lg:gap-5 flex gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://images.unsplash.com/photo-1751535076133-716cb28df027?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <motion.span className='hover:opacity-100'><MdArrowOutward /></motion.span>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://plus.unsplash.com/premium_photo-1749733078922-8f0a81fde7d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <span><MdArrowOutward /></span>
                                          </div>
                                   </div>
                            </div>
                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:h-[40vh] lg:m-0 md:mx-auto h-[30vh] flex lg:gap-5 gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://images.unsplash.com/photo-1751535076133-716cb28df027?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <motion.span className='hover:opacity-100'><MdArrowOutward /></motion.span>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://plus.unsplash.com/premium_photo-1749733078922-8f0a81fde7d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <span><MdArrowOutward /></span>
                                          </div>
                                   </div>
                            </div>

                     </div>
                     <div className=" w-full lg:flex lg:pt-5 lg:gap-2 lg:mx-auto lg:justify-center  ">
                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:m-0  lg:h-[40vh]  md:mx-auto h-[30vh] lg:gap-5 flex gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://images.unsplash.com/photo-1751535076133-716cb28df027?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <motion.span className='hover:opacity-100'><MdArrowOutward /></motion.span>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://plus.unsplash.com/premium_photo-1749733078922-8f0a81fde7d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <span><MdArrowOutward /></span>
                                          </div>
                                   </div>
                            </div>


                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:h-[40vh] lg:m-0 md:mx-auto h-[30vh] lg:gap-5 flex gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://images.unsplash.com/photo-1751535076133-716cb28df027?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <motion.span className='hover:opacity-100'><MdArrowOutward /></motion.span>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="https://plus.unsplash.com/premium_photo-1749733078922-8f0a81fde7d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <h1>Mural</h1>
                                                 <span><MdArrowOutward /></span>
                                          </div>
                                   </div>
                            </div>

                     </div>


              </div>
       )
}

export default Product
