
// Below is the cristian mihai code for this component and its pretty good but In this code I find the state management little complex,so i write the above to make this simple
import React, { useState, useEffect } from 'react';
// import logo
import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from '../assets/img/logo-white.svg';
// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
// import girl image
import GirlImg from '../assets/img/girl.png';

const Hero = () => {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'dark';
    // return storedTheme || 'dark';
  });

  // Effect to update theme class on HTML element and localStorage
  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <section className={`min-h-[550px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden ${theme === 'dark' ? 'dark:bg-heroDark' : ''}`}>
      <div className='container mx-auto px-4 lg:px-0'>
        {/* header */}
        <header className='flex items-center justify-between py-3'>
          {/* logo */}
          <div>
            <a href='#'>
              {theme === 'light' ? (
                <img src={LogoDark} alt='Logo' />
              ) : (
                <img src={LogoWhite} alt='Logo' />
              )}
            </a>
          </div>
          {/* button */}
          <button
            onClick={toggleTheme}
            className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'
          >
            {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </header>
        {/* text & image wrapper */}
        <div className='flex flex-col items-center lg:flex-row min-h-[350px] lg:min-h-[350px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center items-start'>
            <h1 className={`text-5xl text-primary font-bold mb-6 leading-[60px] ${theme === 'dark' ? 'text-red-100' : ''}`}>
              Online Accounting <br />
              <span className='text-accent'>Fast & Uncomplicated</span>
            </h1>
            <p className={`font-light text-grey mb-8 max-w-[597px] ${theme === 'dark' ? 'text-red-50' : ''}`}>
              We specialize in small businesses. Our goal is to eliminate
              bureaucracy, creating a modern relationship between your company
              and the accountant.
            </p>
            {/* checked items */}
            <div className='flex flex-col gap-y-6 mb-6'>
              {/* item */}
              <div className='flex items-center gap-x-2'>
                {/* item icon */}
                <div className={`bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center ${theme === 'dark' ? 'bg-accent/70 text-red-50' : 'bg-accent/10'}`}>
                  <BsCheck />
                </div>
                {/* item text */}
                <p className={`text-base font-light ${theme === 'dark' ? 'text-white' : ''}`}>
                  Have your accounting 100% online.
                </p>
              </div>
              {/* item */}
              <div className='flex items-center gap-x-2'>
                {/* item icon */}
                <div className={`bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center ${theme === 'dark' ? 'bg-accent/70 text-red-50' : 'bg-accent/10'}`}>
                  <BsCheck />
                </div>
                {/* item text */}
                <p className={`text-base font-light ${theme === 'dark' ? 'text-white' : ''}`}>
                  Save with plans starting at $10/month.
                </p>
              </div>
            </div>
            {/* button */}
            <button className='btn'>Discover our plans</button>
          </div>
          {/* image */}
          <div className='hidden lg:flex self-end w-[600px]'>
            <img src={GirlImg}  alt='Girl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
