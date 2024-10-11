"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleRedirect = () => {
    router.push('/signup');
  };

  const handleRedirectLogin = () => {
    router.push('/login');
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <nav className={`w-full min-h-16 flex flex-row justify-between items-center sticky top-0 p-4 
      ${isDarkMode ? 'bg-slate-900 text-cyan-200' : 'bg-white text-black'}`}>
      <div className='ml-10'>
        <Image
          src="/logo.png"
          alt="Description of the image"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <div className='flex flex-row items-center'>
        <div className='m-5'><Link href="/">Home</Link></div>
        <div className='m-5'><Link href="/contact">Contact</Link></div>
        <div className='m-5'><Link href="/about">About</Link></div>
        <div className='m-5'>
          <button onClick={handleRedirect} className='text-white bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-3 py-2'>
            Sign Up
          </button>
        </div>
        <div className='m-5'>
          <button onClick={handleRedirectLogin} className='text-white bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-3 py-2'>
            Log In
          </button>
        </div>
        <div className='m-5'>
          <button 
            onClick={toggleTheme} 
            className={`text-white font-medium rounded text-sm px-3 py-2 
              ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-200'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
