import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-mark" src="/assets/img/logo.svg" alt="Alpacala Wireless logo" />
              <span className="brand-text">
                Alpacala<span className="brand-accent"> Wireless</span>
              </span>
            </Link>
            <p className="footer-about">
              Your trusted prepaid wireless partner. We distribute SIM cards and manage activations across major U.S.
              carrier networks for businesses of every size.
            </p>
            <div className="social-row">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <Link href="/bulk-sim">Bulk SIM Cards</Link>
            <Link href="/activation">SIM &amp; eSIM Activation</Link>
            <Link href="/activation">Plan Management</Link>
            <Link href="/carriers">Carrier Partners</Link>
            <Link href="/partnership">Dealer Support</Link>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/partnership">Partnership</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Get a Quote</Link>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <div className="footer-contact-line">
              <Icon name="mapPin" />
              <span>United States</span>
            </div>
            <div className="footer-contact-line">
              <Icon name="phone" />
              <Link href="/contact#contactForm">Request a callback</Link>
            </div>
            <div className="footer-contact-line">
              <Icon name="mail" />
              <span>sales@alpacalawireless.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Alpacala Wireless. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <p className="legal">
            Alpacala Wireless is an independent wireless dealer and distributor. We are not affiliated with, endorsed
            by, or an agent of Verizon, AT&amp;T, T-Mobile, or any carrier referenced on this site. Carrier names are
            trademarks of their respective owners and are used solely to describe products and services we are
            authorized to sell.
          </p>
        </div>
      </div>
    </footer>
  );
}
