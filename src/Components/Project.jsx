import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';

const Project = () => {

  const openPDF = () => {
    window.open('./WORK.pdf', '_blank');
  };

  return (
    <div id='Projects' className=' relative overflow-hidden max-w-7xl mx-auto px-6 pb-5 h-auto lg:min-h-screen font-["font"]  text-[var(--primary-color)] '>

      <div className="text text-6xl w-full lg:text-[10vh] flex justify-center ">
        <div className="ext text-6xl w-full lg:text-8xl mt-10 lg:w-[45%]">
          <TextReveal delay={0.1}>
            <h1 className='text-start '>Feature</h1>
          </TextReveal>
          <TextReveal delay={0.2}>

            <h1 className=' text-end'>Project <span className='text-sm font-black'>(20+)</span></h1>
          </TextReveal>
        </div>
      </div>

      <div className="project-1 w-full h-[45vh] md:h-[55vh] mt-2 flex gap-4 md:gap-8 justify-between bg--500 lg:h-[90vh] ">
        <div className="part-1 h-[40vh]  w-[45vw] md:w-[55vw] md:h-[50vh] lg:h-[100%]">
          <div onClick={openPDF} className="img w-full h-[95%] cursor-pointer ">
            <img className='w-full h-full  object-cover ' src="./Project-1.jpg" alt="" />
          </div>
          <div className="txt flex items-center justify-between text-xs md:text-sm tracking-wider ">
            <TextReveal delay={0.2}>
              <h1>Project-1</h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h1>2024</h1>
            </TextReveal>
          </div>
        </div>

        <div className="part-2 h-[15vh] w-[40vw] md:w-[50vw] lg:h-[45vh]">

          <div onClick={openPDF} className="img w-full h-[90%] cursor-pointer">
            <img className='w-full h-full  object-cover bg-center ' src="./Project-2.jpg" alt="" />
          </div>
          <div className="txt flex items-center justify-between text-xs md:text-sm tracking-wider">
            <TextReveal delay={0.2}>
              <h1>Project-2</h1>
            </TextReveal>
            <TextReveal delay={0.2}>

              <h1>2024</h1>
            </TextReveal>

          </div>
        </div>
      </div>






      <div className="project-1 w-full h-[35vh] md:h-[55vh] flex gap-4 md:gap-8 justify-center bg--500 lg:h-[90vh] ">
        <div className="part-1 h-[30vh]  w-full md:w-full md:h-[100%] lg:w-full lg:h-[100%]">
          <div onClick={openPDF} className="img w-full h-[95%] cursor-pointer">
            <img className='w-full h-full  object-cover ' src="./Project-3.jpg" alt="" />
          </div>
          <div className="txt flex items-center justify-between text-xs md:text-sm tracking-wider ">

            <TextReveal delay={0.2}>
              <h1>Project-3</h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h1>200Crore</h1>

            </TextReveal>
          </div>
        </div>
      </div>






      <div className="project-1 w-full h-[45vh] md:h-[55vh] mt-2 flex gap-4 md:gap-8 justify-between bg--500 lg:h-[90vh] ">


        <div className="part-1 h-[15vh] w-[40vw] md:w-[50vw] lg:h-[45vh]">
          <div onClick={openPDF} className="img w-full h-[90%] cursor-pointer">
            <img className='w-full h-full  object-cover bg-center ' src="./Project-4.jpg" alt="" />
          </div>
          <div className="txt flex items-center justify-between text-xs md:text-sm tracking-wider">
            <TextReveal delay={0.2}>
              <h1>Project-4</h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h1>2024</h1>

            </TextReveal>
          </div>

          <Link to='/product'>
            <div className='text-2xl text-[var(--secondary-color)] cursor-pointer bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] hover:text-2xl transition-all rounded-full w-fit p-10 lg:p-20 relative top-10 left-7'> <IoIosArrowRoundForward /> </div>
          </Link>

        </div>
        <div className="part-2 h-[40vh]  w-[45vw] md:w-[55vw] md:h-[50vh] lg:h-[100%]">
          <div onClick={openPDF} className="img w-full h-[95%] cursor-pointer">
            <img className='w-full h-full  object-cover ' src="./Project-5.jpg" alt="" />
          </div>
          <div className="txt flex items-center justify-between text-xs md:text-sm tracking-wider ">
            <TextReveal delay={0.2}>

              <h1>Project-5</h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h1>2024</h1>

            </TextReveal>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Project
