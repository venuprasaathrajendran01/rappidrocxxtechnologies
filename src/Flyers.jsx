import React, { useState } from "react";

const flyerGroups = [
  {
    title: "Portfolio",
    category: "PORTFOLIO",
    posters: [
      {
        src: "/flyers/portfolio/pfl-2.jpg",
        alt: "Portfolio flyer design",
        title: "Portfolio Flyer",
      },
      {
        src: "/flyers/portfolio/portfolio.jpg",
        alt: "Portfolio promotional poster",
        title: "Portfolio Poster",
      },
    ],
  },
  {
    title: "Startup & Corporate Businesses",
    category: "STARTUP & CORPORATE BUSINESSES",
    posters: [
      {
        src: "/flyers/startup-corporate-businesses/fly-1.jpg",
        alt: "Startup and corporate business flyer design",
        title: "Business Flyer 01",
      },
      {
        src: "/flyers/startup-corporate-businesses/scb-fly-2.jpg",
        alt: "Startup and corporate business flyer design",
        title: "Business Flyer 02",
      },
      {
        src: "/flyers/startup-corporate-businesses/scb-fly-3.jpg",
        alt: "Startup and corporate business flyer design",
        title: "Business Flyer 03",
      },
      {
        src: "/flyers/startup-corporate-businesses/srb-fly-4.jpg",
        alt: "Startup and corporate business flyer design",
        title: "Business Flyer 04",
      },
      {
        src: "/flyers/startup-corporate-businesses/srb-fly-5.jpg",
        alt: "Startup and corporate business flyer design",
        title: "Business Flyer 05",
      },
    ],
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg className="link-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function FlyersPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Rappid RocxX home">
            <img className="brand-logo" src="/brand-logo.png" alt="" />
            <span className="brand-lockup">
              <span className="brand-wordmark">Rappid RocxX</span>
              <span className="brand-subtitle">Technologies</span>
            </span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="/#about" onClick={closeMenu}>About us</a>
            <a href="/#services" onClick={closeMenu}>Services</a>
            <a href="/#work" onClick={closeMenu}>Our clients</a>
            <a href="/#approach" onClick={closeMenu}>Our approach</a>
            <a href="/owner.html" onClick={closeMenu}>Owner information</a>
            <a href="/certifications.html" onClick={closeMenu}>Registrations &amp; Certifications</a>
            <a href="/payments.html" onClick={closeMenu}>Payments &amp; Options</a>
            <a href="/project-gallery.html" onClick={closeMenu}>Project Gallery</a>
            <a href="/flyers.html" onClick={closeMenu}>Flyers</a>
          </nav>
          <a className="header-cta" href="/#contact">Start a project <Arrow diagonal /></a>
        </div>
      </header>

      <main className="project-gallery-page">
        <section className="section-wrap project-gallery-intro">
          <div className="project-gallery-intro-grid">
            <div>
              <h1>Ideas made<br /><em>visible.</em></h1>
            </div>
            <p className="project-gallery-intro-copy">
              Explore our flyers for portfolios, startups and corporate
              businesses.
            </p>
          </div>
        </section>

        {flyerGroups.map((group) => (
          <section className="project-gallery-section" key={group.title}>
            <div className="section-wrap">
              <div className="service-detail-heading">
                <div>
                  <p className="section-kicker">{group.category}</p>
                  <h2>{group.title}</h2>
                </div>
              </div>
              <div className="project-gallery-grid">
                {group.posters.map((poster, index) => (
                  <article className="project-gallery-card" key={poster.src}>
                    <div className="project-gallery-image">
                      <img
                        src={poster.src}
                        alt={poster.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="project-gallery-card-copy">
                      <span>{group.category}</span>
                      <h2>{poster.title}</h2>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section-wrap project-gallery-cta">
          <p>Have a project in mind?</p>
          <a className="pill-button pill-dark" href="/#contact">Let’s talk <Arrow diagonal /></a>
          <a className="underlined-link" href="/#services">Back to services <Arrow /></a>
        </section>
      </main>
    </>
  );
}

export default FlyersPage;
