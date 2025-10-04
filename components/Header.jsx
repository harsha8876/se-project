
// 'use client';

// import React, { useState } from 'react';
// import { Car, Menu, X, Heart, CarFront, Layout, ArrowLeft } from 'lucide-react';
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser,
// } from '@clerk/nextjs';
// import Link from 'next/link';
// import { checkUser } from '@/lib/checkUser';

// const Header = aysnc ({ isAdminPage = false }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user } = checkUser();

//   // Check role from Clerk user metadata
//   const isAdmin = user?.role === 'ADMIN';

//   return (
//     <header className="relative z-20 bg-white bg-opacity-80 backdrop-blur-md shadow-sm sticky top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Car className="w-8 h-8 text-[#30475E] mr-2" />
//             <span className="text-xl sm:text-2xl font-bold text-[#30475E]">
//               AutoMarket
//             </span>
//             {isAdminPage && (
//               <span className="ml-2 text-xs font-extralight">admin</span>
//             )}
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {!isAdminPage && (
//               <>
//                 <a href="#" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">
//                   Browse Cars
//                 </a>
//                 <a href="#about" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">
//                   About Us
//                 </a>
//                 <Link href="/finance" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">
//                   Finance
//                 </Link>
//                 <a href="#services" className="text-[#121212] hover:text-[#30475E] transition-colors font-medium">
//                   Services
//                 </a>
//               </>
//             )}

//             {/* If Admin Page → Show Back button */}
//             {isAdminPage && (
//               <Link href="/">
//                 <button className="flex items-center gap-2 border px-3 py-1 rounded-md">
//                   <ArrowLeft size={18} />
//                   <span>Back to App</span>
//                 </button>
//               </Link>
//             )}

//             {/* Signed-in User */}
//             <SignedIn>
//               {!isAdminPage && (
//                 <>
//                   {!isAdmin && (
//                     <Link href="/reservations">
//                       <button className="flex items-center gap-2 border px-3 py-1 rounded-md">
//                         <CarFront size={18} />
//                         <span className="hidden md:inline">My Reservations</span>
//                       </button>
//                     </Link>
//                   )}
//                   <Link href="/saved-cars">
//                     <button className="flex items-center gap-2 bg-[#30475E] text-white px-3 py-1 rounded-md hover:bg-[#121212] transition">
//                       <Heart size={18} />
//                       <span className="hidden md:inline">Saved Cars</span>
//                     </button>
//                   </Link>
//                   {isAdmin && (
//                     <Link href="/admin">
//                       <button className="flex items-center gap-2 border px-3 py-1 rounded-md">
//                         <Layout size={18} />
//                         <span className="hidden md:inline">Admin Portal</span>
//                       </button>
//                     </Link>
//                   )}
//                 </>
//               )}
//               <UserButton appearance={{ elements: { avatarBox: 'w-10 h-10' } }} />
//             </SignedIn>

//             {/* Signed-out */}
//             <SignedOut>
//               {!isAdminPage && (
//                 <>
//                   <SignInButton forceRedirectUrl="/">
//                     <button className="text-[#30475E] hover:text-[#121212] transition-colors font-medium">
//                       Login
//                     </button>
//                   </SignInButton>
//                   <SignUpButton>
//                     <button className="bg-[#30475E] text-white px-4 py-2 rounded-lg hover:bg-[#121212] transition-all duration-300 transform hover:scale-105">
//                       Sign up
//                     </button>
//                   </SignUpButton>
//                 </>
//               )}
//             </SignedOut>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-[#30475E] p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>
//      {isMenuOpen && (
//         <div className="fixed inset-0 z-35 bg-white backdrop-blur-md lg:hidden">
//           <div className="flex flex-col h-full">
//             {/* Mobile Header */}
//             <div className="flex justify-between items-center p-4 border-b border-gray-200">
//               <div className="flex items-center">
//                 <Car className="w-8 h-8 text-[#30475E] mr-2" />
//                 <span className="text-xl font-bold text-[#30475E]">
//                   AutoMarket
//                 </span>
//                 {isAdminPage && (
//                   <span className="ml-2 text-xs font-extralight">admin</span>
//                 )}
//               </div>
//               <button
//                 className="text-[#30475E] p-2"
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="Close Menu"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Mobile Navigation */}
//             <nav className="flex flex-col flex-1 px-4 py-8 space-y-6 bg-white">
//               {!isAdminPage && (
//                 <>
//                   <a
//                     href="#"
//                     className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Browse Cars
//                   </a>
//                   <a
//                     href="#about"
//                     className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     About Us
//                   </a>
//                   <Link
//                     href="/finance"
//                     className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Finance
//                   </Link>
//                   <a
//                     href="#services"
//                     className="text-[#121212] hover:text-[#30475E] transition-colors font-medium text-lg py-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Services
//                   </a>
//                 </>
//               )}

//               {isAdminPage && (
//                 <Link href="/" onClick={() => setIsMenuOpen(false)}>
//                   <button className="flex items-center gap-2 border px-3 py-2 rounded-md w-full">
//                     <ArrowLeft size={18} />
//                     <span>Back to App</span>
//                   </button>
//                 </Link>
//               )}

//               <SignedIn>
//                 {!isAdminPage && (
//                   <>
//                     {!isAdmin && (
//                       <Link
//                         href="/reservations"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <button className="w-full flex items-center gap-2 border px-3 py-2 rounded-md">
//                           <CarFront size={18} />
//                           <span>My Reservations</span>
//                         </button>
//                       </Link>
//                     )}
//                     <Link href="/saved-cars" onClick={() => setIsMenuOpen(false)}>
//                       <button className="w-full flex items-center gap-2 bg-[#30475E] text-white px-3 py-2 rounded-md hover:bg-[#121212] transition">
//                         <Heart size={18} />
//                         <span>Saved Cars</span>
//                       </button>
//                     </Link>
//                     {isAdmin && (
//                       <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
//                         <button className="w-full flex items-center gap-2 border px-3 py-2 rounded-md">
//                           <Layout size={18} />
//                           <span>Admin Portal</span>
//                         </button>
//                       </Link>
//                     )}
//                   </>
//                 )}
//                 <UserButton
//                   appearance={{
//                     elements: {
//                       avatarBox: 'w-10 h-10',
//                     },
//                   }}
//                 />
//               </SignedIn>

//               <SignedOut>
//                 {!isAdminPage && (
//                   <div className="flex flex-col space-y-4 pt-8 mt-8 border-t border-gray-200">
//                     <SignInButton forceRedirectUrl="/">
//                       <button className="w-full text-[#30475E] hover:text-[#121212] transition-colors font-medium text-lg py-3 border border-[#30475E] rounded-lg">
//                         Login
//                       </button>
//                     </SignInButton>
//                     <SignUpButton>
//                       <button className="w-full bg-[#30475E] text-white py-3 rounded-lg hover:bg-[#121212] transition-all duration-300 font-medium">
//                         Sign up
//                       </button>
//                     </SignUpButton>
//                   </div>
//                 )}
//               </SignedOut>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx (Server)
import Link from "next/link";
import { Car, Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import AuthButtons from "./AuthButtons"; // client-only

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser(); // ✅ runs on server
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Car className="w-8 h-8 text-[#30475E] mr-2" />
          <span className="text-xl sm:text-2xl font-bold text-[#30475E]">
            AutoMarket
          </span>
        </Link>

        {/* Server-side links */}
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href="/">
              <button className="flex items-center gap-2 border px-3 py-1 rounded-md cursor-pointer 
                                hover:bg-gray-100 hover:border-gray-400 transition-colors">
                <ArrowLeft size={18} />
                <span>Back to App</span>
              </button>
            </Link>
          ) : (
            <>
              {!isAdmin && user && (
                <Link href="/reservations">
                  <button className="flex items-center gap-2 border px-3 py-1 rounded-md">
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </button>
                </Link>
              )}
              {user && (
                <Link href="/saved-cars">
                  <button className="flex items-center gap-2 bg-[#30475E] text-white px-3 py-1 rounded-md hover:bg-[#121212] cursor-pointer">
                    <Heart size={18} />
                    <span className="hidden md:inline">Saved Cars</span>
                  </button>
                </Link>
              )}
              {isAdmin && (
                <Link href="/admin">
                  <button className="flex items-center gap-2 border px-3 py-1 rounded-md cursor-pointer 
                                hover:bg-gray-100 hover:border-gray-400 transition-colors">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </button>
                </Link>
              )}
            </>
          )}
          
          {/* Client-only Clerk UI */}
          <AuthButtons isAdminPage={isAdminPage} user={user} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
