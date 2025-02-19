"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-900 to-cyan-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
                AI Compliance
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/articles" 
              className="px-4 py-2 text-white hover:text-cyan-200 hover:bg-teal-800/50 rounded-lg transition-all duration-300"
            >
              Articles
            </Link>
            <Link 
              href="/tutorials" 
              className="px-4 py-2 text-white hover:text-cyan-200 hover:bg-teal-800/50 rounded-lg transition-all duration-300"
            >
              Tutorials
            </Link>
            <Link 
              href="/tools" 
              className="px-4 py-2 text-white hover:text-cyan-200 hover:bg-teal-800/50 rounded-lg transition-all duration-300"
            >
              Tools
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-cyan-100 hover:text-white hover:bg-teal-800/50 transition-colors duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-2 space-y-1 bg-gradient-to-r from-teal-800 to-cyan-800">
          <Link
            href="/articles"
            className="block px-4 py-3 text-white hover:text-cyan-200 hover:bg-teal-700/50 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Articles
          </Link>
          <Link
            href="/tutorials"
            className="block px-4 py-3 text-white hover:text-cyan-200 hover:bg-teal-700/50 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Tutorials
          </Link>
          <Link
            href="/tools"
            className="block px-4 py-3 text-white hover:text-cyan-200 hover:bg-teal-700/50 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Tools
          </Link>
        </div>
      </div>
    </nav>
  );
}