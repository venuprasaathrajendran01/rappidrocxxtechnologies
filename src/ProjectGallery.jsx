import React, { useState } from "react";

const projects = [
  {
    src: "/project-gallery/promodeka-photography.jpg",
    alt: "Photography and videography promotional poster",
    title: "Photography & Videography",
    category: "PHOTOGRAPHY & VIDEOGRAPHY",
  },
  {
    src: "/project-gallery/year-end-promo-offer.jpg",
    alt: "Year-end videography promotion artwork",
    title: "Year-End Promo",
    category: "PROMOTIONAL CAMPAIGN",
  },
  {
    src: "/project-gallery/wedding-videography-package.jpg",
    alt: "Wedding videography package details from the year-end promotion",
    title: "Wedding Videography",
    category: "VIDEO PRODUCTION",
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

function ProjectGalleryPage() {
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
          <p className="section-kicker">SELECTED PROJECTS <span>01 — 03</span></p>
          <div className="project-gallery-intro-grid">
            <div>
              <p className="project-gallery-eyebrow">OUR WORK</p>
              <h1>Made to<br /><em>make a mark.</em></h1>
            </div>
            <p className="project-gallery-intro-copy">
              A selection of photography, videography and promotional work
              from our creative projects.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="section-wrap project-gallery-grid">
            {projects.map((project, index) => (
              <article className="project-gallery-card" key={project.src}>
                <div className="project-gallery-image">
                  <img
                    src={project.src}
                    alt={project.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="project-gallery-card-copy">
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap project-gallery-cta">
          <p>Have a project in mind?</p>
          <a className="pill-button pill-dark" href="/#contact">Let’s talk <Arrow diagonal /></a>
          <a className="underlined-link" href="/">Back to Rappid RocxX <Arrow /></a>
        </section>
      </main>
    </>
  );
}

export default ProjectGalleryPage;
