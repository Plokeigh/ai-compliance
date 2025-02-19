import React from 'react';
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">ComplAInce</h1>
      <p className="mb-4">
        Leveraging AI to simplify compliance across SOX, SOC, ISO, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Latest Updates</h2>
          {/* Add your latest updates content here */}
        </section>
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
          {/* Add your video links here */}
        </section>
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Articles</h2>
          {/* Add your articles here */}
        </section>
      </div>
    </main>
  );
}
