// packages/website/src/app/page.tsx
import Link from 'next/link';
import { FiPlayCircle, FiBookOpen, FiCode, FiLayers, FiZap } from 'react-icons/fi'; // Example icons

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-gradient-to-br from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Present with Power: <span className="text-accent">@kdmarc/slide-deck</span>
            </h1>
            <p className="text-xl mb-8">
              A modern, Markdown-driven slide presentation library for React.
              Create beautiful, interactive 2D slide decks with ease, featuring code highlighting and customizable DaisyUI themes.
            </p>
            <div className="space-x-4">
              <Link href="/getting-started" className="btn btn-lg btn-accent">
                <FiBookOpen className="mr-2" /> Get Started
              </Link>
              <Link href="/demo" className="btn btn-lg btn-outline btn-accent-content hover:bg-accent-content hover:text-primary">
                <FiPlayCircle className="mr-2" /> View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
            Why Choose @kdmarc/slide-deck?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <FiLayers size={48} className="mb-4 text-primary" />
                <h3 className="card-title text-2xl">2D Navigation</h3>
                <p>Seamlessly navigate slides horizontally and vertically for complex presentations.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <FiCode size={48} className="mb-4 text-primary" />
                <h3 className="card-title text-2xl">Markdown-Based</h3>
                <p>Write your slide content quickly and intuitively using Markdown syntax.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <FiZap size={48} className="mb-4 text-primary" />
                <h3 className="card-title text-2xl">Syntax Highlighting</h3>
                <p>Beautifully highlighted code blocks out-of-the-box using highlight.js.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                {/* Icon for Theming - could be FiPalette or similar, using FiLayers as placeholder */}
                <FiLayers size={48} className="mb-4 text-secondary" />
                <h3 className="card-title text-2xl">DaisyUI Theming</h3>
                <p>Easily customize the look and feel with a wide array of DaisyUI themes.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <FiZap size={48} className="mb-4 text-secondary" /> {/* Placeholder icon */}
                <h3 className="card-title text-2xl">React Integration</h3>
                <p>Built with React for modern web applications, ensuring smooth integration.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <FiBookOpen size={48} className="mb-4 text-secondary" /> {/* Placeholder icon */}
                <h3 className="card-title text-2xl">Easy to Use</h3>
                <p>Simple setup and straightforward API to get your presentations running quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-base-content">Ready to Create Amazing Presentations?</h2>
          <p className="text-lg mb-8 text-base-content max-w-lg mx-auto">
            Check out the documentation to get started, or see the library in action on our demo page.
          </p>
          <div className="space-x-4">
            <Link href="/getting-started" className="btn btn-primary btn-lg">
              Read Docs
            </Link>
            <Link href="/demo" className="btn btn-secondary btn-lg">
              Explore Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
