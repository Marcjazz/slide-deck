# Light Slide Deck

## Overview
Slide Deck is a lightweight, optimized slide presentation library designed for limited internet access environments. It provides a simple Markdown-based slide system with horizontal and vertical navigation, similar to Reveal.js but with minimal dependencies.

## Features
- **Markdown Support**: Write slides using Markdown for easy content formatting.
- **Horizontal & Vertical Navigation**: Navigate slides using arrow keys or navigation buttons.
- **Keyboard Shortcuts**: Move through slides with `ArrowUp`, `ArrowDown`, `ArrowLeft`, and `ArrowRight`.
- **Customizable Navigation**: Option to enable or disable navigation buttons.
- **Optimized for Performance**: Designed to be lightweight and fast for low-bandwidth environments.

## Installation
To install the package, run:

```sh
npm install @kuidjamarco/slide-deck
```

or using yarn:

```sh
yarn add @kuidjamarco/slide-deck
```

## Usage
Import and use the `SlideDeck` component in your React project:

```tsx
import React from 'react';
import SlideDeck from '@kuidjamarco/slide-deck';
import 'tailwindcss/tailwind.css'

const slides = [
  ['# Welcome to Light Slide Deck'],
  ['## Slide 1', 'Some content here'],
  ['## Slide 2', 'More details'],
];

const App = () => {
  return <SlideDeck slides={slides} showNavigation={true} />;
};

export default App;
```

## Props
| Prop Name      | Type         | Default | Description                                      |
|--------------|-------------|---------|-------------------------------------------------|
| `slides`      | `string[][]` | `[]`     | Array of slides, each containing Markdown content. |

## Keyboard Shortcuts
- **Left Arrow (◀︎)**: Previous horizontal slide
- **Right Arrow (▶︎)**: Next horizontal slide
- **Up Arrow (▲)**: Previous vertical slide
- **Down Arrow (▼)**: Next vertical slide

## License
MIT License. See `LICENSE` for details.

