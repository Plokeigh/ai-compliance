import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Compliance
              <span className="text-blue-600"> with AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your SOX, SOC, and ISO compliance processes with cutting-edge AI solutions. 
              Save time, reduce errors, and stay ahead of regulatory requirements.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/tutorials" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Updates */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900">New AI Tools for SOX Compliance</h3>
                <p className="text-gray-600 mt-1">Discover how AI can streamline your SOX documentation process.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900">ISO Compliance Guide</h3>
                <p className="text-gray-600 mt-1">Learn about AI-powered solutions for ISO compliance.</p>
              </div>
            </div>
            <Link 
              href="/articles" 
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
            >
              View all updates
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Featured Tutorials */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutorial Videos</h2>
            <div className="space-y-4">
              <div className="group">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Getting Started with AI in SOX</h3>
                <p className="text-gray-600 mt-1">A beginner&apos;s guide to implementing AI in your SOX compliance.</p>
              </div>
              <div className="group">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">SOC Report Automation</h3>
                <p className="text-gray-600 mt-1">Learn how to automate your SOC reporting process.</p>
              </div>
            </div>
            <Link 
              href="/tutorials" 
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
            >
              View all tutorials
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Featured Articles */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Articles</h2>
            <div className="space-y-4">
              <div className="group">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">AI in Compliance: 2025 Trends</h3>
                <p className="text-gray-600 mt-1">Explore the latest trends in AI-powered compliance solutions.</p>
              </div>
              <div className="group">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Best Practices Guide</h3>
                <p className="text-gray-600 mt-1">Key considerations for implementing AI in your compliance program.</p>
              </div>
            </div>
            <Link 
              href="/articles" 
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
            >
              View all articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}