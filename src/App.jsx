import React from 'react'
import About from './Components/About';
import Main from './Components/Main'
import Footer from './Components/Footer';
import Project from './Components/Project';
import Menu from './Components/Menu';
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='max-w-screen mx-auto selection:bg-[var(--primary-color)] selection:text-[var(--secondary-color)]'>
      {/* <Menu /> */}
      <Main />
      <About />
      <Project />
      <Footer />

    </div>
  )
}

export default App
