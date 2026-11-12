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
        amount: 4999,
      },
      {
        src: "/flyers/portfolio/portfolio.jpg",
        alt: "Simple portfolio website flyer",
        title: "Portfolio (Basic)",
        amount: 799,
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
        amount: 3499,
      },
      {
        src: "/flyers/startup-corporate-businesses/scb-fly-2.jpg",
        alt: "Corporate company website flyer",
        title: "Corporate Company Website",
        amount: 5999,
      },
      {
        src: "/flyers/startup-corporate-businesses/scb-fly-3.jpg",
        alt: "IT and software company website flyer",
        title: "IT / Software Company Website",
        amount: 7999,
      },
      {
        src: "/flyers/startup-corporate-businesses/srb-fly-4.jpg",
        alt: "Grocery store website flyer",
        title: "Grocery Store Website",
        amount: 3499,
      },
      {
        src: "/flyers/startup-corporate-businesses/srb-fly-5.jpg",
        alt: "Textile and clothing store website flyer",
        title: "Textile / Clothing Store Website",
        amount: 4599,
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
        amount: 4999,
      },
      {
        src: "/flyers/food-and-hospitality/food-hospitality-fly-4.jpg",
        alt: "Bakery and cake shop website flyer",
        title: "Bakery / Cake Shop Website",
        amount: 2999,
      },
      {
        src: "/flyers/food-and-hospitality/food-hospitality-fly-5.jpg",
        alt: "Hotel and resort website flyer",
        title: "Hotel / Resort Website",
        amount: 10999,
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
        amount: 5999,
      },
      {
        src: "/flyers/shops-and-retail-business/shops-retail-fly-2.jpg",
        alt: "Electronics and mobile shop website flyer",
        title: "Electronics / Mobile Shop Website",
        amount: 2899,
      },
    ],
  },
  {
    title: "Automotive and Construction",
    category: "AUTOMOTIVE AND CONSTRUCTION",
    posters: [
      {
        src: "/flyers/automotive-construction/car-bike-showroom.jpg",
        alt: "Car and bike showroom website flyer",
        title: "Car / Bike Showroom Website",
        amount: 6999,
      },
      {
        src: "/flyers/automotive-construction/construction-company.jpg",
        alt: "Construction company website flyer",
        title: "Construction Company Website",
        amount: 6999,
      },
    ],
  },
  {
    title: "Education",
    category: "EDUCATION",
    posters: [
      {
        src: "/flyers/education/school.jpg",
        alt: "School website flyer",
        title: "School Website",
        amount: 5999,
      },
      {
        src: "/flyers/education/coaching-training-institute.jpg",
        alt: "Coaching and training institute website flyer",
        title: "Coaching / Training Institute Website",
        amount: 4999,
      },
      {
        src: "/flyers/education/music-dance-academy.jpg",
        alt: "Music and dance academy website flyer",
        title: "Music / Dance Academy Website",
        amount: 4499,
      },
    ],
  },
  {
    title: "Healthcare",
    category: "HEALTHCARE",
    posters: [
      {
        src: "/flyers/healthcare/hospital.jpg",
        alt: "Hospital website flyer",
        title: "Hospital Website",
        amount: 9899,
      },
      {
        src: "/flyers/healthcare/clinic-dental-clinic.jpg",
        alt: "Clinic and dental clinic website flyer",
        title: "Clinic / Dental Clinic Website",
        amount: 5999,
      },
      {
        src: "/flyers/healthcare/medical-laboratory.jpg",
        alt: "Medical laboratory website flyer",
        title: "Medical Laboratory Website",
        amount: 5999,
      },
    ],
  },
  {
    title: "Real Estate and Interior Design",
    category: "REAL ESTATE AND INTERIOR DESIGN",
    posters: [
      {
        src: "/flyers/real-estate-interior-design/real-estate-agency.jpg",
        alt: "Real estate agency website flyer",
        title: "Real Estate Agency Website",
        amount: 6999,
      },
      {
        src: "/flyers/real-estate-interior-design/interior-design-company.jpg",
        alt: "Interior design company website flyer",
        title: "Interior Design Company Website",
        amount: 5999,
      },
    ],
  },
];

const whatsappNumber = "917598441973";
const upiId = "venuprasaath265@okicici";
const upiPayeeName = "Venu Prasaath Rajendran";

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
                        <div className="project-gallery-card-actions">
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
                          <a
                            className="pill-button pill-outline"
                            href={`upi://pay?${new URLSearchParams({
                              pa: upiId,
                              pn: upiPayeeName,
                              am: poster.amount.toFixed(2),
                              cu: "INR",
                              tn: `Payment for ${poster.title}`,
                            }).toString()}`}
                          >
                            Pay Now
                          </a>
                          <a
                            className="pill-button pill-outline"
                            href={`upi://pay?${new URLSearchParams({
                              pa: upiId,
                              pn: upiPayeeName,
                              am: (poster.amount / 2).toFixed(2),
                              cu: "INR",
                              tn: `Advance payment for ${poster.title}`,
                            }).toString()}`}
                          >
                            Make Advance
                          </a>
                        </div>
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
