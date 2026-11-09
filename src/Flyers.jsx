import React, { useState } from "react";

const flyerGroups = [
  {
    title: "Portfolio",
    category: "PORTFOLIO",
    posters: [
      {
        src: "/flyers/portfolio/pfl-2.jpg",
        alt: "Advanced portfolio website flyer",
        title: "Portfolio (Advanced)",
      },
      {
        src: "/flyers/portfolio/portfolio.jpg",
        alt: "Simple portfolio website flyer",
        title: "Portfolio (Basic)",
      },
    ],
  },
  {
    title: "Startup & Corporate Businesses",
    category: "STARTUP & CORPORATE BUSINESSES",
    posters: [
      {
        src: "/flyers/startup-corporate-businesses/fly-1.jpg",
        alt: "Startup website flyer",
        title: "Startup Website",
      },
      {
        src: "/flyers/startup-corporate-businesses/scb-fly-2.jpg",
        alt: "Corporate company website flyer",
        title: "Corporate Company Website",
      },
      {
        src: "/flyers/startup-corporate-businesses/scb-fly-3.jpg",
        alt: "IT and software company website flyer",
        title: "IT / Software Company Website",
      },
      {
        src: "/flyers/startup-corporate-businesses/srb-fly-4.jpg",
        alt: "Grocery store website flyer",
        title: "Grocery Store Website",
      },
      {
        src: "/flyers/startup-corporate-businesses/srb-fly-5.jpg",
        alt: "Textile and clothing store website flyer",
        title: "Textile / Clothing Store Website",
      },
    ],
  },
  {
    title: "Food and Hospitality",
    category: "FOOD AND HOSPITALITY",
    posters: [
      {
        src: "/flyers/food-and-hospitality/food-hospitality-fly-3.jpg",
        alt: "Restaurant website flyer",
        title: "Restaurant Website",
      },
      {
        src: "/flyers/food-and-hospitality/food-hospitality-fly-4.jpg",
        alt: "Bakery and cake shop website flyer",
        title: "Bakery / Cake Shop Website",
      },
      {
        src: "/flyers/food-and-hospitality/food-hospitality-fly-5.jpg",
        alt: "Hotel and resort website flyer",
        title: "Hotel / Resort Website",
      },
    ],
  },
  {
    title: "Shops and Retail Business",
    category: "SHOPS AND RETAIL BUSINESS",
    posters: [
      {
        src: "/flyers/shops-and-retail-business/shops-retail-fly-1.jpg",
        alt: "Jewellery shop website flyer",
        title: "Jewellery Shop Website",
      },
      {
        src: "/flyers/shops-and-retail-business/shops-retail-fly-2.jpg",
        alt: "Electronics and mobile shop website flyer",
        title: "Electronics / Mobile Shop Website",
      },
    ],
  },
];

const whatsappNumber = "917598441973";

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
                      <div className="project-gallery-card-title">
                        <h2>{poster.title}</h2>
                        <a
                          className="pill-button pill-dark"
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hi, I'm interested in the ${poster.title} from your ${group.title} collection. Please share more details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Enquire Now
                        </a>
                      </div>
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
