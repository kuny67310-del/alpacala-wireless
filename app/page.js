import Link from "next/link";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import CarrierStrip from "@/components/CarrierStrip";
import Stats from "@/components/Stats";
import CtaBanner from "@/components/CtaBanner";

const SERVICES = [
  { icon: "smartphone", title: "Bulk SIM Cards", href: "/bulk-sim", text: "Prepaid and postpaid SIM cards from multiple carriers. Order in any volume — from hundreds to hundreds of thousands.", link: "Bulk ordering" },
  { icon: "activity", alt: true, title: "SIM & eSIM Activation", href: "/activation", text: "We handle activation end-to-end — individual lines or batch activations — so your inventory is ready to sell on arrival.", link: "Activation services" },
  { icon: "chart", green: true, title: "Plan Management", href: "/activation", text: "Renewals, plan changes, top-ups and account transfers managed in bulk with transparent reporting and controls.", link: "Learn more" },
  { icon: "users", navy: true, title: "Dealer Support", href: "/partnership", text: "A dedicated account team, wholesale pricing, and marketing support to help your store or platform grow profitably.", link: "Partner program" },
];

const STEPS = [
  { n: "01", title: "Share Your Requirements", text: "Tell us the volume, carrier mix, activation type (physical SIM or eSIM), and your timeline." },
  { n: "02", title: "Receive a Quote", text: "We respond with wholesale pricing, availability, and a clear delivery & activation schedule." },
  { n: "03", title: "We Source & Activate", text: "We procure the SIM cards and process batch activations on the carriers you choose." },
  { n: "04", title: "Ship & Scale", text: "Activated inventory ships to your door — ready to distribute, resell, or deploy immediately." },
];

const WHY = [
  { h: "Wholesale pricing", p: "Volume-based rates that keep your margins healthy and competitive." },
  { h: "Multi-carrier support", p: "One partner relationship across all major networks — no juggling vendors." },
  { h: "Bulk activation, instantly", p: "Individual and batch SIM activations with fast, reliable processing." },
  { h: "Dedicated dealer support", p: "Real people — not a call center — who know your account and your goals." },
  { h: "Marketing support", p: "Pricing guidance, promotions and assets to help you move inventory faster." },
  { h: "Ready-to-sell inventory", p: "Fast, reliable shipping so your shelves — and your platform — stay stocked." },
];

const SERVE = [
  { icon: "store", alt: true, title: "Retail & Dealer Stores", text: "Keep shelves stocked with activated, ready-to-sell SIM cards across multiple carrier brands." },
  { icon: "globe", green: true, title: "MVNOs & IoT Companies", text: "Reliable SIM sourcing and activation for MVNO launches, IoT fleets, and M2M deployments." },
  { icon: "message", amber: true, title: "Enterprises & Resellers", text: "Volume purchasing and turnkey activation for resellers, platforms, and enterprise programs." },
];

