import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Main from '../Components/Main'
import About from '../Components/About'
import Project from '../Components/Project'
import Product from '../Components/Product'
import ProductTwo from '../Components/Projects/ProductTwo'

const Routing = () => {
       return (
              <div>
                     <BrowserRouter>
                            <Routes>
                                   <Route path="/" element={<Main />} />
                                   <Route path="/about" element={<About />} />
                                   <Route path="/project" element={<Project />} />
                                   <Route path="/product" element={<ProductTwo />} />
                            </Routes>
                     </BrowserRouter>
              </div>
       )
}

export default Routing
