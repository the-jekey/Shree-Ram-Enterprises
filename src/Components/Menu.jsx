import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextReveal from "./TextReveal";

const Menu = ({ Menu: isMenuOpen, setMenu }) => {
       const menuRef = useRef(null);

       // Animate menu slide in/out
       useGSAP(() => {
              gsap.to(menuRef.current, {
                     top: isMenuOpen ? "0" : "100%",
                     duration: 0.5,
                     ease: "power4.inOut",
              });
       }, [isMenuOpen]);

       // Handle menu item click
       const handleMenuClick = (id) => {
              // Animate menu closing first
              gsap.to(menuRef.current, {
                     top: "100%",
                     duration: 0.5,
                     ease: "power4.inOut",
                     onComplete: () => {
                            // After animation, scroll to section
                            const section = document.getElementById(id);
                            if (section) {
                                   section.scrollIntoView({ behavior: "smooth" });
                            }
                            setMenu(false);
                     },
              });
       };

       const menuItems = [
              { label: "Home", id: "Home" },
              { label: "About", id: "About" },
              { label: "Projects", id: "Projects" },
              { label: "Testimonial", id: "Testimonial" },
              { label: "Contact us", id: "Contact" },
       ];

       return (
              <div
                     ref={menuRef}
                     className="fixed top-full left-0 z-50 w-full h-screen 
                 bg-[var(--primary-color)] text-[var(--secondary-color)] 
                 text-2xl font-['font'] tracking-widest"
              >
                     {/* Menu Links */}
                     <nav className="flex flex-col justify-center select-none items-center h-[70vh] text-3xl space-y-2">
                            {menuItems.map(({ label, id }, i) => (
                                   <TextReveal
                                          key={label}
                                          animateOnScroll={false}
                                          delay={0.4 + i * 0.05}
                                          trigger={isMenuOpen}
                                   >
                                          <h1
                                                 className="cursor-pointer hover:underline underline-1"
                                                 onClick={() => handleMenuClick(id)}
                                          >
                                                 {label}
                                          </h1>
                                   </TextReveal>
                            ))}
                     </nav>
              </div>
       );
};

export default Menu;
