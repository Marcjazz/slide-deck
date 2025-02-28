import React from 'react'
import ReactMarkdown from 'react-markdown'
import SlideDeskControlPanel from './SlideDeckControlPanel'

type SlideDeckProps = {
  slides: string[][]
}

const SlideDeck: React.FC<SlideDeckProps> = ({ slides }) => {
  return (
    <div
      id="slide-parent"
      className="carousel h-full w-full overflow-hidden rounded-box"
    >
      {slides.map((slide, index) => (
        <div id={`slide${index}`} key={index} className="carousel-item w-full">
          <div className="carousel-vertical carousel h-full w-full overflow-hidden rounded-box">
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
      ))}
      <SlideDeskControlPanel slides={slides} />
    </div>
  )
}

export default SlideDeck
