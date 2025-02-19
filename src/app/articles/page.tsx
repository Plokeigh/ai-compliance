import React from 'react';
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
    image: "/images/sox-compliance.png"
  },
  {
    id: 2,
    title: "Automating SOC Reports with AI",
    excerpt: "Discover how AI can streamline your SOC reporting process and improve accuracy.",
    date: "Feb 12, 2025",
    category: "SOC",
    readTime: "6 min read",
    image: "/images/sox-compliance.png"
  },
  {
    id: 3,
    title: "ISO Compliance: AI Implementation Guide",
    excerpt: "A comprehensive guide to implementing AI in your ISO compliance program.",
    date: "Feb 10, 2025",
    category: "ISO",
    readTime: "10 min read",
    image: "/images/sox-compliance.png"
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-teal-900 mb-3">Articles</h1>
        <p className="text-lg text-teal-700 mb-8">
          Stay up to date with the latest insights in AI-powered compliance
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-cyan-600 px-3 py-1 bg-cyan-50 rounded-full">{article.category}</span>
                  <span className="text-sm text-teal-700">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-teal-900 mb-2 group-hover:text-cyan-600 transition-colors">{article.title}</h2>
                <p className="text-teal-700 mb-4">{article.excerpt}</p>
                <span className="text-sm text-teal-600">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}