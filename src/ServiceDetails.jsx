import React, { useEffect } from "react";
import { serviceCategories } from "./serviceData.js";

function Arrow({ diagonal = false }) {
  return (
    <svg
      className="link-arrow"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
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

function ServiceDetails({ category }) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -35px 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="service-page-header">
          <Brand />
          <nav className="service-page-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/#services">All services</a>
            <a href="/#work">Our clients</a>
            <a href="/certifications.html">Registrations &amp; Certifications</a>
            <a href="/project-gallery.html">Project Gallery</a>
          </nav>
          <a className="header-cta" href="/#contact">Start a project <Arrow diagonal /></a>
        </div>
      </header>

      <main>
        <section className="section-wrap service-detail-hero">
          <div className="service-detail-copy">
            <p className="section-kicker">
              <a href="/">HOME</a><span> / </span>
              <a href="/#services">SERVICES</a><span> / {category.title.toUpperCase()}</span>
            </p>
            <p className="service-detail-category">{category.category} · {category.number}</p>
            <h1>{category.title}<span>.</span></h1>
            <p className="service-detail-intro">{category.intro}</p>
            <a className="pill-button pill-dark" href="/#contact">
              Let’s discuss your project <Arrow diagonal />
            </a>
          </div>
          <div className="service-detail-hero-image">
            <img src={category.image} alt={category.imageAlt} fetchPriority="high" />
          </div>
        </section>

        <section className="service-detail-list-section">
          <div className="section-wrap">
            <div className="service-detail-heading">
              <div>
                <p className="section-kicker">WHAT WE CAN HELP WITH</p>
                <h2>Considered work.<br /><em>Made for your needs.</em></h2>
              </div>
              <p>
                Explore the services in {category.title.toLowerCase()}.
                Tell us which one you have in mind and we can talk through
                what would work best for your business.
              </p>
            </div>
            <div className="service-detail-grid">
              {category.services.map((service, index) => (
                <article className="service-detail-card reveal" key={service.title}>
                  <div className="service-detail-card-image">
                    <img src={service.image} alt={service.imageAlt} loading="lazy" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="service-detail-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-contact section-wrap">
          <p>Have a project in mind?</p>
          <a className="pill-button pill-dark" href="mailto:rappidrocxx@gmail.com">
            Get in touch <Arrow diagonal />
          </a>
          <a className="underlined-link" href="/#services">Back to all services <Arrow /></a>
        </section>
      </main>
    </>
  );
}

export default ServiceDetails;
