import React, { useEffect, useState } from "react";
import { serviceCategories } from "./serviceData.js";

const faq = [
  {
    question: "What can Rappid RocxX help my business with?",
    answer:
      "We bring software development, CRM and billing systems, AI chatbots, UI/UX and brand design, video and digital media, website development, and business technology consulting together under one roof.",
  },
  {
    question: "Can I work with you on just one part of a project?",
    answer:
      "Absolutely. Get in touch about the particular service you need, whether that is custom software, a website, a brand identity, a video, or support with a digital business solution.",
  },
  {
    question: "Where are you based?",
    answer:
      "Rappid RocxX is based in Gobichettipalayam, Erode, Tamil Nadu, India. Our company profile also introduces our work with clients in India and Malaysia.",
  },
];

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

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#home" aria-label="Rappid RocxX home">
      <img className="brand-logo" src="/brand-logo.png" alt="" />
      <span className="brand-lockup">
        <span className="brand-wordmark">Rappid RocxX</span>
        <span className="brand-subtitle">Technologies</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [contactOptionsOpen, setContactOptionsOpen] = useState(false);

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
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Our clients</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="/owner.html" onClick={closeMenu}>Owner information</a>
            <a href="/certifications.html" onClick={closeMenu}>Registrations &amp; Certifications</a>
            <a href="/payments.html" onClick={closeMenu}>Payments &amp; Options</a>
            <a href="/project-gallery.html" onClick={closeMenu}>Project Gallery</a>
            <a href="/flyers.html" onClick={closeMenu}>Flyers</a>
          </nav>
          <a className="header-cta" href="#contact">Start a project <Arrow diagonal /></a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span /> INDEPENDENT TECHNOLOGY & CREATIVE STUDIO</p>
            <h1 className="hero-title">
              New possibilities<br />
              for <span>ambitious</span><br />
              businesses<span className="title-period">.</span>
            </h1>
            <p className="hero-description">
              We bring technology and creativity together to make better
              things happen for your business.
            </p>
            <div className="hero-actions">
              <a className="pill-button pill-dark" href="#contact">Start a project <Arrow diagonal /></a>
              <a className="pill-button pill-outline" href="#services">Explore services <Arrow /></a>
            </div>
            <div className="hero-meta"><span /> GOBICHETTIPALAYAM · TAMIL NADU · INDIA</div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90"
                alt="Creative professionals sharing ideas around a table"
                fetchPriority="high"
              />
            </div>
            <div className="photo-caption"><span>GOOD THINKING, GOOD PEOPLE</span><span>EST. 2026</span></div>
          </div>
          <div className="hero-bottom-line"><span>SCROLL A LITTLE</span><span className="scroll-rule" /></div>
        </section>

        <section className="values-section reveal">
          <div className="section-wrap values-grid">
            <article className="value-card">
              <p className="section-kicker">OUR VISION <span>01 — 05</span></p>
              <h2>Looking ahead.<br /><em>Thinking bigger.</em></h2>
              <p>
                To become a globally recognized technology and creative media
                company that empowers businesses through innovative software,
                intelligent digital solutions and impactful visual experiences.
                We aspire to bridge creativity with technology, enabling
                organizations of every size to transform, grow and succeed in
                the digital era while maintaining the highest standards of
                quality, innovation and customer satisfaction.
              </p>
            </article>
            <article className="value-card mission-card">
              <p className="section-kicker">OUR MISSION <span>01 — 05</span></p>
              <h2>Make technology<br /><em>mean something.</em></h2>
              <p>
                To deliver innovative, reliable and user-centric technology
                and creative media solutions that help businesses thrive in
                the digital world. We are committed to developing high-quality
                software, intelligent business automation systems, engaging
                digital experiences and impactful visual content that simplify
                operations, strengthen brands and drive sustainable growth.
                Through creativity, continuous innovation and a customer-first
                approach, we strive to build long-term partnerships while
                maintaining excellence, integrity and professionalism.
              </p>
            </article>
          </div>
        </section>

        <section className="intro-section section-wrap reveal" id="about">
          <p className="section-kicker">A LITTLE ABOUT US <span>01 — 05</span></p>
          <div className="intro-content">
            <h2>Good work happens<br />when <em>everything connects.</em></h2>
            <div className="intro-right">
              <p>
                Rappid RocxX is an independent technology, design and digital
                media company based in Gobichettipalayam, Tamil Nadu. From
                building practical software to shaping brands and producing
                digital content, we help good ideas find their way into the world.
              </p>
              <a className="underlined-link" href="#approach">A considered approach <Arrow /></a>
            </div>
          </div>
          <div className="intro-bottom">
            <span>FOUNDED BY VENU PRASAATH RAJENDRAN</span>
            <span>01 AUGUST 2026</span>
            <span>TECHNOLOGY WITH A HUMAN SIDE</span>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap">
            <div className="work-heading reveal">
              <div>
                <p className="section-kicker">A FEW WAYS WE CAN HELP <span>02 — 05</span></p>
                <h2>Turning ideas into<br /><em>real outcomes.</em></h2>
              </div>
              <p>Thoughtful work across technology, design and digital media. Made around what your business actually needs.</p>
            </div>
            <div className="work-grid">
              {serviceCategories.map((service, index) => (
                <article className={`work-card work-card-${index + 1} reveal`} key={service.number}>
                  <div className="work-image">
                    <img src={service.cardImage} alt={service.cardImageAlt} loading="lazy" />
                    <span className="work-image-number">{service.number}</span>
                  </div>
                  <div className="work-card-copy">
                    <div className="work-card-topline">{service.category}<Arrow diagonal /></div>
                    <h3>{service.cardTitle}</h3>
                    <p>{service.cardSummary}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="clients-row reveal">
              <span className="clients-label">GOOD PEOPLE WE’VE WORKED WITH</span>
              <div className="client-name">
                <img className="client-logo client-logo-jd" src="/client-logos/jd-universal.png" alt="JD Universal SDN BHD" />
                <span className="client-copy">
                  <strong>JD UNIVERSAL <span>SDN BHD</span></strong>
                  <small>MELAKA, MALAYSIA</small>
                </span>
              </div>
              <div className="client-name client-amaj">
                <img className="client-logo client-logo-amaj" src="/client-logos/amaj-studios.png" alt="Amaj Studios" />
                <span className="client-copy">
                  <strong>AMAJ <span>STUDIOS</span></strong>
                  <small>CHENGALPATTU, INDIA</small>
                </span>
              </div>
              <a className="clients-contact" href="#contact">Could it be you? <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="services-section section-wrap reveal" id="services">
          <div className="services-heading">
            <div>
              <p className="section-kicker">WHAT WE BRING TO THE TABLE <span>03 — 05</span></p>
              <h2>Good ideas deserve<br /><em>good execution.</em></h2>
            </div>
            <p>From the first spark to the finished product, we bring the right skills together.</p>
          </div>
          <div className="services-list">
            {serviceCategories.map((service) => (
              <a className="service-row-link" href={service.page} key={service.slug}>
                <article>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.services.map((item) => item.title).join(", ")}</p>
                  <Arrow diagonal />
                </article>
              </a>
            ))}
            <a className="service-row-link" href="/flyers.html">
              <article>
                <span>05</span>
                <h3>Flyers</h3>
                <p>Creative flyer designs for portfolios, startups and corporate businesses.</p>
                <Arrow diagonal />
              </article>
            </a>
          </div>
        </section>

        <section className="beliefs-section" id="approach">
          <div className="section-wrap beliefs-inner">
            <div className="beliefs-copy reveal">
              <p className="section-kicker section-kicker-light">A GOOD WAY OF WORKING <span>04 — 05</span></p>
              <h2>People who<br /><em>create value.</em></h2>
              <p>
                We believe the best digital work feels effortless to use and
                makes a real difference to the people it is made for. That
                means listening closely, caring about the details and doing
                what’s right for your business.
              </p>
              <div className="belief-proof">
                <img className="proof-monogram" src="/brand-logo.png" alt="" />
                <div><strong>Creative minds. Practical solutions.</strong><span>Small business, big-picture thinking.</span></div>
              </div>
            </div>
            <div className="beliefs-photo reveal">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
                alt="A team working together on a project"
                loading="lazy"
              />
              <span>BUILT ON TRUST. MADE TOGETHER.</span>
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap reveal">
          <div className="faq-heading">
            <p className="section-kicker">A FEW THINGS YOU MIGHT BE WONDERING</p>
            <h2>Frequently asked<br /><em>questions.</em></h2>
            <p>Still have something on your mind? <a href="mailto:rappidrocxx@gmail.com">Just ask us <Arrow /></a></p>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <article className={`faq-item${activeFaq === index ? " is-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  aria-expanded={activeFaq === index}
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span>{item.question}</span><span className="faq-toggle" aria-hidden="true" />
                </button>
                <div className="faq-answer"><p>{item.answer}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-photo" />
          <div className="section-wrap contact-inner reveal">
            <p className="contact-kicker">GOOD THINGS START WITH A CONVERSATION</p>
            <h2>Let’s create<br /><em>together.</em></h2>
            <p className="contact-description">Tell us a little about what you have in mind. We’ll take it from there.</p>
            <a className="pill-button pill-peach" href="mailto:rappidrocxx@gmail.com">Get in touch <Arrow diagonal /></a>
            <a className="contact-secondary" href="#services">Explore services <Arrow /></a>
            <div className="contact-footer">
              <div className="contact-info">
                <span>HAVE SOMETHING IN MIND?</span>
                <a href="mailto:rappidrocxx@gmail.com">rappidrocxx@gmail.com</a>
                <a
                  href="#contact-phone-options"
                  aria-expanded={contactOptionsOpen}
                  aria-controls="contact-phone-options"
                  onClick={(event) => {
                    event.preventDefault();
                    setContactOptionsOpen(!contactOptionsOpen);
                  }}
                >
                  +91 75984 41973
                </a>
                {contactOptionsOpen && (
                  <div id="contact-phone-options">
                    <a href="tel:+917598441973">Call</a>
                    <a
                      href="https://wa.me/917598441973"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>
              <div className="contact-info contact-location">
                <span>FIND US</span>
                <p>Gobichettipalayam<br />Tamil Nadu, India</p>
                <a href="https://www.instagram.com/rappidrocxxtechnologies?dlrf=MXRybXg5a2F5ZjJmYQ==" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a>
                <a href="https://www.linkedin.com/company/rapidrocxxtechnologies?trk=blended-typeahead&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadB1rbCp76kHJaWt7VozGozZzVWbzEaYMgNk8Fm8puOBZuHI8PCmTU-4GJSPg_aem_wTwVWttXKXDKxO_qzUbWmQ" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
              </div>
              <Brand footer />
              <span className="copyright">© {new Date().getFullYear()} Rappid RocxX. All rights reserved.</span>
            </div>
          </div>
          <span className="contact-deco contact-deco-one" />
          <span className="contact-deco contact-deco-two" />
        </section>
      </main>
    </>
  );
}

export default App;
