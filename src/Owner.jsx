import React, { useState } from "react";

function OwnerArrow() {
  return (
    <svg className="link-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  );
}

function OwnerPage() {
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
          </nav>
          <a className="header-cta" href="/#contact">Start a project <OwnerArrow /></a>
        </div>
      </header>

      <main className="owner-page">
        <section className="section-wrap owner-intro">
          <p className="section-kicker">THE PERSON BEHIND RAPPID ROCXX <span>01 — 03</span></p>
          <div className="owner-intro-grid">
            <div>
              <p className="owner-eyebrow">FOUNDER & PROPRIETOR</p>
              <h1>Venu Prasaath<br /><em>Rajendran.</em></h1>
            </div>
            <div className="owner-summary">
              <p>
                Rappid RocxX is an independent technology and creative media
                company founded and owned by Venu Prasaath Rajendran.
              </p>
              <p>
                Based in Gobichettipalayam, Tamil Nadu, the company brings
                software development, design and digital media together to
                help businesses grow.
              </p>
              <a className="underlined-link" href="mailto:rappidrocxx@gmail.com">
                Get in touch <OwnerArrow />
              </a>
            </div>
          </div>
          <figure className="owner-portrait">
            <img
              src="/owner-info.jpg"
              alt="Venu Prasaath Rajendran, founder and proprietor of Rappid RocxX"
              fetchPriority="high"
            />
          </figure>
          <div className="owner-facts">
            <span>FOUNDER <strong>Venu Prasaath Rajendran</strong></span>
            <span>ESTABLISHED <strong>1 August 2026</strong></span>
            <span>BASED IN <strong>Gobichettipalayam, Tamil Nadu, India</strong></span>
          </div>
        </section>

        <section className="section-wrap owner-contact">
          <p>Have an idea in mind?</p>
          <a className="pill-button pill-dark" href="mailto:rappidrocxx@gmail.com">
            Let’s talk <OwnerArrow />
          </a>
          <a className="owner-home-link" href="/">Back to Rappid RocxX <OwnerArrow /></a>
        </section>
      </main>
    </>
  );
}

export default OwnerPage;
