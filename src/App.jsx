import React, { useState, useEffect } from 'react';
import About from './Components/About';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Project from './Components/Project';
import Product from './Components/Product';
import LocomotiveScroll from 'locomotive-scroll';
import Animation from './Components/Animation';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = 'hidden';

    // Simulate loading time (e.g. 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto'; // Enable scroll after loading

      // Initialize Locomotive Scroll after loading completes
      new LocomotiveScroll();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
         <Animation/>
        </div>
      ) : (
        <div className='max-w-screen mx-auto selection:bg-[var(--primary-color)] selection:text-[var(--secondary-color)]'>
          <Main />
          <About />
          <Product />
          <Project />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
