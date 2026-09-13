import './App.css'

function App() {
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
            <p>MaNyawuza, Faku, Mangoloti - Sthandwa sam I love you. Benikucela sthandwa sam to be mine and mine alone, ube yi themba lam, umaqondana wam. My last mjolo-relationship.</p>

            <p>Thank you for respecting and loving me</p>
        </div>

        <figure className="photo-frame">
          <img src="/Ayakha_and_TK_together_firstdate.jpg" alt="Thokozani and Ayakha on their first date" className="couple-image" />
          <figcaption className="photo-caption">their first date</figcaption>
        </figure>
      </section>
    </main>
  )
}

export default App
