'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '../LanguageSwitcher';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', darkMode.toString());
    }
  }, [darkMode, mounted]);

  return (
    <header className="flex items-center justify-between bg-white text-black dark:text-white dark:bg-black px-8 py-4">
      {/* <div className="container flex justify-between items-center w-full"> */}
      <h1 className="logo">My Blog</h1>
      <nav className="nav">
        <ul className="flex gap-4 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>{/* <LanguageSwitcher /> */}</li>
          {mounted && (
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
              >
                {darkMode ? (
                  <FontAwesomeIcon icon={faSun} className="fa-fw" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} className="fa-fw" />
                )}
              </button>
            </li>
          )}

          <li>
            <button className="bg-[#111827] rounded-[12px] px-2 py-2  text-[#fff]">
              Download CV
            </button>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
