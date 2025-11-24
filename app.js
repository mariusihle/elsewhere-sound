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
            <p>
              Our goal is to surface high-level, narrative-driven mixes from DJs
              around the world and give them a platform to present their stories
              and build communities.
            </p>
            <p>
              We work with high performing artists from across the world, and
              together we want to open intimate rooms to present narrative
              driven performances. These rooms will be a place for enjoyment,
              for great listening experiences, for musical inspiration and for
              new friends to meet and build communities.
            </p>
            <p>
              We chose the name Elsewhere because nothing we do is confined to
              one place, one scene, or one lineage. Our sound doesn't come from
              any local circuit - it comes from elsewhere. From distant
              influences, foreign cultures, and from artists whose work deserves
              a wider horizon.
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
              <p>
                Before you upload your mix, there's a few things you should
                know:
              </p>

              <ul>
                <li>
                  We don't discriminate, we only care about quality and
                  storytelling.
                </li>
                <li>We don't care about how many followers you have.</li>
                <li>
                  You can record on any equipment that uses a thumb drive as
                  it's source. The only reason for this is that we need to know
                  that you can play on any equipment provided at an event.
                </li>
                <li>Try to keep your mix between 90 - 120 minutes.</li>
                <li>Record in .wav if possible.</li>
                <li>
                  Some keywords to keep in mind: Story driven, warm, deep,
                  groovy, beautiful, organic, real.
                </li>
              </ul>

              <p>
                Some keywords to keep in mind: Story driven, warm, deep, groovy,
                beautiful, organic, real.
              </p>
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
            <p>Welcome to the Elsewhere mixed series.</p>
            <p>
              As the world grows more connected, the music scene gets more
              saturated, and it's getting harder to find high quality
              performers.
            </p>
            <p>
              The goal is to connect with small intimate venues with quality
              sound systems all over the world, and use our mixed series to
              qualify DJs for those spaces.
            </p>
            <p>
              Our network of producers and DJs has grown big over the years, so
              finding a venue near you should be possible if we feel like your
              mix has the sound we're looking for.
            </p>
            <p>
              Please enjoy these wonderful stories, and hopefully, one day,
              we'll be gathering in a city near you.
            </p>
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
