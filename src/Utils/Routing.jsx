import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Main from '../Components/Main'
import ProductOne from '../Products/ProductOne'

const Routing = () => {
       return (
              <div>
                     <BrowserRouter>
                            <Routes>
                                   <Route path="/" element={<Main />} />
                                   <Route path="/product-one" element={<ProductOne />} />
                            </Routes>
                     </BrowserRouter>
              </div>
       )
}

export default Routing
