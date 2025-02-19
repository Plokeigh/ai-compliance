import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover object-center opacity-50 transition-opacity duration-300"
            src="/images/soxhero4.png"
            alt="AI-powered compliance solutions visualization"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className="relative max-w-7xl pl-8 pr-4 sm:pr-6 lg:pr-8 py-24">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 mb-5 leading-tight">
              Transform Your Compliance
              <span className="text-cyan-600 block mt-2">with AI Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-800 max-w-3xl mb-8 leading-relaxed">
              Streamline your SOX, SOC, and ISO compliance processes with cutting-edge AI solutions.
              Save time, reduce errors, and stay ahead of regulatory requirements with intelligent automation.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {/* Tools */}
          <div className="bg-white rounded-lg shadow-lg p-6 px-8 hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
            <h2 className="text-2xl font-bold text-teal-900 mb-6">Tools</h2>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <h3 className="font-semibold text-teal-900 group-hover:text-cyan-600 transition-colors">Control Testing Assistant</h3>
                <p className="text-teal-700 mt-2">AI-powered tool for testing and validating controls efficiently.</p>
                <div className="mt-2 w-16 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
              <div className="group cursor-pointer">
                <h3 className="font-semibold text-teal-900 group-hover:text-cyan-600 transition-colors">Documentation Generator</h3>
                <p className="text-teal-700 mt-2">Automatically generate compliant documentation with AI assistance.</p>
                <div className="mt-2 w-16 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center mt-6 text-cyan-600 hover:text-cyan-700 font-semibold group"
            >
              View all tools
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Tutorials */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-teal-900 mb-6">Tutorial Videos</h2>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <h3 className="font-semibold text-teal-900 group-hover:text-cyan-600 transition-colors">Getting Started with AI in SOX</h3>
                <p className="text-teal-700 mt-2">A beginner&apos;s guide to implementing AI in your SOX compliance.</p>
                <div className="mt-2 w-16 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
              <div className="group cursor-pointer">
                <h3 className="font-semibold text-teal-900 group-hover:text-cyan-600 transition-colors">SOC Report Automation</h3>
                <p className="text-teal-700 mt-2">Learn how to automate your SOC reporting process.</p>
                <div className="mt-2 w-16 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
            <Link 
              href="/tutorials" 
              className="inline-flex items-center mt-6 text-cyan-600 hover:text-cyan-700 font-semibold group"
            >
              View all tutorials
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Articles */}
          <div className="bg-white rounded-lg shadow-lg p-6 px-8 hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
            <h2 className="text-2xl font-bold text-teal-900 mb-6">Articles</h2>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <h3 className="font-semibold text-teal-900 group-hover:text-cyan-600 transition-colors">AI in Compliance: 2025 Trends</h3>
                <p className="text-teal-700 mt-2">Explore the latest trends in AI-powered compliance solutions.</p>
                <div className="mt-2 w-16 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
              <div className="group cursor-pointer">
                <h3 className="font-semibold text-teal-900 group-hover:text-cyan-600 transition-colors">Best Practices Guide</h3>
                <p className="text-teal-700 mt-2">Key considerations for implementing AI in your compliance program.</p>
                <div className="mt-2 w-16 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
            <Link 
              href="/articles" 
              className="inline-flex items-center mt-6 text-cyan-600 hover:text-cyan-700 font-semibold group"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}