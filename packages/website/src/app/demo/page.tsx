'use client';

import SlideDeck from '@kdmarc/slide-deck';
import React, { useState } from 'react';

// Available themes for DaisyUI
const availableThemes = ["light", "dark", "cupcake", "bumblebee", "emerald", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

export default function DemoPage() {
  const [theme, setTheme] = useState('light');

  // Sample slides for demonstration, now including code blocks
  const demoSlides = [
    [`# Slide 1: Welcome!`, `This is the first slide. Current theme: ${theme}`],
    [`# Slide 2: Features`, `- Markdown Support
- Smooth Transitions
- Code Highlighting!
- Basic Theming!`],
    [`## Code Example: JavaScript`, '```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet("World"));\n```'],
    [`## Code Example: Python`, '```python\ndef fibonacci(n):\n    a, b = 0, 1\n    while a < n:\n        print(a, end=\' \')\n        a, b = b, a+b\n    print()\nfibonacci(100)\n```'],
    [`## Vertical Slide 2.1`, 'Content for vertical slide.'],
    [`# Slide 3: Thank You!`, 'Enjoy using the slide deck library.']
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">Slide Deck Demo</h1>

      <div className="form-control w-full max-w-xs mb-8">
        <label className="label">
          <span className="label-text">Select Theme:</span>
        </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="select select-bordered w-full"
        >
          {availableThemes.map((themeName) => (
            <option key={themeName} value={themeName}>
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-3/4 lg:w-2/3 shadow-xl rounded-box overflow-hidden" style={{ height: '600px' }}>
        <SlideDeck slides={demoSlides} theme={theme} />
      </div>
    </div>
  );
}
