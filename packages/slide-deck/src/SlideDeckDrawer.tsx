'use client';

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SlideDeck from './SlideDeck'
import ProgressBar from './ProgressBar' // Import ProgressBar

type DrawerProps = {
  slides: string[][]
  theme?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const SlideDeckDrawer: React.FC<DrawerProps> = ({ slides, theme = 'winter', textAlign }) => {
  if (!slides || slides.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p>No slides to display.</p>
      </div>
    )
  }

  const [horizontalIndex, setHorizontalIndex] = useState(0)
  const [verticalIndex, setVerticalIndex] = useState(0)

  const navigateTo = (hIndex: number, vIndex: number) => {
    setHorizontalIndex(hIndex)
    setVerticalIndex(vIndex)
    // DOM scrolling logic is REMOVED from here
  }

  // useEffect for handling scrolling AFTER state update and re-render
  useEffect(() => {
    // Only scroll if slides are present to avoid errors during initial render or empty states
    // This check is already at the top of the component, but good for safety within effect too.
    if (!slides || slides.length === 0) {
      return
    }

    const targetSlide = document.getElementById(
      `slide${horizontalIndex}.${verticalIndex}`
    )
    const horizontalSlideContainer = document.getElementById(
      `slide${horizontalIndex}`
    )
    const mainCarousel = document.getElementById('slide-parent')

    if (!targetSlide || !horizontalSlideContainer || !mainCarousel) {
      console.warn(
        `Navigation failed: Could not find required DOM elements for slide ${horizontalIndex}.${verticalIndex}`
      )
      return
    }

    try {
      mainCarousel.scrollLeft = horizontalSlideContainer.offsetLeft
      const verticalCarousel = horizontalSlideContainer.querySelector(
        '.carousel-vertical'
      ) as HTMLElement
      if (verticalCarousel) {
        verticalCarousel.scrollTop = targetSlide.offsetTop
      }
    } catch (error) {
      console.error('Error during slide scrolling:', error)
    }
  }, [horizontalIndex, verticalIndex, slides]) // Added 'slides' to dependency array

  const slideUp = () => {
    if (verticalIndex > 0) {
      navigateTo(horizontalIndex, verticalIndex - 1)
    }
  }

  const slideDown = () => {
    if (
      slides?.[horizontalIndex] && // Applied optional chaining
      verticalIndex < slides[horizontalIndex].length - 1
    ) {
      navigateTo(horizontalIndex, verticalIndex + 1)
    }
  }

  const slideLeft = () => {
    if (horizontalIndex > 0) {
      navigateTo(horizontalIndex - 1, 0) // Reset vertical index when changing horizontal slide
    }
  }

  const slideRight = () => {
    if (slides && horizontalIndex < slides.length - 1) { // Add null check for slides
      navigateTo(horizontalIndex + 1, 0) // Reset vertical index when changing horizontal slide
    }
  }

  useEffect(() => {
    const toggleDrawer = (event: KeyboardEvent) => {
      const drawerCheckbox = document.getElementById(
        'slide-overview-drawer'
      ) as HTMLInputElement

      if (event.key === 'o' || event.key === 'O') {
        if (drawerCheckbox) {
          drawerCheckbox.checked = !drawerCheckbox.checked
        }
      }

      if (event.key === 'Escape') {
        if (drawerCheckbox) {
          drawerCheckbox.checked = false
        }
      }
    }

    window.addEventListener('keydown', toggleDrawer)
    return () => {
      window.removeEventListener('keydown', toggleDrawer)
    }
  }, [])

  return (
    <div className="drawer h-full w-full" data-theme={theme}>
      <input
        id="slide-overview-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content relative"> {/* Added relative positioning */}
        <SlideDeck
          slides={slides}
          horizontalIndex={horizontalIndex}
          verticalIndex={verticalIndex}
          slideUp={slideUp}
          slideDown={slideDown}
          slideLeft={slideLeft}
          slideRight={slideRight}
          textAlign={textAlign}
        />
      </div>
      <div className="drawer-side overflow-scroll">
        <label
          htmlFor="slide-overview-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-90 flex min-h-full gap-4 bg-base-200 p-4 text-base-content">
          {slides?.map((slide, hIndex) => ( // Applied optional chaining
            <div key={hIndex}>
              <div className="flex flex-col gap-4 text-xl">
                {slide.map((content, vIndex) => (
                  <div
                    key={vIndex}
                    className="card h-52 w-72 cursor-pointer border border-base-content text-center hover:border-primary"
                    onClick={() => {
                      try {
                        navigateTo(hIndex, vIndex)
                        const drawerCheckbox = document.getElementById(
                          'slide-overview-drawer'
                        ) as HTMLInputElement
                        if (drawerCheckbox) {
                          drawerCheckbox.checked = false
                        }
                      } catch (error) {
                        console.error(
                          'Failed to navigate from drawer or close drawer:',
                          error
                        )
                      }
                    }}
                  >
                    <div className="card-body">
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProgressBar
        currentHorizontalIndex={horizontalIndex}
        totalHorizontalSlides={slides.length}
      />
    </div>
  )
}

export default SlideDeckDrawer
