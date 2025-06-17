import React from 'react'
import { FaCircleNotch } from "react-icons/fa";

const Button = () => {
       return (
              <button 
                     type="button"
                     className='cursor-pointer group py-3 px-10 rounded-full bg-[var(--primary-color)] flex items-center gap-2 justify-baseline text-[var(--secondary-color)] hover:bg-opacity-90 transition-all duration-300'
              >
                     Contact Us
                     <span className='font-black transform transition-transform duration-300 group-hover:rotate-180'>
                            <FaCircleNotch />
                     </span>
              </button>
       )
}

export default Button
