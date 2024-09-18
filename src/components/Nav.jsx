"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './Sidebar';

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMicClick = () => {
    window.location.reload();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center bg-[#0f0f0f] h-14 px-4 md:px-6 lg:px-4">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button */}
          <button className="p-2 rounded-md shadow transition" onClick={toggleSidebar}>
            <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentcolor' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
                style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}
              >
                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" fill="white"></path>
              </svg>
            </div>
          </button>

          <div className="flex items-center">
            {/* Logo image with responsive visibility */}
            <img
              src="/photo/logoyt.png"
              alt="logoty"
              width={29}
              className="hidden sm:block" // Hidden on screens smaller than 390px
              style={{ width: '29px', height: 'auto' }}
            />
            <Link href="/">
              <span className="text-white font-medium text-[20px] pl-[3px] tracking-tighter transition hidden md:inline">Premium</span>
            </Link>
            {/* Language Tag */}
            <span className="language-tag text-white/50 text-[10px] mb-[10px] ml-[5px] hidden md:inline">TH</span>
          </div>
        </div>

        <form id="search-form" action="/results" className="flex items-center w-[60%] mr-[55px] max-w-[670px]">
          <input
            id="search"
            name="search_query"
            type="text"
            placeholder="ค้นหา"
            aria-label="ค้นหา"
            className="flex-grow bg-[#121212] border border-[#303030] text-white text-sm rounded-l-full pl-4 py-[9px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button type="submit" aria-label="ค้นหา" className="bg-[#222222] border border-[#303030] px-4 mr-[12px] py-[7px] rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              aria-hidden="true"
              className="text-white"
            >
              <path d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" />
            </svg>
          </button>
          <button type="button" aria-label="Microphone" className="ml-2 p-2 bg-[#272727] rounded-[50%] hidden md:flex" onClick={handleMicClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              aria-hidden="true"
              className="text-white"
            >
              <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3zm5-3a5 5 0 01-10 0H6a6 6 0 0012 0h-1z" />
              <path d="M19 11h2v2h-2zM3 11h2v2H3zM12 21h2v2h-2z" />
            </svg>
          </button>
        </form>

        <nav className="flex items-center gap-4 md:gap-6 text-white">
          <div className="w-6 h-6 hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
              style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}
            >
              <path
                d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>

          <div className="w-6 h-6 hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
              style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%', fill: 'currentcolor' }}
            >
              <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
            </svg>
          </div>

          <div className="flex justify-center items-center">
            <button>
              <Image src="/photo/profile.png" alt="Profile Photo" width={32} height={32} className="rounded-full" />
            </button>
          </div>
        </nav>
      </header>

      {/* Include the Sidebar component here */}
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Nav;
