'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import SlideDeckControlPanel from './SlideDeckControlPanel'

type SlideDeckProps = {
  slides: string[][]
  horizontalIndex: number
  verticalIndex: number
  slideUp: () => void
  slideDown: () => void
  slideLeft: () => void
  slideRight: () => void
}

const SlideDeck: React.FC<SlideDeckProps> = ({
  slides,
  horizontalIndex,
  verticalIndex,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
}) => {
  if (!slides || slides.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p>No slides available (from SlideDeck).</p>
      </div>
    )
  }

  const startIndex = Math.max(0, horizontalIndex - 1)
  const endIndex = Math.min(slides.length - 1, horizontalIndex + 1)

  return (
    <div
      id="slide-parent"
      className="carousel h-full w-full overflow-hidden scroll-smooth rounded-box"
    >
      {slides.map((slide, index) => {
        if (index >= startIndex && index <= endIndex) {
          return (
            <div
              id={`slide${index}`}
              key={index}
              className="carousel-item w-full"
            >
              <div className="carousel-vertical carousel h-full w-full overflow-hidden scroll-smooth rounded-box">
                {slide.map((content, vIndex) => (
                  <div
                    id={`slide${index}.${vIndex}`}
                    key={vIndex}
                    className="carousel-item h-full items-center"
                  >
                    <div className="w-full text-center">
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }
        return null
      })}
      <SlideDeckControlPanel
        slides={slides}
        horizontalIndex={horizontalIndex}
        verticalIndex={verticalIndex}
        slideUp={slideUp}
        slideDown={slideDown}
        slideLeft={slideLeft}
        slideRight={slideRight}
      />
    </div>
  )
}

export default SlideDeck
