import { useEffect } from "react";
import '../index.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
              <div id="About" className="about select-none h-[80vh] lg:h-screen max-w-screen mx-auto flex items-center flex-col justify-center bg-[var(--primary-color)] px-[5vw] py-[5vw] text-center font-['font'] text-[5vw] md:text-4xl lg:leading-12 text-[#713336]">
                     <h1 id="first" className="">Shree Ram Enterprises is a Jodhpur based studio crafting timeless stone art.</h1>
                     <h1 className="">We specialize in villas, sculptures, jalis, and intricate traditional designs.</h1>
                     <h1 className="">Our expert artisans blend heritage with creativity in every handcrafted piece.</h1>
                     <h1 className="">Each creation reflects Rajasthan’s culture, elegance, and architectural richness.</h1>
                     <h1 className="">We source premium stone to ensure beauty, strength, and lasting value.</h1>
                     <h1 className="">From raw stone to refined art, every detail tells a story.</h1>
                     <h1 className="">With roots in tradition, we build designs that stand the test of time.</h1>

              </div>
       );
};

export default About;
