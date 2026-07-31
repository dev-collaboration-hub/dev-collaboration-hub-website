'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type ButtonType = {
  text: string;
  url: string;
};

interface PropsType {
  navButtons: ButtonType[];
  title?: boolean;
}

const Navbar = ({ navButtons, title }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-500 dark:bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        
        {/* Title */}
        {title ? (
          <Link href="/" className="whitespace-nowrap text-lg font-bold">
            Dev Collaboration Hub
          </Link>
        ) : <div />}

        {/* Hamburger Button (for phOne) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="rounded p-2 text-gray-200 hover:bg-gray-600 sm:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden sm:flex sm:items-center sm:gap-6"
        >
          {navButtons.map((button) => (
            <Link
              key={button.text}
              href={button.url}
              className="border-b-2 border-transparent py-1 font-medium transition-colors hover:border-white"
            >
              {button.text}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        hidden={!isOpen}
        className="flex flex-col gap-2 border-t border-gray-600 px-4 pt-2 pb-4 sm:hidden"
      >
          {navButtons.map((button) => (
          <Link
            key={button.text}
            href={button.url}
            onClick={() => setIsOpen(false)}
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-600"
          >
            {button.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;