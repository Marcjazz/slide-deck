import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import 'tailwindcss/tailwind.css'
import SlideDeck from './SlideDeck'

type DrawerProps = {
  slides: string[][]
}

const SlideDeckDrawer: React.FC<DrawerProps> = ({ slides }) => {
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
        <SlideDeck slides={slides} />
      </div>
      <div className="drawer-side overflow-scroll">
        <label
          htmlFor="slide-overview-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-90 flex min-h-full gap-4 bg-base-200 p-4 text-base-content">
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col gap-4 text-xl">
                {slide.map((content, vIndex) => (
                  <div
                    key={vIndex}
                    className="card h-52 w-72 border border-base-content text-center"
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
    </div>
  )
}

export default SlideDeckDrawer
