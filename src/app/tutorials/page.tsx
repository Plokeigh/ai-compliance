import React from 'react';
import { Search, Clock, PlayCircle } from 'lucide-react';

// Mock data - replace with your actual data
const tutorials = [
  {
    id: 1,
    title: "Getting Started with AI in SOX Compliance",
    description: "Learn the basics of implementing AI in your SOX compliance processes.",
    duration: "15:30",
    level: "Beginner",
    thumbnail: "https://placehold.co/800x400"
  },
  {
    id: 2,
    title: "Automating Control Testing with AI",
    description: "Step-by-step guide to automating your control testing procedures.",
    duration: "12:45",
    level: "Intermediate",
    thumbnail: "https://placehold.co/800x400"
  },
  {
    id: 3,
    title: "Advanced SOC Report Generation",
    description: "Advanced techniques for automated SOC report generation using AI.",
    duration: "20:15",
    level: "Advanced",
    thumbnail: "https://placehold.co/800x400"
  }
];

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tutorial Videos</h1>
          <p className="text-lg text-gray-600">
            Learn how to implement AI in your compliance processes
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
              placeholder="Search tutorials..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Topics</option>
              <option value="sox">SOX</option>
              <option value="soc">SOC</option>
              <option value="iso">ISO</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium 
                    ${tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                    tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}>
                    {tutorial.level}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{tutorial.title}</h2>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}