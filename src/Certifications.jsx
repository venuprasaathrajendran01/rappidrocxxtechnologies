import React, { useEffect, useState } from "react";

const certificatePages = [
  {
    src: "/certifications/udyam-registration-page-1.jpg",
    alt: "First page of the Udyam Registration Certificate for RappidRocxx Technologies",
    title: "Udyam Registration Certificate",
    detail: "Official registration certificate",
  },
  {
    src: "/certifications/udyam-registration-page-2.jpg",
    alt: "Second page of the Udyam registration record, including classification details",
    title: "Registration details",
    detail: "Classification and certificate information",
  },
  {
    src: "/certifications/udyam-registration-page-3.jpg",
    alt: "Third page of the Udyam registration record with enterprise details",
    title: "Enterprise information",
    detail: "Business, ownership and enterprise details",
  },
  {
    src: "/certifications/udyam-registration-page-4.jpg",
    alt: "Fourth page of the Udyam registration record with enterprise address and classifications",
    title: "Business details",
    detail: "Official business address and activity classifications",
  },
  {
    src: "/certifications/udyam-registration-page-5.jpg",
    alt: "Final page of the Udyam registration record",
    title: "Registration record",
    detail: "Additional registration information",
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

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Rappid RocxX home">
      <img className="brand-logo" src="/brand-logo.png" alt="" />
      <span className="brand-lockup">
        <span className="brand-wordmark">Rappid RocxX</span>
        <span className="brand-subtitle">Technologies</span>
      </span>
    </a>
  );
}

function CertificationsPage() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (selectedPage === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPage(null);
      if (event.key === "ArrowRight") {
        setSelectedPage((current) => (current + 1) % certificatePages.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedPage((current) => (current - 1 + certificatePages.length) % certificatePages.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("certificate-lightbox-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("certificate-lightbox-open");
    };
  }, [selectedPage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
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
          <a className="header-cta" href="/#contact">Start a project <Arrow diagonal /></a>
        </div>
      </header>

      <main className="certification-page">
        <section className="section-wrap certification-intro">
          <p className="section-kicker">OFFICIAL COMPANY DOCUMENTATION <span>01 — 01</span></p>
          <div className="certification-intro-grid">
            <div>
              <p className="certification-eyebrow">REGISTERED. RECOGNISED. READY.</p>
              <h1>Credentials,<br /><em>with care.</em></h1>
            </div>
            <p className="certification-intro-copy">
              A closer look at the official registration behind Rappid RocxX.
              Explore the certificate and supporting pages of our company
              registration record.
            </p>
          </div>
        </section>

        <section className="certification-record-section">
          <div className="section-wrap certification-record">
            <div className="certificate-frame">
              <div className="certificate-frame-mat">
                <button
                  className="certificate-preview-button"
                  type="button"
                  onClick={() => setSelectedPage(0)}
                  aria-label="View Udyam Registration Certificate"
                >
                  <img
                    className="certificate-cover-image"
                    src={certificatePages[0].src}
                    alt={certificatePages[0].alt}
                    fetchPriority="high"
                  />
                  <span className="certificate-view-hint">VIEW CERTIFICATE <Arrow diagonal /></span>
                </button>
              </div>
              <div className="certificate-frame-caption">
                <span>GOVERNMENT OF INDIA</span>
                <span>UDYAM REGISTRATION</span>
              </div>
            </div>

            <div className="certificate-record-copy">
              <p className="section-kicker">COMPANY REGISTRATION</p>
              <h2>Udyam Registration<br /><em>Certificate.</em></h2>
              <p className="certificate-record-description">
                Official registration record for RAPPIDROCXX TECHNOLOGIES,
                issued through the Ministry of Micro, Small and Medium
                Enterprises, Government of India.
              </p>
              <div className="certificate-number">
                <span>UDYAM REGISTRATION NUMBER</span>
                <strong>UDYAM-TN-07-0151825</strong>
              </div>
              <button
                className="certificate-open-link"
                type="button"
                onClick={() => setSelectedPage(0)}
              >
                View registration certificate <Arrow diagonal />
              </button>
              <div className="certificate-seal" aria-hidden="true">
                <span>REGISTERED</span>
                <img src="/brand-logo.png" alt="" />
                <span>TAMIL NADU · INDIA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap certificate-pages-section">
          <div className="certificate-pages-heading">
            <div>
              <p className="section-kicker">THE COMPLETE RECORD</p>
              <h2>Certificate &amp; supporting<br /><em>registration pages.</em></h2>
            </div>
            <p>Each page is part of the same official Udyam registration document.</p>
          </div>
          <div className="certificate-pages-grid">
            {certificatePages.map((page, index) => (
              <button
                className="certificate-page-card"
                type="button"
                key={page.src}
                onClick={() => setSelectedPage(index)}
                aria-label={`View page ${index + 1}: ${page.title}`}
              >
                <span className="certificate-page-image">
                  <img src={page.src} alt={page.alt} loading="lazy" />
                  <span className="certificate-page-zoom"><Arrow diagonal /></span>
                </span>
                <span className="certificate-page-card-copy">
                  <span className="certificate-page-label">PAGE {String(index + 1).padStart(2, "0")}</span>
                  <strong>{page.title}</strong>
                  <span>{page.detail}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section-wrap certification-footer-cta">
          <p>Looking for something else?</p>
          <a className="pill-button pill-dark" href="/">Back to Rappid RocxX <Arrow /></a>
        </section>
      </main>

      {selectedPage !== null && (
        <div
          className="certificate-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedPage(null);
          }}
        >
          <div
            className="certificate-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={certificatePages[selectedPage].title}
          >
            <div className="certificate-lightbox-toolbar">
              <span>
                <strong>{certificatePages[selectedPage].title}</strong>
                <small>PAGE {String(selectedPage + 1).padStart(2, "0")} OF {String(certificatePages.length).padStart(2, "0")}</small>
              </span>
              <a
                className="certificate-download"
                href={certificatePages[selectedPage].src}
                download={`rappid-rocxx-udyam-registration-page-${selectedPage + 1}.jpg`}
              >
                Download page <Arrow diagonal />
              </a>
              <button
                className="certificate-lightbox-close"
                type="button"
                aria-label="Close certificate viewer"
                onClick={() => setSelectedPage(null)}
              >
                ×
              </button>
            </div>
            <div className="certificate-lightbox-image-wrap">
              <button
                className="certificate-lightbox-arrow certificate-previous"
                type="button"
                aria-label="Previous certificate page"
                onClick={() => setSelectedPage((selectedPage - 1 + certificatePages.length) % certificatePages.length)}
              >
                ‹
              </button>
              <img src={certificatePages[selectedPage].src} alt={certificatePages[selectedPage].alt} />
              <button
                className="certificate-lightbox-arrow certificate-next"
                type="button"
                aria-label="Next certificate page"
                onClick={() => setSelectedPage((selectedPage + 1) % certificatePages.length)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificationsPage;
