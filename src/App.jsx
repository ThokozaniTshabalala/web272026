import { useState } from 'react'
import './App.css'

function App() {
  const [letterStage, setLetterStage] = useState(0)
  const hearts = [
    { className: 'heart heart1', style: { left: '6%', width: '16px', height: '16px', animationDelay: '0s', animationDuration: '2.2s' } },
    { className: 'heart heart2', style: { left: '14%', width: '26px', height: '26px', animationDelay: '0.1s', animationDuration: '2.4s' } },
    { className: 'heart heart3', style: { left: '24%', width: '18px', height: '18px', animationDelay: '0.2s', animationDuration: '2.1s' } },
    { className: 'heart heart4', style: { left: '34%', width: '34px', height: '34px', animationDelay: '0.15s', animationDuration: '2.5s' } },
    { className: 'heart heart5', style: { left: '44%', width: '14px', height: '14px', animationDelay: '0.05s', animationDuration: '2s' } },
    { className: 'heart heart6', style: { left: '54%', width: '22px', height: '22px', animationDelay: '0.18s', animationDuration: '2.3s' } },
    { className: 'heart heart7', style: { left: '64%', width: '30px', height: '30px', animationDelay: '0.08s', animationDuration: '2.4s' } },
    { className: 'heart heart8', style: { left: '74%', width: '17px', height: '17px', animationDelay: '0.22s', animationDuration: '2.1s' } },
    { className: 'heart heart9', style: { left: '84%', width: '24px', height: '24px', animationDelay: '0.12s', animationDuration: '2.35s' } },
    { className: 'heart heart10', style: { left: '92%', width: '15px', height: '15px', animationDelay: '0.03s', animationDuration: '2s' } },
  ]

  const handleLetterClick = () => {
    setLetterStage((currentStage) => Math.min(currentStage + 1, 2))
  }

  return (
    <main className="love-page">
      <section className="page page-one">
        <header className="topbar">
          <div className="topbar-side">true love</div>
          <div className="topbar-center">
            every love song <span className="accent">reminds</span> me <span className="accent">of</span> you
          </div>
          <div className="topbar-side">Ayakha</div>
        </header>

        <div className="stage">
          <div className="flourish">
            <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M40,80 C60,40 100,30 130,55 C150,72 140,95 115,90 C95,86 95,65 115,60 C140,54 170,70 160,95 C150,118 110,120 90,100" />
              <path d="M360,80 C340,40 300,30 270,55 C250,72 260,95 285,90 C305,86 305,65 285,60 C260,54 230,70 240,95 C250,118 290,120 310,100" />
              <path d="M130,55 C160,40 240,40 270,55" strokeWidth="0.8" opacity="0.7" />
            </svg>

            <div className="quote">
              Girl, i'm so in love
              <span className="quote-line">with You</span>
            </div>
          </div>
        </div>

        <footer className="bottombar">
          <span>true love notes</span>
          <span className="pagecount">01 / 02</span>
        </footer>
      </section>

      <section className="page page-two">
        <div className="heart-mark">❤</div>
        <h1 className="milestone">
          <span className="num">6</span> Months
        </h1>

        <div className="avatars-row">
          <figure className="avatar-frame">
            <img src="/Thokozani_image.jpg" alt="Thokozani profile" className="avatar-image" />
          </figure>

          <div className="days-count">
            <div className="heart-mark">❤</div>
            <div className="num">182</div>
            <div className="label">days</div>
          </div>

          <figure className="avatar-frame">
            <img src="/Ayakha_image.jpg" alt="Ayakha profile" className="avatar-image" />
          </figure>
        </div>

        <div className="names-row">
          <span>Thokozani</span>
          <span>Ayakha</span>
        </div>

        <div className="progress-wrap">
          <div className="progress-pct">50%</div>
          <div className="progress-track">
            <div className="progress-fill" />
            <div className="progress-handle" />
          </div>
        </div>

        <svg className="rings-deco" width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="17" cy="17" r="15" />
          <circle cx="17" cy="17" r="10" />
        </svg>

        <div className="script-line">Thokozani loves Ayakha</div>

        <div className="anniversary-copy">
            <p>MaNyawuza, Faku, Mangoloti - Sthandwa sam I love you. Bengikucela sthandwa sam to be mine and mine alone, ube yi themba lam, umaqondana wam. My last mjolo-relationship.</p>

            <p>Thank you for respecting and loving me</p>
        </div>

        <figure className="photo-frame">
          <img src="/Ayakha_and_TK_together_firstdate.jpg" alt="Thokozani and Ayakha on their first date" className="couple-image" />
          <figcaption className="photo-caption">our first date</figcaption>
        </figure>
      </section>

      <section className={`page page-three ${letterStage >= 2 ? 'reveal-active' : ''}`}>
        <div className="letter-stage">
          <button
            type="button"
            className={`letter-image ${letterStage >= 1 ? 'opened' : ''}`}
            onClick={handleLetterClick}
            aria-label="Open love letter"
          >
            <div className="animated-mail" aria-hidden="true">
              <div className="back-fold" />
              <div className="letter">
                <div className="letter-border" />
                <div className="letter-title" />
                <div className="letter-context" />
                <div className="letter-stamp">
                  <div className="letter-stamp-inner" />
                </div>
              </div>
              <div className="top-fold" />
              <div className="body" />
              <div className="left-fold" />
            </div>
          </button>

          <div className="letter-caption">tap twice to open</div>
        </div>

        <div className="love-message-overlay" aria-hidden={letterStage < 2}>
          <div className="love-message-content">
            <h2>I Love You!</h2>
            <p>Ayakha</p>
            {hearts.map((heart) => (
              <div key={heart.className} className={heart.className} style={heart.style} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
