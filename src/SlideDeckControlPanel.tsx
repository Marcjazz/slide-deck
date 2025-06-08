import { useEffect } from 'react'

type SlideDeckControlPanelProps = {
  slides: string[][]
  horizontalIndex: number
  verticalIndex: number
  slideUp: () => void
  slideDown: () => void
  slideLeft: () => void
  slideRight: () => void
}

const SlideDeckControlPanel: React.FC<SlideDeckControlPanelProps> = ({
  slides,
  horizontalIndex,
  verticalIndex,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // We need to prevent default for arrow keys to prevent scrolling the page
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault()
      }

      switch (event.key) {
        case 'ArrowUp':
          slideUp()
          break
        case 'ArrowDown':
          slideDown()
          break
        case 'ArrowLeft':
          slideLeft()
          break
        case 'ArrowRight':
          slideRight()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [slideUp, slideDown, slideLeft, slideRight])

  const currentHorizontalSlide = slides && slides[horizontalIndex]
  const isLastVertical =
    currentHorizontalSlide &&
    verticalIndex === currentHorizontalSlide.length - 1
  const isFirstVertical = verticalIndex === 0
  const isFirstHorizontal = horizontalIndex === 0
  const isLastHorizontal = slides && horizontalIndex === slides.length - 1

  // Fallback if slides are not yet loaded or empty, though parent should prevent this.
  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <a
        className={`flex w-full justify-center`}
        onClick={(e) => {
          e.preventDefault()
          slideUp()
        }}
      >
        <kbd
          className={`kbd btn h-fit ${
            isLastVertical || !currentHorizontalSlide ? 'btn-disabled' : ''
          }`}
        >
          ▲
        </kbd>
      </a>
      <div className="flex w-full justify-center gap-4">
        <a
          onClick={(e) => {
            e.preventDefault()
            slideLeft()
          }}
        >
          <kbd
            className={`kbd btn h-fit ${
              isFirstHorizontal ? 'btn-disabled' : ''
            }`}
          >
            ◀︎
          </kbd>
        </a>
        <label htmlFor="slide-overview-drawer">
          <kbd className="kbd">O</kbd>
        </label>
        <a
          onClick={(e) => {
            e.preventDefault()
            slideRight()
          }}
        >
          <kbd
            className={`kbd btn h-fit ${
              isLastHorizontal ? 'btn-disabled' : ''
            }`}
          >
            ▶︎
          </kbd>
        </a>
      </div>
      <a
        className={`flex w-full justify-center`}
        onClick={(e) => {
          e.preventDefault()
          slideDown()
        }}
      >
        <kbd
          className={`kbd btn h-fit ${
            isFirstVertical || !currentHorizontalSlide ? 'btn-disabled' : ''
          }`}
        >
          ▼
        </kbd>
      </a>
    </div>
  )
}

export default SlideDeckControlPanel
