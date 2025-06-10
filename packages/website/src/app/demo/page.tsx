// packages/website/src/app/demo/page.tsx
import SlideDeck from '@kuidjamarco/slide-deck'; // This should resolve via workspace linking
import React from 'react';

// Sample slides for demonstration
const demoSlides = [
  ['# Slide 1: Welcome!', 'This is the first slide from our library.'],
  ['# Slide 2: Features', `- Markdown Support
- Smooth Transitions
- Lazy Loading`],
  ['## Vertical Slide 2.1', 'Content for vertical slide.'],
  ['# Slide 3: Thank You!', 'Enjoy using the slide deck library.']
];

export default function DemoPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Slide Deck Demo</h1>
      <div style={{ height: '500px', width: '100%', border: '1px solid #ccc' }}> {/* Basic styling for the container */}
        <SlideDeck slides={demoSlides} />
      </div>
    </div>
  );
}
