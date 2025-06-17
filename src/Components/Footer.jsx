import React from 'react'

const Footer = () => {
       return (
              <div className='w-full h-screen flex flex-col justify-between px-6 py-8 font-["font"] bg-[var(--secondary-color)] text-[var(--primary-color)]'>
                     <div className="part-1 w-full mb-8">
                            <div className="links flex flex-col gap-2 text-xl">
                                   <h1>Home</h1>
                                   <h1>About</h1>
                                   <h1>Projects</h1>
                                   <h1>Products</h1>
                                   <h1>Contact us</h1>
                            </div>
                     </div>
                     <div className="part-2 w-full mb-8">
                            <div className="links flex w-full justify-between">
                                   <div className="one text-[13px] flex flex-col gap-2">
                                          <a href="https://api.whatsapp.com/send/?phone=%2B919928538820&text&type=phone_number&app_absent=0"> <h1>whatsapp</h1></a>
                                          <a href="https://www.instagram.com/sre.org.in/"> <h1>Instagram</h1></a>
                                          <a href="https://www.facebook.com/sre.org.in"> <h1>Facebook</h1></a>
                                   </div>
                                   <div className="two text-[13px] flex flex-col gap-2">
                                          <a href="tel:+919929538820">
                                                 <h1>P: +91 9929538820</h1>
                                          </a>

                                          <a href="mailto:Sretinwari@gmail.com">
                                                 <h1>E: Sretinwari@gmail.com</h1>
                                          </a>

                                          <a
                                                 href="https://www.google.com/maps/search/?api=1&query=Tinwari+Jodhpur+342306+Rajasthan"
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                          >
                                                 <h1>A: Tinwari Jodhpur (342306), Rajasthan</h1>
                                          </a>
                                   </div>
                            </div>
                     </div>
                     <div className="part-3 w-full flex justify-between text-[10px]">
                            <h1>Copyright © 2025 Shree Ram Enterprises</h1>
                            <h1>Crafted by jekey</h1>
                     </div>
              </div>
       )
}

export default Footer
