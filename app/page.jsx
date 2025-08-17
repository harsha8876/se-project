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
  ChevronRight,
  Award,
  Users,
  TrendingUp,


} from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import DarkVeil from "@/components/ui/DarkVeil";
import Link from "next/link";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import Searchbar from "@/components/Searchbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Define the services array
  const services = [
    {
      title: "Car Buying Assistance",
      description: "Get expert advice on buying your next car.",
      features: ["Expert Guidance", "Best Deals", "Wide Selection"],
    },
    {
      title: "Car Selling Assistance",
      description: "Sell your car quickly and at the best price.",
      features: ["Quick Process", "Fair Pricing", "Wide Reach"],
    },
    {
      title: "Car Financing",
      description: "Flexible financing options for your dream car.",
      features: ["Low Interest Rates", "Easy Approval", "Custom Plans"],
    },
  ];

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
                Browse Cars
              </a>
              <a
                href="#"
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

        <div className="flex justify-center relative z-20 w-full">
          <div className="w-full max-w-2xl">
            <Searchbar />
          </div>
        </div> 
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#30475E]/50 to-[#30475E]/80 z-10"></div>

      </section>
      {/*brand*/}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Make</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="h-16 w-auto mx-auto mb-2 relative">
                  <Image
                    src={
                      make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
                    }
                    alt={make.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="font-medium">{make.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section> 

      {/* Services */}
      <section className="py-16 bg-[#F5F5F5]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive solutions to meet all your car buying and
              selling needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#121212] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.title === "Car Financing" ? (
                  <Link href="/finance">
                    <button className="w-full bg-[#30475E] text-white py-3 rounded-lg hover:bg-[#121212] transition-all duration-300 font-medium">
                      Learn More
                    </button>
                  </Link>
                ) : (
                  <button className="w-full bg-[#30475E] text-white py-3 rounded-lg hover:bg-[#121212] transition-all duration-300 font-medium">
                    Learn More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Trust Indicators */}
       <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">Trusted by Millions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry recognition and customer trust that speaks for our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
              <Award className="w-12 h-12 text-[#30475E] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#121212] mb-2">Industry Leader</h3>
              <p className="text-gray-600">Recognized as India's #1 used car platform by leading automotive publications</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
              <Users className="w-12 h-12 text-[#30475E] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#121212] mb-2">Customer First</h3>
              <p className="text-gray-600">Over 1 million satisfied customers with 99% positive feedback ratings</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-[#30475E] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#121212] mb-2">Growing Fast</h3>
              <p className="text-gray-600">Expanding to new cities every month with innovative automotive solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest car deals, market insights, and exclusive offers delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30475E] focus:border-transparent text-[#121212]"
            />
            <button className="bg-[#30475E] text-white px-8 py-4 rounded-lg hover:bg-[#121212] transition-all duration-300 transform hover:scale-105 font-medium whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}