// app.js
const { useState } = React;

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const goHome = () => {
    setCurrentPage("home");
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Home Page */}
      {currentPage === "home" && (
        <div className="home-page">
          <button className="hamburger-menu" onClick={() => setMenuOpen(true)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      )}

      {/* Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div
            className="menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>ElsewheRe</h1>

            <nav>
              <button onClick={() => navigateTo("about")}>ABOUT US</button>
              <button onClick={() => navigateTo("upload")}>UPLOAD</button>
              <button onClick={() => navigateTo("mixed-series")}>
                MIXED SERIES
              </button>
              <button onClick={() => navigateTo("events")}>EVENTS</button>
              <button onClick={() => navigateTo("artists")}>ARTISTS</button>
              <button onClick={() => navigateTo("venues")}>VENUES</button>
            </nav>

            <div className="menu-logo-icon">
              <img src="Kokopelli.svg" alt="Kokopelli" />
            </div>
          </div>
        </div>
      )}

      {/* ABOUT US */}
      {currentPage === "about" && (
        <div className="content-page">
          <button className="close-btn" onClick={goHome}>✕</button>
          <div className="page-content">
            <h1>ABOUT US</h1>
            <p>
              We're a borderless DJ collective built around organic- and melodic
              house music.
            </p>
            <p>Our goal is simple:</p>
            <p>
              Surface high-level, narrative-driven mixes from DJs around the
              world and give them a platform to present their stories and build
              communities.
            </p>
            <p>
              We work with high performing artists from across the world, and
              together we open intimate rooms to present music with intention.
            </p>
            <p>
              We chose the name Elsewhere because nothing we do is confined to
              one place or one lineage.
            </p>
          </div>
        </div>
      )}

      {/* UPLOAD */}
      {currentPage === "upload" && (
        <div className="content-page upload-page">
          <button className="close-btn" onClick={goHome}>✕</button>

          <div className="upload-layout">
            <div className="upload-text">
              <h1>UPLOAD YOUR MIX</h1>
              <p>Welcome, dear friend.</p>
              <p>Before you upload your mix, there's a few things you should know:</p>

              <ul>
                <li>We only care about quality and storytelling.</li>
                <li>We don't care about followers.</li>
                <li>You must be able to play on equipment using USB drives.</li>
                <li>Try to keep your mix between 90–120 minutes.</li>
                <li>Record in .wav if possible.</li>
              </ul>

              <p>Keywords: warm, deep, groovy, organic, story-driven.</p>
            </div>

            <div className="upload-form">
              <form action="https://formspree.io/f/mzzwdyye" method="POST">
                <input name="artist" type="text" placeholder="DJ / Artist Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <input name="mix_url" type="url" placeholder="Mix URL" required />
                <input name="location" type="text" placeholder="Where do you live?" />
                <textarea name="notes" placeholder="Notes about your mix..."></textarea>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MIXED SERIES */}
      {currentPage === "mixed-series" && (
        <div className="content-page">
          <button className="close-btn" onClick={goHome}>✕</button>
          <div className="page-content">
            <h1>ELSEWHERE MIXED SERIES</h1>
            <p>Welcome to our mixed series.</p>
            <p>We want to present narratives from all across the world.</p>
            <p>SoundCloud embeds coming soon.</p>
            <div className="soundcloud-container">
              <p>SoundCloud embeds coming soon...</p>
            </div>
          </div>
        </div>
      )}

      {/* EVENTS */}
      {currentPage === "events" && (
        <div className="content-page">
          <button className="close-btn" onClick={goHome}>✕</button>
          <div className="page-content">
            <h1>EVENTS</h1>
            <p>We're currently collecting stories...</p>
          </div>
        </div>
      )}

      {/* ARTISTS */}
      {currentPage === "artists" && (
        <div className="content-page">
          <button className="close-btn" onClick={goHome}>✕</button>
          <div className="page-content">
            <h1>ARTISTS</h1>
            <p>We're currently collecting stories...</p>
          </div>
        </div>
      )}

      {/* VENUES */}
      {currentPage === "venues" && (
        <div className="content-page">
          <button className="close-btn" onClick={goHome}>✕</button>
          <div className="page-content">
            <h1>VENUES</h1>
            <p>SHACK15 | San Francisco</p>
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
