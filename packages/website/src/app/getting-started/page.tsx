import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <main className="container mx-auto p-8 prose lg:prose-xl max-w-none">
      <h1 className="text-4xl font-bold mb-8 text-center">Getting Started with @kdmarc/slide-deck</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Installation</h2>
        <p>Install the package and its peer dependencies using npm or yarn:</p>
        <div className="mockup-code mb-4">
          <pre data-prefix="$"><code>npm install @kdmarc/slide-deck daisyui tailwindcss react-markdown rehype-highlight highlight.js</code></pre>
        </div>
        <p className="text-center my-2">or</p>
        <div className="mockup-code">
          <pre data-prefix="$"><code>yarn add @kdmarc/slide-deck daisyui tailwindcss react-markdown rehype-highlight highlight.js</code></pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Tailwind CSS & DaisyUI Setup</h2>
        <p>
          This library is styled with Tailwind CSS and uses DaisyUI for theming and components.
          Ensure your project is configured for Tailwind CSS.
        </p>

        <h3 className="text-2xl font-medium mb-3 mt-6">1. Configure Tailwind CSS</h3>
        <p>Update your <code className="font-mono bg-base-200 p-1 rounded text-sm">tailwind.config.js</code> (or <code className="font-mono bg-base-200 p-1 rounded text-sm">tailwind.config.ts</code>) to include paths to the library&apos;s components if you want to ensure DaisyUI themes apply correctly and to scan your project files. Also, add DaisyUI as a plugin:
        </p>
        <div className="mockup-code my-4">
          <pre><code>
{`// tailwind.config.js (or .ts)
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Adjust for your project structure (e.g., ./pages, ./src/pages)
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // Include @kdmarc/slide-deck to ensure its classes are processed by your app's Tailwind build,
    // especially for DaisyUI theming to apply correctly.
    "./node_modules/@kdmarc/slide-deck/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};`}
          </code></pre>
        </div>
        <p className="text-sm">
          <em>Note: The path <code className="font-mono bg-base-200 p-1 rounded text-xs">./node_modules/@kdmarc/slide-deck/dist/**/*.js</code> assumes the library packages its JavaScript files in the <code className="font-mono bg-base-200 p-1 rounded text-xs">dist</code> folder. Adjust if necessary based on the library&apos;s structure.</em>
        </p>

        <h3 className="text-2xl font-medium mb-3 mt-6">2. Import Base Styles</h3>
        <p>In your main CSS file (e.g., <code className="font-mono bg-base-200 p-1 rounded text-sm">src/app/globals.css</code> or <code className="font-mono bg-base-200 p-1 rounded text-sm">src/styles/globals.css</code>), ensure you have the Tailwind directives:</p>
        <div className="mockup-code my-4">
          <pre><code>
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </code></pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Code Highlighting CSS</h2>
        <p>
          To enable syntax highlighting styles for code blocks within your slides, you need to import a stylesheet from <code className="font-mono bg-base-200 p-1 rounded text-sm">highlight.js</code>.
          Import this in your main layout component (e.g., <code className="font-mono bg-base-200 p-1 rounded text-sm">src/app/layout.tsx</code>) or directly in the page/component where you use the SlideDeck.
        </p>
        <div className="mockup-code my-4">
          <pre><code>
{`// e.g., in src/app/layout.tsx or the page using SlideDeck
import 'highlight.js/styles/github.css'; // Or your preferred theme (e.g., atom-one-dark.css)`}
          </code></pre>
        </div>
        <p>
          You can find a list of available themes in the <code className="font-mono bg-base-200 p-1 rounded text-sm">highlight.js</code> documentation or its node_modules folder (<code className="font-mono bg-base-200 p-1 rounded text-sm">node_modules/highlight.js/styles/</code>).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Basic Usage Example</h2>
        <p>Here&apos;s how you can use the <code className="font-mono bg-base-200 p-1 rounded text-sm">SlideDeck</code> component in your Next.js application:</p>
        <div className="mockup-code my-4">
          <pre><code>
{`// app/my-slides/page.tsx (or any other component)
'use client'; // Required if you use hooks like useState for theme selection

import SlideDeck from '@kdmarc/slide-deck';
import 'highlight.js/styles/github.css'; // Choose your preferred highlight.js theme

const mySlides = [
  ['# My First Slide', 'This is the content of my first slide.'],
  ['## Code Demo', \`
This slide demonstrates code highlighting:
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name} from SlideDeck!\`;
}
console.log(greet("Developer"));
\`\`\`
  \`],
  ['# Another Slide', 'Use Markdown for easy formatting!']
  // Add more slides here as arrays of strings: [title, content, title2, content2, ...]
  // Or vertical slides as nested arrays: [title, [contentV1, contentV2]]
];

export default function MyPresentationPage() {
  // Example: You can use useState to dynamically change the theme
  // const [theme, setTheme] = useState('cupcake');

  return (
    // Ensure the container has defined dimensions
    <div style={{ height: '100vh', width: '100vw' }}>
      <SlideDeck
        slides={mySlides}
        theme="cupcake" // Or dynamically set: theme={theme}
      />
    </div>
  );
}`}
          </code></pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Theming</h2>
        <p>
          The <code className="font-mono bg-base-200 p-1 rounded text-sm">SlideDeck</code> component accepts a <code className="font-mono bg-base-200 p-1 rounded text-sm">theme</code> prop. You can pass any valid DaisyUI theme name to customize the appearance of the slides.
        </p>
        <p>
          For example: <code className="font-mono bg-base-200 p-1 rounded text-sm">&lt;SlideDeck slides={...} theme="dark" /&gt;</code>.
        </p>
        <p>
          Refer to the <a href="https://daisyui.com/docs/themes/" target="_blank" rel="noopener noreferrer" className="link link-primary">official DaisyUI documentation</a> for a list of available themes and how to create your own.
        </p>
        <p>
          You can see a live theme selector on our <Link href="/demo" className="link link-secondary">Demo Page</Link>.
        </p>
      </section>

      <div className="text-center mt-12">
        <Link href="/" className="btn btn-ghost">
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
