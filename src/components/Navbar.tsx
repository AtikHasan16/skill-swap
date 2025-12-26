"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  LogOut, 
  LayoutDashboard, 
  ChevronDown,
  Search
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Conditional authProvider teke ashbe
  const isLoggedIn = false; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Browse Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          
          {/* LOGO + SITE NAME */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              className='w-[30px] md:w-[50px] h-auto' 
              src="https://cdn.discordapp.com/attachments/1453433310993715264/1454149569989316658/noLogo.png?ex=695009d2&is=694eb852&hm=f4118d5501f6eeef2d8b4f28bfb4187ccecf279db265cc0e3c6247f0ef72f0dd&" 
              alt="Logo" 
            />
            
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  pathname === link.href ? 'text-indigo-600 font-bold' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE: PROFILE / AUTH */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="btn-1">Login</Link>
                <Link href="/register" className="btn-1">Register</Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 pr-2 rounded-full hover:bg-gray-100 transition focus:outline-none border border-gray-200 shadow-sm"
                >
                  <img
                    className="h-8 w-8 rounded-full border border-indigo-100 object-cover"
                    src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                    alt="User"
                  />
                  <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* DROPDOWN MENU */}
                {isProfileOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
                      <div className="px-4 py-3 border-b border-gray-50">
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Logged in as</p>
                        <p className="text-sm font-bold text-gray-800 truncate">user@skillswap.com</p>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <LayoutDashboard size={18} /> Dashboard
                      </Link>
                      <button
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors mt-1 border-t border-gray-50"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <LogOut size={18} /> Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-8 space-y-1 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                pathname === link.href ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                  <LayoutDashboard size={20} /> Dashboard
                </Link>
                <button className="flex items-center gap-3 px-4 py-3 text-red-600 font-medium bg-red-50 rounded-xl" onClick={() => setIsOpen(false)}>
                  <LogOut size={20} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="w-full text-center py-3 rounded-xl font-bold border border-gray-200" onClick={() => setIsOpen(false)}>Login</Link>
                <Link href="/register" className="w-full text-center py-3 rounded-xl font-bold bg-indigo-600 text-white shadow-lg" onClick={() => setIsOpen(false)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;