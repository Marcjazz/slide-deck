# Light Slide Deck

## Overview
Slide Deck is a lightweight, optimized slide presentation library designed for limited internet access environments. It provides a simple Markdown-based slide system with horizontal and vertical navigation, similar to Reveal.js but with minimal dependencies.

## Features
- **Markdown Support**: Write slides using Markdown for easy content formatting.
- **Horizontal & Vertical Navigation**: Navigate slides using arrow keys or navigation buttons.
- **Keyboard Shortcuts**: Move through slides with `ArrowUp`, `ArrowDown`, `ArrowLeft`, and `ArrowRight`. Toggle slide overview with `O` or `o`.
- **Optimized for Performance**: Designed to be lightweight and fast. Now features:
  - **Lazy Loading**: Horizontal slides are lazy-loaded to improve performance for large decks.
  - **Smooth Transitions**: Slide navigation is now smoother.
  - **Efficient Navigation**: Utilizes direct DOM scroll manipulation for performant slide transitions.
- **Progress Bar**: Visual indicator of your progress through the presentation.
- **Enhanced Slide Overview**: The slide overview drawer (toggle with 'O') allows clicking on any slide preview to navigate directly to it.

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
- **Up Arrow (▲)**: Previous vertical slide (within a horizontal slide)
- **Down Arrow (▼)**: Next vertical slide (within a horizontal slide)
- **'O' or 'o'**: Toggle slide overview drawer
- **Escape**: Close slide overview drawer

## License
MIT License. See `LICENSE` for details.

## Publishing to npm

This package is automatically published to the npm registry when a new release is created on GitHub.
The process is managed by a GitHub Actions workflow defined in `.github/workflows/publish-npm.yml`.

For maintainers: To enable automated publishing, an `NPM_TOKEN` secret with appropriate permissions to publish the `@kuidjamarco/slide-deck` package must be configured in the GitHub repository settings.
