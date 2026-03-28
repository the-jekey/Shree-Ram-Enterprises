import { useEffect, useRef } from "react";
import '../index.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
       const Menu = useRef(null)
       const MenuOpen = () => {
              props.setMenu(!props.Menu);
       }
       console.log(props.Menu);
       useGSAP(() => {
              gsap.to(Menu.current, {

                     opacity: 1,
                     duration: 0.5,
                     ease: "power4.inOut",
                     scrollTrigger: {
                            trigger: ".about",
                            scroller: "body",
                            start: "top 90%",
                            scrub: 1,
                     }
              })
       })



       useEffect(() => {
              const allh1 = document.querySelectorAll(".about h1");
              allh1.forEach((elem) => {
                     const h1text = elem.textContent;
                     const splitedText = h1text.split("");
                     const clutter = splitedText.map((char, index) => `<span key=${index}>${char}</span>`).join("");
                     elem.innerHTML = clutter;
              });

              gsap.to(".about h1 span", {
                     color: "#dbb78f",
                     stagger: 0.2,
                     scrollTrigger: {
                            trigger: "#first span",
                            scroller: "body",
                            start: "top 40%",
                            end: "top 10%",
                            scrub: 2,
                     },
              });
       }, []);

       return (
              <div className=" relative">
                     <div className="w-full flex justify-end items-center">
                            <div className="group">
                                   <div
                                          ref={Menu}
                                          onClick={MenuOpen}
                                          className="size-10 transition-all ease-in-out hover:scale-105 z-50 top-2 right-4 opacity-0 fixed rounded-full bg-[var(--secondary-color)] cursor-pointer flex flex-col items-center justify-center gap-1"
                                   >
                                          {props.Menu ? (
                                                 <>
                                                        <div className="absolute h-0.5 w-[40%] transition-all duration-700 ease-in-out rotate-45 bg-[#713336]"></div>
                                                        <div className="absolute h-0.5 w-[40%] transition-all duration-700 ease-in-out -rotate-45 bg-[#713336]"></div>
                                                 </>
                                          ) : (
                                                 <>
                                                        <div className="h-0.5 w-[40%] group-hover:w-[40%] transition-all duration-700 ease-in-out bg-[#713336]"></div>
                                                        <div className="h-0.5 w-[40%] group-hover:w-[40%] transition-all duration-700 ease-in-out bg-[#713336]"></div>
                                                 </>
                                          )}
                                   </div>
                            </div>
                     </div>


                     <div id="About" className="about select-none relative h-[80vh] lg:h-screen max-w-screen mx-auto flex items-center flex-col justify-center bg-[var(--primary-color)] px-[5vw] py-[5vw] text-center font-['font'] text-[5vw] md:text-4xl lg:leading-12 text-[#713336]">

                            <h1 id="first" className="">Shree Ram Enterprises is a Jodhpur based studio crafting timeless stone art.</h1>
                            <h1 className="">We specialize in villas, sculptures, jalis, and intricate traditional designs.</h1>
                            <h1 className="">Our expert artisans blend heritage with creativity in every handcrafted piece.</h1>
                            <h1 className="">Each creation reflects Rajasthan’s culture, elegance, and architectural richness.</h1>
                            <h1 className="">We source premium stone to ensure beauty, strength, and lasting value.</h1>
                            <h1 className="">From raw stone to refined art, every detail tells a story.</h1>
                            <h1 className="">With roots in tradition, we build designs that stand the test of time.</h1>

                     </div>
              </div>
       );
};

export default About;
