import { motion } from 'motion/react';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import TextReveal from './TextReveal';

const Product = () => {


       const PDFONE = () => {
              window.open('./SRE02.pdf', '_blank');
       };
       const PDFTWO = () => {
              window.open('./SRE01.pdf', '_blank');
       };

       return (
              <div id='Product' className='h-auto lg:pb-20 px-6 pb-5 text-[var(--primary-color)] max-w-screen mx-auto  font-["font"]'>
                     <div className="text text-6xl w-full lg:text-[10vh] flex justify-center ">
                            <div className="ext text-6xl w-full lg:text-8xl mt-10 md:text-7xl md:w-[55%] lg:w-[37%]">
                                   <TextReveal delay={0.2}>
                                          <h1 className='text-start '>Our</h1>
                                   </TextReveal>
                                   <TextReveal delay={0.2}>
                                          <h1 className=' text-end'>Product <span className='text-sm font-black tracking-wider'>(20+)</span></h1>
                                   </TextReveal>
                            </div>
                     </div>
                     <div className=" w-full lg:flex lg:gap-5 lg:mx-auto  lg:justify-center  ">
                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:m-0  lg:h-[40vh]  md:mx-auto h-[30vh] lg:gap-5 flex gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Mural.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>
                                                        <h1 className='text-[13px]'>Mural</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <span className='hover:opacity-100'><MdArrowOutward /></span>
                                                 </TextReveal>

                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div onClick={PDFTWO} className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Wall Panel.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>

                                                        <h1 className='text-[13px]'>Wall Pannel</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <span><MdArrowOutward /></span>

                                                 </TextReveal>
                                          </div>
                                   </div>
                            </div>
                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:h-[40vh] lg:m-0 md:mx-auto h-[30vh] flex lg:gap-5 gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div onClick={PDFONE} className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Jali.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>
                                                        <h1 className='text-[13px] lg:text-[18px] tracking-wider'>Jali Collection</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <span className='hover:opacity-100'><MdArrowOutward /></span>
                                                 </TextReveal>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div onClick={PDFTWO} className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Wall.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>

                                                        <h1 className='text-[13px] lg:text-[18px] tracking-wider'>Wall Art</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <span><MdArrowOutward /></span>

                                                 </TextReveal>
                                          </div>
                                   </div>
                            </div>

                     </div>
                     <div className=" w-full lg:flex lg:pt-5 lg:gap-2 lg:mx-auto lg:justify-center  ">
                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:m-0  lg:h-[40vh]  md:mx-auto h-[30vh] lg:gap-5 flex gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Railing.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>

                                                        <h1 className='text-[13px] lg:text-[18px] tracking-wider'>Railing</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <span className='hover:opacity-100'><MdArrowOutward /></span>

                                                 </TextReveal>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Landscapping.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>

                                                        <h1 className='text-[13px] lg:text-[18px] tracking-wider '>Landscaping</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <span><MdArrowOutward /></span>

                                                 </TextReveal>
                                          </div>
                                   </div>
                            </div>


                            <div className="product w-full md:w-[80%] lg:w-[40%] lg:h-[40vh] lg:m-0 md:mx-auto h-[30vh] lg:gap-5 flex gap-2 ">
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img  w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="Artifacts.jpg" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <TextReveal delay={0.2}>

                                                        <h1 className='text-[13px] lg:text-[18px] tracking-wider'>Stone Artifacts</h1>
                                                 </TextReveal>
                                                 <TextReveal delay={0.2}>
                                                        <motion.span className='hover:opacity-100'><MdArrowOutward /></motion.span>

                                                 </TextReveal>
                                          </div>
                                   </div>
                                   <div className="one w-1/2 h-full rounded-md ">
                                          <div className="img w-full h-[92%]">
                                                 <img className='w-full h-full rounded-md object-cover' src="./Flooring.avif" alt="" />
                                          </div>
                                          <div className="txt w-full flex justify-between md:text-xl">
                                                 <div className='w-full flex justify-between md:text-xl'>
                                                        <TextReveal delay={0.2}>
                                                               <h1 className='text-[13px] lg:text-[18px] tracking-wider'>Florring</h1>
                                                        </TextReveal>
                                                        <TextReveal delay={0.2}>
                                                               <span><MdArrowOutward /></span>
                                                        </TextReveal>

                                                 </div>
                                          </div>

                                   </div>
                            </div>

                     </div>


              </div>
       )
}

export default Product
