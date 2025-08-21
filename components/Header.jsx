'use client';

import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import {
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-white bg-opacity-80 backdrop-blur-md shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Car className="w-8 h-8 text-[#30475E] mr-2" />
            <span className="text-xl sm:text-2xl font-bold text-[#30475E]">
              AutoMarket
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-[#121212] hover:text-[#30475E] transition-colors font-medium"
            >
              Browse Cars
            </a>
            <a
              href="#about"
              className="text-[#121212] hover:text-[#30475E] transition-colors font-medium"
            >
              About Us
            </a>
            <Link href="/finance" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">
              Finance
            </Link>
            <a
              href="#services"
              className="text-[#121212] hover:text-[#30475E] transition-colors font-medium"
            >
              Services
            </a>
            <SignInButton>
              <button className="text-[#30475E] hover:text-[#121212] transition-colors font-medium">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-[#30475E] text-white px-4 py-2 rounded-lg hover:bg-[#121212] transition-all duration-300 transform hover:scale-105">
                Sign up
              </button>
            </SignUpButton>
          </nav>

          <button
            className="lg:hidden text-[#30475E] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-35 bg-white bg-opacity-95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Car className="w-8 h-8 text-[#30475E] mr-2" />
                <span className="text-xl font-bold text-[#30475E]">
                  AutoMarket
                </span>
              </div>
              <button
                className="text-[#30475E] p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col flex-1 px-4 py-8 space-y-6">
              <a
                href="#"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Cars
              </a>
              <a
                href="#about"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              
              </a>
              <a
                href="#finance"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Finance
              </a>
              <a
                href="#services"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>

              <div className="flex flex-col space-y-4 pt-8 mt-8 border-t border-gray-200">
                <SignInButton>
                  <button className="w-full text-[#30475E] hover:text-[#121212] transition-colors font-medium text-lg py-3 border border-[#30475E] rounded-lg">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="w-full bg-[#30475E] text-white py-3 rounded-lg hover:bg-[#121212] transition-all duration-300 font-medium">
                    Sign up
                  </button>
                </SignUpButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;