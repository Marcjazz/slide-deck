# kdmarc Monorepo (@kuidjamarco/slide-deck & @kdmarc/website)

This monorepo contains the `@kuidjamarco/slide-deck` library and its documentation website (`@kdmarc/website`). It uses Yarn Workspaces for managing the packages.

## Packages

This workspace includes the following packages:

- **`packages/slide-deck` (`@kuidjamarco/slide-deck`)**: A lightweight, performant slide presentation library built with React and Tailwind CSS. It allows for Markdown-based slide creation with horizontal and vertical navigation, lazy loading, smooth transitions, and a progress bar.
- **`packages/website` (`@kdmarc/website`)**: A Next.js application that serves as the documentation, technical guide, and live demo site for the `@kuidjamarco/slide-deck` library.

## Development

### Prerequisites
- Node.js (v22 recommended, as used in CI)
- Yarn (v1.22.22, as specified in `packageManager` in the root `package.json`)

### Initial Setup
1. Clone this repository.
2. Navigate to the root directory of the cloned repository.
3. Run `yarn install` to install all dependencies for the workspace, including linking the local packages.

### Running the Website Locally
To start the Next.js documentation website (`@kdmarc/website`):
```bash
yarn dev
# or directly:
yarn dev:website
```
The website will typically be available at `http://localhost:3000`. It serves as a live testing environment for `@kuidjamarco/slide-deck` as it uses the local version of the library.

### Developing the `@kuidjamarco/slide-deck` Library
If you are making changes to the `@kuidjamarco/slide-deck` library itself:
1.  Open a terminal and navigate to the monorepo root.
2.  Run the library's build in watch mode:
    ```bash
    yarn dev:slide-deck
    # or directly:
    yarn workspace @kuidjamarco/slide-deck dev
    ```
    This command (typically `tsc -w`) will watch for changes in `packages/slide-deck/src` and recompile the library to its `dist` folder.
3.  If the Next.js website (`yarn dev:website`) is running concurrently, it should automatically pick up the changes from the rebuilt library due to workspace linking and module resolution. You might need to refresh your browser to see the updates.

### Building
- **To build both the library and the website:**
  ```bash
  yarn build
  ```
  (This runs `yarn build:slide-deck` then `yarn build:website`)

- **To build only the `@kuidjamarco/slide-deck` library:**
  ```bash
  yarn build:slide-deck
  # or directly:
  yarn workspace @kuidjamarco/slide-deck build
  ```

- **To build only the `@kdmarc/website` application:**
  ```bash
  yarn build:website
  # or directly:
  yarn workspace @kdmarc/website build
  ```

## Using the `@kuidjamarco/slide-deck` Library (as a consumer)

This section details how to use the `@kuidjamarco/slide-deck` library in your own React project.

### Installation
To install the published package from npm:
```bash
npm install @kuidjamarco/slide-deck
# or using yarn:
yarn add @kuidjamarco/slide-deck
```
Ensure your project is set up with React, ReactDOM, and Tailwind CSS, as these are peer or direct dependencies and expectations for styling.

### Basic Usage
Import and use the `SlideDeck` component:
```tsx
import React from 'react';
import SlideDeck from '@kuidjamarco/slide-deck';
// Ensure your project's global CSS includes Tailwind directives (e.g., in your main CSS file):
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

const slidesData = [
  ['# Welcome to My Presentation'],
  ['## Slide 1 Topic', 'Details about topic 1...'],
  ['## Slide 2 Topic', 'Details about topic 2...'],
  ['### Sub-slide 2.1', 'More details for slide 2.']
];

function MyApp() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}> {/* Example container */}
      <SlideDeck slides={slidesData} />
    </div>
  );
}

export default MyApp;
```

### Props for `@kuidjamarco/slide-deck`
| Prop Name | Type         | Default | Description                                      |
|-----------|--------------|---------|--------------------------------------------------|
| `slides`  | `string[][]` | `[]`    | Array of slides. Each inner array represents a horizontal slide group, and strings within are vertical slides (Markdown content). |

### Features of `@kuidjamarco/slide-deck`
- **Markdown Support**: Write slides using Markdown.
- **Horizontal & Vertical Navigation**: Navigate using arrow keys or on-screen buttons.
- **Lazy Loading**: Horizontal slides are lazy-loaded for better performance.
- **Smooth Transitions**: CSS-driven smooth scrolling between slides.
- **Progress Bar**: Visual indicator of presentation progress.
- **Enhanced Slide Overview**: Drawer (toggle with 'O' key) with clickable slide previews.

### Keyboard Shortcuts for `@kuidjamarco/slide-deck`
- **Left Arrow (◀︎)**: Previous horizontal slide.
- **Right Arrow (▶︎)**: Next horizontal slide.
- **Up Arrow (▲)**: Previous vertical slide (within a horizontal group).
- **Down Arrow (▼)**: Next vertical slide (within a horizontal group).
- **'O' or 'o'**: Toggle slide overview drawer.
- **Escape**: Close slide overview drawer.

## Deployment

### `@kdmarc/website` to Vercel
The `@kdmarc/website` Next.js application (in `packages/website`) is best deployed to Vercel.
Configure your Vercel project with the following settings:
- **Framework Preset:** Next.js (auto-detected).
- **Root Directory:** `packages/website`.
- **Build Command:** Auto-detected (uses `yarn build` from `packages/website/package.json`).
- **Output Directory:** Auto-detected (`.next`).
- **Install Command:** `yarn install` (auto-detected due to `yarn.lock`).

### `@kuidjamarco/slide-deck` to npm
The `@kuidjamarco/slide-deck` library is automatically published to the npm registry when a new release is created on GitHub. This process is managed by the GitHub Actions workflow in `.github/workflows/publish-npm.yml`.

For maintainers: To enable automated publishing, an `NPM_TOKEN` secret with appropriate permissions to publish the `@kuidjamarco/slide-deck` package must be configured in the GitHub repository settings.

## License
MIT License. See individual package licenses if they differ (currently, assumed root license applies).
This monorepo itself does not have a root `LICENSE` file yet, but `@kuidjamarco/slide-deck` implies MIT from its `package.json`. Consider adding a root `LICENSE` file for the workspace.
