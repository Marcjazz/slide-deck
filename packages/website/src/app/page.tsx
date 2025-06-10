// packages/website/src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <code className="font-mono bg-gray-200 p-1 rounded">@kuidjamarco/slide-deck</code>
        </h1>
        <p className="text-lg mb-8">
          A lightweight, performant slide presentation library built with React and Tailwind CSS.
          Easily create and navigate through Markdown-based slides with horizontal and vertical navigation.
        </p>
        <div className="space-x-4">
          <Link href="/getting-started" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Getting Started
          </Link>
          <Link href="/demo" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            View Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
