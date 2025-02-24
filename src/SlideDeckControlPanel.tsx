import { useEffect, useState } from 'react'

type SlideDeckControlPanelProps = {
  slides: string[][]
}

const SlideDeskControlPanel: React.FC<SlideDeckControlPanelProps> = ({
  slides,
}) => {
  const [verticalIndex, setVerticalIndex] = useState<number>(0)
  const [horizontalIndex, setHorizontalIndex] = useState<number>(0)

  const slideUp = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent
  ) => {
    e.preventDefault()

    if (verticalIndex > 0) {
      location.href = `#slide${horizontalIndex}.${verticalIndex - 1}`
      setVerticalIndex((index) => index - 1)
    }
  }

  const slideDown = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent
  ) => {
    e.preventDefault()

    if (verticalIndex < slides[horizontalIndex].length - 1) {
      location.href = `#slide${horizontalIndex}.${verticalIndex + 1}`
      setVerticalIndex((index) => index + 1)
    }
  }

  const slideLeft = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent
  ) => {
    e.preventDefault()

    if (horizontalIndex > 0) {
      location.href = `#slide${horizontalIndex - 1}.0`
      setHorizontalIndex((index) => index - 1)
      setVerticalIndex(0)
    }
  }

  const slideRight = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | KeyboardEvent
  ) => {
    e.preventDefault()

    if (horizontalIndex < slides.length - 1) {
      location.href = `#slide${horizontalIndex + 1}.0`
      setHorizontalIndex((index) => index + 1)
      setVerticalIndex(0)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          slideUp(event)
          break
        case 'ArrowDown':
          slideDown(event)
          break
        case 'ArrowLeft':
          slideLeft(event)
          break
        case 'ArrowRight':
          slideRight(event)
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [horizontalIndex, verticalIndex, slides])

  return (
    <div className='absolute bottom-4 right-4'>
      <a className={`flex w-full justify-center`} onClick={slideUp}>
        <kbd
          className={`kbd btn h-fit ${
            verticalIndex == slides[horizontalIndex].length - 1
              ? 'btn-disabled'
              : ''
          }`}
        >
          ▲
        </kbd>
      </a>
      <div className='flex w-full justify-center gap-12'>
        <a onClick={slideLeft}>
          <kbd
            className={`kbd btn h-fit ${
              horizontalIndex == 0 ? 'btn-disabled' : ''
            }`}
          >
            ◀︎
          </kbd>
        </a>
        <a onClick={slideRight}>
          <kbd
            className={`kbd btn h-fit ${
              horizontalIndex == slides.length - 1 ? 'btn-disabled' : ''
            }`}
          >
            ▶︎
          </kbd>
        </a>
      </div>
      <a className={`flex w-full justify-center`} onClick={slideDown}>
        <kbd
          className={`kbd btn h-fit ${
            verticalIndex == 0 ? 'btn-disabled' : ''
          }`}
        >
          ▼
        </kbd>
      </a>
    </div>
  )
}

export default SlideDeskControlPanel
