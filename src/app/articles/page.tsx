import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

// Mock data - replace with your actual data
const articles = [
  {
    id: 1,
    title: "AI-Powered SOX Compliance: A Complete Guide",
    excerpt: "Learn how artificial intelligence is transforming SOX compliance processes and documentation.",
    date: "Feb 15, 2025",
    category: "SOX",
    readTime: "8 min read",
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    title: "Automating SOC Reports with AI",
    excerpt: "Discover how AI can streamline your SOC reporting process and improve accuracy.",
    date: "Feb 12, 2025",
    category: "SOC",
    readTime: "6 min read",
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
    title: "ISO Compliance: AI Implementation Guide",
    excerpt: "A comprehensive guide to implementing AI in your ISO compliance program.",
    date: "Feb 10, 2025",
    category: "ISO",
    readTime: "10 min read",
    image: "/api/placeholder/800/400"
  }
];

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="grid gap-6">
        {/* Articles content will go here */}
        <p>Coming soon...</p>
      </div>
    </div>
  );
}