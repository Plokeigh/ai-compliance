import React from 'react';
import { Search, Star, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Mock data - replace with your actual data
const tools = [
  {
    id: 1,
    title: "SOX Documentation AI",
    description: "Automate your SOX documentation process with advanced AI capabilities.",
    category: "SOX",
    rating: 4.8,
    reviews: 128,
    features: ["Auto-documentation", "Control testing", "Risk assessment"],
    image: "https://placehold.co/400x200"
  },
  {
    id: 2,
    title: "SOC Report Generator",
    description: "Generate comprehensive SOC reports with AI-powered analysis and insights.",
    category: "SOC",
    rating: 4.6,
    reviews: 95,
    features: ["Report automation", "Evidence collection", "Gap analysis"],
    image: "https://placehold.co/400x200"
  },
  {
    id: 3,
    title: "ISO Compliance Assistant",
    description: "Streamline your ISO compliance with intelligent process automation.",
    category: "ISO",
    rating: 4.7,
    reviews: 156,
    features: ["Process mapping", "Requirement tracking", "Audit preparation"],
    image: "https://placehold.co/400x200"
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-teal-900 mb-3">Compliance Tools</h1>
        <p className="text-lg text-teal-700 mb-8">
          Discover AI-powered tools to enhance your compliance processes
        </p>

        {/* Search and Filter Section */}
        <div className="bg-white shadow-sm rounded-lg mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full pl-10 pr-4 py-2 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                <option value="">All Categories</option>
                <option value="sox">SOX</option>
                <option value="soc">SOC</option>
                <option value="iso">ISO</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tools Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-900 mb-2">{tool.title}</h3>
              <p className="text-teal-700 mb-4">{tool.description}</p>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-cyan-500 fill-current" />
                <span className="ml-2 text-teal-700">{tool.rating}</span>
                <span className="ml-2 text-teal-600">({tool.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors">
                Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}