import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">ComplAInce</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/tutorials" className="flex items-center">
              Tutorials
            </Link>
            <Link href="/articles" className="flex items-center">
              Articles
            </Link>
            <Link href="/tools" className="flex items-center">
              Tools
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 