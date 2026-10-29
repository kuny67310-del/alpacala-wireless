import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Stats from "@/components/Stats";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";

export const metadata = {
  title: "About Us — Alpacala Wireless",
  description:
    "Alpacala Wireless is a B2B wholesale distributor of SIM cards and wireless activation services. Learn about our mission, values, and independent dealer commitment.",
};

const VALUES = [
  { icon: "target", title: "Our Mission", text: "To make wholesale wireless distribution effortless — so every business, at any size, can source and activate connectivity through a single trusted partner." },
  { icon: "house", alt: true, title: "Reliability", text: "Orders ship on time, activations verify correctly, and reporting is transparent. We earn trust through consistency." },
  { icon: "star", green: true, title: "Transparency", text: "Clear pricing, honest timelines, and full activation reports. No surprises — just straight answers." },
  { icon: "users", amber: true, title: "Partnership", text: "We win when you grow. Dedicated support, flexible terms, and a genuine stake in your success." },
  { icon: "zap", navy: true, title: "Efficiency", text: "Batch activation, consolidated orders, and streamlined onboarding reduce the cost and time of selling wireless." },
  { icon: "shield", title: "Compliance", text: "We sell only the products and services we are authorized to sell — and we're transparent about our independent status." },
];

const NOTES = [
  { h: "Independent dealer status", p: "Alpacala Wireless is an independent wireless dealer and distributor. We are not affiliated with, endorsed by, or an agent of any carrier. We do not own or operate a carrier network, and we do not represent ourselves as a carrier." },
  { h: "Authorized products only", p: "We only sell the SIM cards, plans, and services we are authorized to distribute. Carrier names and trademarks on this site belong to their respective owners and are used solely to describe the products and services we are authorized to sell." },
  { h: "Accurate positioning", p: "Our website reflects our real business model — bulk SIM distribution and activation services — and nothing more. If you have questions about what we can and cannot offer, just ask." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={<>The Partner Behind <span className="gradient-text">Your Wireless Growth</span></>}
        lead="Alpacala Wireless is a business-to-business distributor of SIM cards and wireless activation services. We help companies source, activate, and manage connectivity at scale."
      />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">Built for Business Buyers</h2>
            <p style={{ color: "var(--muted)" }}>
              Most wireless distributors focus on individual consumers. We built Alpacala Wireless for the other side of
              the market — the companies that buy SIM cards in volume and need activation handled for them.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Our model is simple: <strong>you purchase the SIM cards, we handle the activation.</strong> From a single
              retail store to a nationwide reseller platform, we make it easy to source multi-carrier inventory and get
              it ready to sell — without the overhead of managing activations in-house.
            </p>
          </div>
          <div className="media reveal d1">
            <div className="media-frame">
              <div className="tag"><span className="chip" /> Our Model</div>
              <h4>How We Work</h4>
              <p style={{ marginBottom: 20 }}>A simple two-sided flow built around bulk purchasing and activation.</p>
              <div className="order-line"><span>1 · You order</span><strong>Bulk SIM cards</strong></div>
              <div className="order-line"><span>2 · We activate</span><strong>Batch / eSIM</strong></div>
              <div className="order-line"><span>3 · We ship</span><strong>Ready-to-sell</strong></div>
              <div className="order-line"><span>4 · You grow</span><strong>Repeat &amp; scale</strong></div>
              <div className="order-total"><span>Focus</span><strong style={{ color: "var(--blue-600)" }}>Your customers</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Mission & Values" title="What We Stand For" />
          <div className="grid grid-3">
            {VALUES.map((v, i) => (
              <div className={`card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={v.title}>
                <div className={`card-icon${v.alt ? " alt" : ""}${v.green ? " green" : ""}${v.amber ? " amber" : ""}${v.navy ? " navy" : ""}`}>
                  <Icon name={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
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

      <section className="section">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Compliance</span>
            <h2 className="section-title">Our Independent Dealer Commitment</h2>
          </div>
          {NOTES.map((n, i) => (
            <div className={`compliance reveal${i ? " d" + i : ""}`} style={{ marginTop: i ? 16 : 0 }} key={n.h}>
              <Icon name="circleAlert" />
              <div>
                <strong>{n.h}.</strong> {n.p}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Let's Build Something Together"
        text="Whether you're a single store or a national platform, we're ready to help you scale your wireless business."
        ctaLabel="Get in Touch"
      />
    </>
  );
}
