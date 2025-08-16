"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Search,
  Car,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import DarkVeil from "@/components/ui/DarkVeil";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-screen bg-[#F5F5F5]">
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
                Buy Cars
              </a>
              <a
                href="#"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium"
              >
                Sell Cars
              </a>
              <a
                href="#"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium"
              >
                Finance
              </a>
              <a
                href="#"
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
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white bg-opacity-95 backdrop-blur-md lg:hidden">
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
                Buy Cars
              </a>
              <a
                href="#"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Cars
              </a>
              <a
                href="#"
                className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Finance
              </a>
              <a
                href="#"
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

      {/* Hero Section with Dark Veil */}
      <section className="relative bg-gradient-to-b from-[#30475E] via-[#2a3f5a] to-[#243652] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Dark Veil Background */}
        <div className="absolute inset-0 z-0">
          <DarkVeil
            hueShift={30}
            noiseIntensity={0.1}
            scanlineIntensity={0.2}
            speed={0.5}
            scanlineFrequency={1.5}
            warpAmount={0.05}
          />
        </div>

        {/* Gradient overlay for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#30475E]/50 to-[#30475E]/80 z-1"></div>

        <div className="flex flex-col items-center justify-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full text-center">
          <div className="mb-8 sm:mb-12">
            <BlurText
              text="Find your perfect car"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              animateBy="words"
              direction="top"
              stepDuration={0.5}
            />
            <p className="text-base sm:text-lg lg:text-xl text-[#F5F5F5] max-w-2xl mx-auto px-4">
              Discover the best deals on cars that suit your needs and budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}