const TRUST = [
  { icon: "shieldCheck", title: "Authorized multi-carrier distribution", text: "We source and activate only the SIM cards and plans we are authorized to distribute across supported carrier networks." },
  { icon: "circleCheck", alt: true, title: "Verified activations, every batch", text: "Each batch is checked line by line, with a report covering activation status, port-ins, eSIM profiles, and exceptions." },
  { icon: "users", green: true, title: "Dedicated account support", text: "A named contact who knows your account, order history, and volume — not a rotating call center." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <link
          rel="preload"
          as="image"
          href="/assets/img/hero-banner.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="dot" /> B2B Wholesale SIM Distribution &amp; Activation
            </span>
            <h1 className="hero-title">
              Alpacala Wireless — <span className="gradient-text">Your Trusted Prepaid Wireless Partner</span>
            </h1>
            <p className="hero-sub">
              Prepaid SIM cards, eSIM solutions, wireless plan activations, and mobile connectivity services across
              major U.S. carrier networks.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a Bulk Order <Icon name="arrow" />
              </Link>
              <Link href="/partnership" className="btn btn-outline-light btn-lg">
                Partner With Us
              </Link>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <Icon name="shieldCheck" /> 8+ carrier networks
              </span>
              <span className="hero-meta-item">
                <Icon name="zap" /> Same-day bulk activation
              </span>
              <span className="hero-meta-item">
                <Icon name="user" /> Dedicated dealer support
              </span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-card">
              <div className="order-head">
                <h4>Bulk SIM &amp; Activation</h4>
                <span className="order-status">B2B Program</span>
              </div>
              <div className="order-line"><span>SIM formats</span><strong>Physical SIM · eSIM</strong></div>
              <div className="order-line"><span>Carrier networks</span><strong>Verizon, AT&amp;T, T-Mobile</strong></div>
              <div className="order-line"><span>Activation</span><strong>Batch, handled by us</strong></div>
              <div className="order-line"><span>Reporting</span><strong>Per-line activation report</strong></div>
              <div className="order-total"><span>Shipping</span><strong>Nationwide, tracked</strong></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "100%" }} /></div>
              <div className="progress-caption">Every order ships activated and ready to sell</div>
            </div>
            <div className="hero-chips">
              <div className="hero-chip">
                <span className="ic blue"><Icon name="smartphone" /></span>
                <div><div className="f-label">Multi-carrier</div><div className="f-value">One partner</div></div>
              </div>
              <div className="hero-chip">
                <span className="ic green"><Icon name="circleCheck" /></span>
                <div><div className="f-label">Activation</div><div className="f-value">Handled for you</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarrierStrip />

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What We Offer"
            title="Products & Services"
            sub="Everything your business needs to source, activate, and manage wireless connectivity at scale — from a single trusted partner."
          />
          <div className="grid grid-4">
            {SERVICES.map((s, i) => (
              <div className={`card reveal${i ? " d" + i : ""}`} key={s.title}>
                <div className={`card-icon${s.alt ? " alt" : ""}${s.green ? " green" : ""}${s.navy ? " navy" : ""}`}>
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="card-link">
                  {s.link} <Icon name="arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-soft">
        <div className="container">
          <SectionHead
            eyebrow="Bulk SIM Purchasing"
            title="How Bulk Ordering Works"
            sub="A simple, repeatable process to source SIM cards in volume and have them activated before they reach your customers."
          />
          <div className="grid grid-4 steps">
            {STEPS.map((s, i) => (
              <div className={`step reveal${i ? " d" + i : ""}`} key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 44 }}>
            <Link href="/bulk-sim" className="btn btn-primary btn-lg">
              See Bulk SIM Details <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Why Alpacala</span>
            <h2 className="section-title">Your Growth Is Our Business</h2>
            <p className="section-sub" style={{ margin: "0 0 28px" }}>
              We distribute SIM cards and manage activations from top-tier carriers so your business can focus on
              selling. Whether you run a single store or a nationwide platform, we handle the supply chain and
              activation work behind the scenes.
            </p>
            <Link href="/about" className="btn btn-outline">More About Us</Link>
          </div>
          <div className="check-list reveal d1">
            {WHY.map((w) => (
              <div className="check-item" key={w.h}>
                <span className="tick"><Icon name="check" strokeWidth={3} /></span>
                <div><h4>{w.h}</h4><p>{w.p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats
        items={[
          { value: 8, suffix: "+", label: "Carrier networks supported" },
          { value: 50, label: "States served" },
          { value: 3, label: "SIM formats offered" },
          { value: 24, suffix: "h", label: "Quote response time" },
        ]}
      />

      {/* WHO WE SERVE */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Who We Serve"
            title="Built for Business Buyers"
            sub="We work with companies that buy SIM cards in volume and need activation handled for them — at any stage of growth."
          />
          <div className="grid grid-3">
            {SERVE.map((s, i) => (
              <div className={`card reveal${i ? " d" + i : ""}`} key={s.title}>
                <div className={`card-icon${s.alt ? " alt" : ""}${s.green ? " green" : ""}${s.amber ? " amber" : ""}`}>
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section section-soft">
        <div className="container">
          <SectionHead
            eyebrow="Why Businesses Work With Us"
            title="Built for Consistent, Repeatable Supply"
            sub="The operational commitments behind every bulk order and activation batch."
          />
          <div className="grid grid-3">
            {TRUST.map((t, i) => (
              <div className={`card reveal${i ? " d" + i : ""}`} key={t.title}>
                <div className={`card-icon${t.alt ? " alt" : ""}${t.green ? " green" : ""}`}>
                  <Icon name={t.icon} />
                </div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Grow Your Wireless Business?"
        text="Join our dealer network and start selling activated SIM cards and plans from the carriers your customers already want."
        ctaLabel="Get a Bulk Quote"
      />
    </>
  );
}
