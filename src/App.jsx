import React, { useState, useEffect } from 'react';
import About from './Components/About';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Project from './Components/Project';
import Product from './Components/Product';
import LocomotiveScroll from 'locomotive-scroll';
import Animation from './Components/Animation';
import MenU from './Components/Menu';

const App = () => {
  const [Menu, setMenu] = useState(false)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';

      new LocomotiveScroll();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <Animation />
        </div>
      ) : (
        <div className='max-w-screen mx-auto selection:bg-[var(--primary-color)] selection:text-[var(--secondary-color)]'>
          <MenU Menu={Menu} setMenu={setMenu} />
          <Main />
          <About Menu={Menu} setMenu={setMenu} />
          <Product />
          <Project />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
