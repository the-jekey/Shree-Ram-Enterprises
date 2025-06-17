import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { FaCircleNotch } from "react-icons/fa";

const Animation = () => {
  const lineRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)
  const loadingRef = useRef(null)
  const containerRef = useRef(null)
  

  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .to(lineRef.current, {
        width: '100%',
        duration: 1.5,
        ease: "expo.inOut",
      })
      .to(lineRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
      })

    // Create infinite rotation for circle
    gsap.to(circleRef.current, {
      opacity: 1,
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: "none"
    })

    // Text animation
    const letters = textRef.current.children
    gsap.fromTo(letters,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: .09,
        ease: "back.out(1.7)",
        onComplete: () => {
          // Exit animation after text animation completes
          gsap.to(containerRef.current, {
            y: '-100%',
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.5
          })
        }
      }
    )

    
  }, [])

  return (
    <div ref={containerRef} className=' relative h-[92vh] lg:h-screen max-w-screen mx-auto bg-[var(--primary-color)] font-["font"] text-[var(--secondary-color)]'>
      <div className="part-1 h-[1%]"><div ref={lineRef} className="line h-1 rounded-md bg--700 w-[0%] bg-[var(--secondary-color)]"></div></div>
      <div className="part-2 w-full h-[95%] flex justify-center items-center">
        <h1 ref={textRef} className='overflow-hidden h-46 text-[20vh] txt flex'>
          <span>S</span>
          <span>R</span>
          <span>E</span>
        </h1>
      </div>
      <div className="part-3 w-full h-[3%] justify-center flex items-center gap-1">
        <h1 ref={loadingRef} className='text-center loading'>Loading</h1>
        <span ref={circleRef} className='text-sm circle'><FaCircleNotch /></span>
      </div>
    </div>
  )
}

export default Animation
