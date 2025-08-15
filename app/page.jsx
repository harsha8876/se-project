
"use client"



import Image from "next/image";
import React, { useState } from 'react';
import { Search, Car, Shield, Clock, Star, CheckCircle, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import BlurText from "@/components/ui/BlurText";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-[#30475E] mr-2" />
              <span className="text-2xl font-bold text-[#30475E]">AutoMarket</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">Buy Cars</a>
              <a href="#" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">Sell Cars</a>
              <a href="#" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">Finance</a>
              <a href="#" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">Services</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-[#30475E] hover:text-[#121212] transition-colors font-medium">Login</button>
              <button className="bg-[#30475E] text-white px-6 py-2 rounded-lg hover:bg-[#121212] transition-all duration-300 transform hover:scale-105">
              Sign up  
              </button>
            </div>

            <button 
              className="md:hidden text-[#30475E]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
     

      