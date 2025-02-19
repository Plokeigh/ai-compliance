import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
      <div className="min-h-screen bg-[#f0fdfa]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-[#f0fdfa] to-[#e6f6f8]">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover opacity-60"
              src="/images/soxhero1.png"
              alt="Hero Image"
              fill
              priority
            />
          </div>
          <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
            <div className="text-left">
              <h1 className="text-5xl font-bold text-[#134e4a] mb-6">
                Transform Your Compliance
                <span className="text-[#0891b2]"> with AI</span>
              </h1>
              <p className="text-xl text-[#134e4a] max-w-3xl mb-8">
                Streamline your SOX, SOC, and ISO compliance processes with cutting-edge AI solutions.
                Save time, reduce errors, and stay ahead of regulatory requirements.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/tutorials"
                  className="inline-flex items-center px-6 py-3 bg-[#0891b2] text-white rounded-lg hover:bg-[#0e7490] transition-colors"
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
            <h2 className="text-2xl font-bold text-[#134e4a] mb-4">Latest Updates</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#0891b2] pl-4">
                <h3 className="font-semibold text-[#134e4a]">New AI Tools for SOX Compliance</h3>
                <p className="text-[#134e4a] mt-1">Discover how AI can streamline your SOX documentation process.</p>
              </div>
              <div className="border-l-4 border-[#0891b2] pl-4">
                <h3 className="font-semibold text-[#134e4a]">ISO Compliance Guide</h3>
                <p className="text-[#134e4a] mt-1">Learn about AI-powered solutions for ISO compliance.</p>
              </div>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center mt-4 text-[#0891b2] hover:text-[#0e7490]"
            >
              View all updates
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Featured Tutorials */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#134e4a] mb-4">Tutorial Videos</h2>
            <div className="space-y-4">
              <div className="group">
                <h3 className="font-semibold text-[#134e4a] group-hover:text-[#0891b2]">Getting Started with AI in SOX</h3>
                <p className="text-[#134e4a] mt-1">A beginner&apos;s guide to implementing AI in your SOX compliance.</p>
              </div>
              <div className="group">
                <h3 className="font-semibold text-[#134e4a] group-hover:text-[#0891b2]">SOC Report Automation</h3>
                <p className="text-[#134e4a] mt-1">Learn how to automate your SOC reporting process.</p>
              </div>
            </div>
            <Link 
              href="/tutorials" 
              className="inline-flex items-center mt-4 text-[#0891b2] hover:text-[#0e7490]"
            >
              View all tutorials
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Featured Articles */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#134e4a] mb-4">Articles</h2>
            <div className="space-y-4">
              <div className="group">
                <h3 className="font-semibold text-[#134e4a] group-hover:text-[#0891b2]">AI in Compliance: 2025 Trends</h3>
                <p className="text-[#134e4a] mt-1">Explore the latest trends in AI-powered compliance solutions.</p>
              </div>
              <div className="group">
                <h3 className="font-semibold text-[#134e4a] group-hover:text-[#0891b2]">Best Practices Guide</h3>
                <p className="text-[#134e4a] mt-1">Key considerations for implementing AI in your compliance program.</p>
              </div>
            </div>
            <Link 
              href="/articles" 
              className="inline-flex items-center mt-4 text-[#0891b2] hover:text-[#0e7490]"
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