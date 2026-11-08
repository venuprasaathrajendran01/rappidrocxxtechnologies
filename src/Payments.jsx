import React, { useState } from "react";

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

function PaymentsPage() {
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

      <main className="payments-page">
        <section className="section-wrap payments-intro">
          <p className="section-kicker">SIMPLE. SECURE. DIRECT. <span>01 — 01</span></p>
          <div className="payments-intro-grid">
            <div>
              <p className="payments-eyebrow">PAYMENT OPTIONS</p>
              <h1>Pay with<br /><em>ease.</em></h1>
            </div>
            <p className="payments-intro-copy">
              Scan the UPI QR code with your preferred payment app, or enter
              the UPI ID below to make a payment.
            </p>
          </div>
        </section>

        <section className="payments-record-section">
          <div className="section-wrap payments-record">
            <div className="payments-qr-frame">
              <div className="payments-qr-mat">
                <img
                  src="/payments/upi-payment.jpeg"
                  alt="UPI payment QR code for Venu Prasaath Rajendran. UPI ID: venuprasaath265@okicici."
                />
              </div>
              <p>Scan to pay with any UPI app</p>
            </div>
            <div className="payments-details">
              <p className="section-kicker">DIRECT UPI PAYMENT</p>
              <h2>One simple way<br /><em>to pay.</em></h2>
              <p className="payments-description">
                Open your UPI app and scan the QR code, or use the UPI ID to
                complete your payment.
              </p>
              <div className="payments-upi-id">
                <span>UPI ID</span>
                <strong>venuprasaath265@okicici</strong>
              </div>
              <p className="payments-recipient">Payee: Venu Prasaath Rajendran</p>
              <div className="payments-bank-details">
                <p className="payments-bank-heading">BANK TRANSFER</p>
                <dl>
                  <div>
                    <dt>Account name</dt>
                    <dd>VENUPRASAATH RAJENTHIRAN</dd>
                  </div>
                  <div>
                    <dt>Account number</dt>
                    <dd>268100050306479</dd>
                  </div>
                  <div>
                    <dt>Branch</dt>
                    <dd>268 OTHAKUTHIRAI</dd>
                  </div>
                  <div>
                    <dt>IFSC code</dt>
                    <dd>TMBL0000268</dd>
                  </div>
                  <div>
                    <dt>MICR code</dt>
                    <dd>638060009</dd>
                  </div>
                  <div>
                    <dt>Branch address</dt>
                    <dd>Door No. 241, Gobi–Erode Main Road, K Mettupalayam Post, Erode District</dd>
                  </div>
                </dl>
              </div>
              <a className="underlined-link" href="/">Back to Rappid RocxX <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PaymentsPage;
