import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SlideDeck from './SlideDeck'
import ProgressBar from './ProgressBar' // Import ProgressBar
import './styles.css'

type DrawerProps = {
  slides: string[][]
}

const SlideDeckDrawer: React.FC<DrawerProps> = ({ slides }) => {
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

    const targetSlide = document.getElementById(`slide${hIndex}.${vIndex}`)
    const horizontalContainer = document.getElementById(`slide${hIndex}`)
    const mainCarousel = document.getElementById('slide-parent')

    if (targetSlide && horizontalContainer && mainCarousel) {
      mainCarousel.scrollLeft = horizontalContainer.offsetLeft
      const verticalCarousel = horizontalContainer.querySelector(
        '.carousel-vertical'
      ) as HTMLElement
      if (verticalCarousel) {
        verticalCarousel.scrollTop = targetSlide.offsetTop
      }
    }
  }

  const slideUp = () => {
    if (verticalIndex > 0) {
      navigateTo(horizontalIndex, verticalIndex - 1)
    }
  }

  const slideDown = () => {
    if (
      slides && // Add null check for slides
      slides[horizontalIndex] &&
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
    <div className="drawer h-full w-full">
      <input
        id="slide-overview-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <SlideDeck
          slides={slides}
          horizontalIndex={horizontalIndex}
          verticalIndex={verticalIndex}
          slideUp={slideUp}
          slideDown={slideDown}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
      </div>
      <div className="drawer-side overflow-scroll">
        <label
          htmlFor="slide-overview-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-90 flex min-h-full gap-4 bg-base-200 p-4 text-base-content">
          {slides && // Add null check for slides
            slides.map((slide, hIndex) => (
              <div key={hIndex}>
                <div className="flex flex-col gap-4 text-xl">
                {slide.map((content, vIndex) => (
                  <div
                    key={vIndex}
                    className="card h-52 w-72 cursor-pointer border border-base-content text-center hover:border-primary"
                    onClick={() => {
                      navigateTo(hIndex, vIndex)
                      const drawerCheckbox = document.getElementById(
                        'slide-overview-drawer'
                      ) as HTMLInputElement
                      if (drawerCheckbox) {
                        drawerCheckbox.checked = false
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
