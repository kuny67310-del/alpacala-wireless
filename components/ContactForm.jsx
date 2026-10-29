"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 6000);
  }

  return (
    <div className="form-card">
      <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Request a Bulk Quote</h3>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Tell us what you need and we&apos;ll get back to you with pricing and a timeline.
      </p>
      <form id="contactForm" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">
              Full name <span className="req">*</span>
            </label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="field">
            <label htmlFor="company">
              Company <span className="req">*</span>
            </label>
            <input type="text" id="company" name="company" placeholder="Your business name" required />
          </div>
          <div className="field">
            <label htmlFor="email">
              Work email <span className="req">*</span>
            </label>
            <input type="email" id="email" name="email" placeholder="you@yourcompany.com" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
          </div>
          <div className="field">
            <label htmlFor="interest">
              I&apos;m interested in <span className="req">*</span>
            </label>
            <select id="interest" name="interest" required defaultValue="">
              <option value="" disabled>
                Select an option…
              </option>
              <option>Bulk SIM cards</option>
              <option>Activation services</option>
              <option>Dealer / reseller partnership</option>
              <option>Enterprise / MVNO program</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="volume">Estimated volume</label>
            <select id="volume" name="volume" defaultValue="">
              <option value="" disabled>
                Select a range…
              </option>
              <option>100 – 1,000</option>
              <option>1,000 – 10,000</option>
              <option>10,000 – 25,000</option>
              <option>25,000+</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your carrier mix, activation needs, and timeline…"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 22 }}>
          Send Inquiry
          <Icon name="send" />
        </button>
        <div className={`form-success${sent ? " show" : ""}`} id="formSuccess">
          ✓ Thank you! Your inquiry has been received. Our team will respond within one business day.
        </div>
        <p className="form-note">
          By submitting, you agree to be contacted about your inquiry. We never share your information.
        </p>
      </form>
    </div>
  );
}
