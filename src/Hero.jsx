import { useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bgoverlay">
      <div className={`container ${isOpen ? 'open' : ''}`}>
        <span className="ico" onClick={() => setIsOpen(true)}>
          <span className="ico2"></span>
          <span className="title">Click Me</span>
        </span>

        <div className="endtext">
          <span
            className="close"
            title="Restart"
            onClick={() => setIsOpen(false)}
            aria-label="Restart"
          >
            ×
          </span>
          <h1>I love you baby</h1>
          <h2>Nyawuza,Faku, Thahla-ka-Ndayeni</h2>
          <h3>~Thokozani</h3>
        </div>
      </div>
    </div>
  )
}
