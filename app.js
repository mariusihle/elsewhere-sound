// app.js
const { useState } = React;

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosingPage, setIsClosingPage] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    setIsClosingPage(false);
  };

  // Close from content page: cross-fade to menu, background stays
  const closeContentPage = () => {
    if (isClosingPage) return;
    setIsClosingPage(true);

    // Show menu underneath while fading out the content overlay
    setMenuOpen(true);

    setTimeout(() => {
      setIsClosingPage(false);
      setCurrentPage("home");
      // menuOpen stays true
    }, 1000); // must match CSS fade-out
  };

  const isHomeMainVisible = currentPage === "home" && !menuOpen;

  return (
    <div className="app">
      {/* HOME PAGE */}
      {currentPage === "home" && (
        <div className="home-page">
          <button
            className={`hamburger-menu ${menuOpen ? "hidden" : ""}`}
            onClick={() => setMenuOpen(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      )}

      {/* MENU OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "open" : "closed"}`}
        onClick={() => menuOpen && setMenuOpen(false)}
      >
        <div
          className="menu-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile-only close button */}
          <button
            className="menu-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <h1>ElsewheRe</h1>

          <nav>
            <button onClick={() => navigateTo("about")}>ABOUT US</button>
            <button onClick={() => navigateTo("upload")}>
              UPLOAD YOUR MIX
            </button>
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

      {/* ABOUT US */}
      {currentPage === "about" && (
        <div className={`content-page ${isClosingPage ? "closing" : ""}`}>
          <button className="close-btn" onClick={closeContentPage}>
            ✕
          </button>

          {/* SCROLL CONTAINER */}
          <div className="content-inner">
            <div className="page-content">
              <h1>ABOUT US</h1>
              <p>
               Elsewhere is a borderless DJ collective built around warm and welcoming organic- and melodic deep house. 
               We surface narrative-driven mixes from artists worldwide and open small, dedicated 
               rooms where listeners can hear stories, find inspiration, and connect.
              </p>
              <p>
               Our sound isn’t tied to one place or one scene, it comes from 
               distant influences and are brought to us through stories, and by the artists who carries them.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* UPLOAD */}
      {currentPage === "upload" && (
        <div
          className={`content-page upload-page ${
            isClosingPage ? "closing" : ""
          }`}
        >
          <button className="close-btn" onClick={closeContentPage}>
            ✕
          </button>

          <div className="content-inner">
            <div className="page-content">
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
                      it's source. The only reason for this is that we need to
                      know that you can play on any equipment provided at an
                      event.
                    </li>
                    <li>Try to keep your mix between 90 - 120 minutes.</li>
                    <li>Record in .wav if possible.</li>
                    <li>
                      Some keywords to keep in mind: Story driven, warm, deep,
                      groovy, beautiful, organic, real.
                    </li>
                  </ul>
                  <p>
                    Some keywords to keep in mind: Story driven, warm, deep,
                    groovy, beautiful, organic, real.
                  </p>
                </div>

                <div className="upload-form">
                  <form action="https://formspree.io/f/mzzwdyye" method="POST">
                    <input
                      name="artist"
                      type="text"
                      placeholder="DJ / Artist Name"
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      name="mix_url"
                      type="url"
                      placeholder="Mix URL"
                      required
                    />
                    <input
                      name="location"
                      type="text"
                      placeholder="Where do you live?"
                    />
                    <textarea
                      name="notes"
                      placeholder="Notes about your mix..."
                    ></textarea>
                    <button type="submit">SUBMIT</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MIXED SERIES */}
      {currentPage === "mixed-series" && (
        <div className={`content-page ${isClosingPage ? "closing" : ""}`}>
          <button className="close-btn" onClick={closeContentPage}>
            ✕
          </button>

          <div className="content-inner">
            <div className="page-content">
              <h1>ELSEWHERE MIXED SERIES</h1>
              <p>Welcome to the Elsewhere mixed series.</p>
              <p>
                As the world grows more connected, the music scene gets more
                saturated, and it's getting harder to find high quality
                performers. We want to present narratives from all across the
                globe, and give musical storytellers a platform to tell their
                tales.
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
        </div>
      )}

      {/* EVENTS */}
      {currentPage === "events" && (
        <div className={`content-page ${isClosingPage ? "closing" : ""}`}>
          <button className="close-btn" onClick={closeContentPage}>
            ✕
          </button>

          <div className="content-inner">
            <div className="page-content">
              <h1>EVENTS</h1>
              <p>We're currently collecting stories...</p>
            </div>
          </div>
        </div>
      )}

      {/* ARTISTS */}
      {currentPage === "artists" && (
        <div className={`content-page ${isClosingPage ? "closing" : ""}`}>
          <button className="close-btn" onClick={closeContentPage}>
            ✕
          </button>

          <div className="content-inner">
            <div className="page-content">
              <h1>ARTISTS</h1>
              <p>We're currently collecting stories...</p>
            </div>
          </div>
        </div>
      )}

      {/* VENUES */}
      {currentPage === "venues" && (
        <div className={`content-page ${isClosingPage ? "closing" : ""}`}>
          <button className="close-btn" onClick={closeContentPage}>
            ✕
          </button>

          <div className="content-inner">
            <div className="page-content">
              <h1>VENUES</h1>
              <p>SHACK15 | San Francisco</p>
            </div>
          </div>
        </div>
      )}

      {/* Kokopelli transparent logo */}
      <div
        className={
          "kokopelli-fixed-logo " +
          (isHomeMainVisible ? "state-home-open" : "state-other")
        }
      >
        <img src="Kokopellitransparent.png" alt="Elsewhere" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
