import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact Us — Alpacala Wireless",
  description:
    "Contact Alpacala Wireless for bulk SIM card pricing, activation services, and partnership inquiries. Reach our sales team today.",
};

const FAQS = [
  { q: "How quickly will I get a quote?", a: "We respond to most bulk SIM and activation inquiries within one business day. Complex enterprise programs may take a little longer while we confirm carrier availability." },
  { q: "Do you require a minimum order to start?", a: "Our standard minimum is 100 SIM cards. For enterprise and MVNO programs, we offer custom terms — reach out and we'll find the right fit." },
  { q: "Can I speak to a real person?", a: "Yes — and not a call center. Every partner gets a dedicated account contact who knows your business and your orders." },
  { q: "What information should I include in my inquiry?", a: "The more detail the better: estimated volume, carrier mix, physical SIM vs eSIM, activation type, and your timeline. This helps us return an accurate quote faster." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={<>Let&apos;s Talk <span className="gradient-text">Bulk SIM &amp; Activation</span></>}
        lead="Get a wholesale quote, start a partnership, or ask a question. We respond within one business day."
      />

      <section className="section">
        <div className="container contact-wrap">
          <div className="contact-info-card reveal">
            <h3>Contact Information</h3>
            <p style={{ marginBottom: 24 }}>
              Reach out to our sales and partnership team for bulk pricing, activation services, and onboarding.
            </p>
            <div className="info-line">
              <span className="ic"><Icon name="phone" /></span>
              <div>
                <div className="lbl">Phone</div>
                <div className="val"><a href="tel:+16263213068">+16263213068</a></div>
              </div>
            </div>
            <div className="info-line">
              <span className="ic"><Icon name="mail" /></span>
              <div>
                <div className="lbl">Email</div>
                <div className="val"><a href="mailto:leol@alpacala.net">leol@alpacala.net</a></div>
              </div>
            </div>
            <div className="info-line">
              <span className="ic"><Icon name="mapPin" /></span>
              <div>
                <div className="lbl">Location</div>
                <div className="val">209 Clary Ave San Gabriel CA 91776</div>
              </div>
            </div>
            <div className="info-line">
              <span className="ic"><Icon name="clock" /></span>
              <div>
                <div className="lbl">Hours</div>
                <div className="val">Mon – Fri · 9am – 6pm ET</div>
              </div>
            </div>
          </div>

          <div className="reveal d1">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow centered">FAQs</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      <CtaBanner
        title="Prefer to Talk Directly?"
        text="Request a callback and our sales team will reach out during business hours with answers to your questions."
        ctaLabel="Request a Callback"
        href="#contactForm"
      />
    </>
  );
}
