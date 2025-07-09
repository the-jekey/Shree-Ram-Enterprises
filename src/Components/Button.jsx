import { delay } from 'motion';
import { motion } from 'motion/react';
import React from 'react'
import { FaCircleNotch } from "react-icons/fa";

const Button = () => {

       return (
              <>
                     <motion.a
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ delay: 2,  }}
                            href="https://wa.me/919782738820" target="_blank">

                            <button
                                   type="button"
                                   className='cursor-pointer z-[999] group py-3 px-10 rounded-full bg-[var(--primary-color)] flex items-center gap-2 justify-baseline text-[var(--secondary-color)] hover:bg-opacity-90 transition-all duration-300'>
                                   Contact Us
                                   <span className='font-black transform transition-transform duration-300 group-hover:rotate-180'>
                                          <FaCircleNotch />
                                   </span>
                            </button>

                     </motion.a >
              </>
       )
}

export default Button
