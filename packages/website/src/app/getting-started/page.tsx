// packages/website/src/app/getting-started/page.tsx
import Link from 'next/link';

export default function GettingStartedPage() {
  const usageExample = `
import SlideDeck from '@kuidjamarco/slide-deck';
import React from 'react';

// Ensure your project is set up with Tailwind CSS

const mySlides = [
  ['# My First Slide', 'Hello from @kuidjamarco/slide-deck!'],
  ['## Another Slide', 'This is easy to use.'],
];

function App() {
  return (
    <div style={{ height: '600px', width: '800px', margin: 'auto' }}>
      <SlideDeck slides={mySlides} />
    </div>
  );
}

export default App;
  `;

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Getting Started</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Installation</h2>
        <p className="mb-2">You can install <code className="font-mono bg-gray-200 p-1 rounded">@kuidjamarco/slide-deck</code> using yarn or npm:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-2">
          <code>yarn add @kdmarc/slide-deck</code>
        </pre>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code>npm install @kdmarc/slide-deck</code>
        </pre>
        <p className="mt-2">
          Ensure you have React and ReactDOM as peer dependencies in your project.
          The library uses Tailwind CSS classes for styling, so your project should also be configured with Tailwind CSS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Minimal Usage</h2>
        <p className="mb-2">Here&apos;s a basic example of how to use the <code className="font-mono bg-gray-200 p-1 rounded">SlideDeck</code> component:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code>{usageExample.trim()}</code>
        </pre>
      </section>

      <Link href="/" className="text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
    </main>
  );
}
