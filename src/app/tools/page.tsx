import React from 'react';
import { Search, Star, ArrowUpRight, Shield } from 'lucide-react';

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
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    title: "SOC Report Generator",
    description: "Generate comprehensive SOC reports with AI-powered analysis and insights.",
    category: "SOC",
    rating: 4.6,
    reviews: 95,
    features: ["Report automation", "Evidence collection", "Gap analysis"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 3,
    title: "ISO Compliance Assistant",
    description: "Streamline your ISO compliance with intelligent process automation.",
    category: "ISO",
    rating: 4.7,
    reviews: 156,
    features: ["Process mapping", "Requirement tracking", "Audit preparation"],
    image: "/api/placeholder/400/200"
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance Tools</h1>
          <p className="text-lg text-gray-600">
            Discover AI-powered tools to enhance your compliance processes
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Categories</option>
              <option value="sox">SOX</option>
              <option value="soc">SOC</option>
              <option value="iso">ISO</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Sort by</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tools Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-gray-700">{tool.rating}</span>
                <span className="ml-2 text-gray-500">({tool.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}