import React from 'react';
import { Search, Clock } from 'lucide-react';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-teal-900 mb-3">Tutorial Videos</h1>
        <p className="text-lg text-teal-700 mb-8">
          Learn how to implement AI in your compliance processes step by step
        </p>

        {/* Search and Filter Section */}
        <div className="bg-white shadow-sm rounded-lg mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tutorials..."
                className="w-full pl-10 pr-4 py-2 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center text-sm text-teal-700">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium 
                    ${tutorial.level === 'Beginner' ? 'bg-cyan-50 text-cyan-600' : 
                    tutorial.level === 'Intermediate' ? 'bg-teal-50 text-teal-600' : 
                    'bg-cyan-100 text-cyan-700'}`}>
                    {tutorial.level}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-teal-900 mb-2">{tutorial.title}</h2>
                <p className="text-teal-700 mb-4">{tutorial.description}</p>
                <button className="w-full py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
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