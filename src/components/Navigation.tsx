"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">AI Compliance</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/articles" className="text-white hover:text-blue-200 transition-colors">
              Articles
            </Link>
            <Link href="/tutorials" className="text-white hover:text-blue-200 transition-colors">
              Tutorials
            </Link>
            <Link href="/tools" className="text-white hover:text-blue-200 transition-colors">
              Tools
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
            <Link
              href="/articles"
              className="block px-3 py-2 text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="block px-3 py-2 text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="/tools"
              className="block px-3 py-2 text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}