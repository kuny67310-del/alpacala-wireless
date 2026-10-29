import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Partnership — Alpacala Wireless",
  description:
    "Partner with Alpacala Wireless. Join our dealer network for wholesale SIM cards, bulk activation services, dedicated account management, and marketing support.",
};

const VALUES = [
  { icon: "dollar", title: "Wholesale Pricing", text: "Volume-based rates and tiered discounts that keep you competitive and profitable." },
  { icon: "user", alt: true, title: "Dedicated Account Manager", text: "A real point of contact who knows your account, volume, and growth goals." },
  { icon: "circleCheck", green: true, title: "Turnkey Activation", text: "Inventory arrives activated and ready to sell — we handle the activation work for you." },
  { icon: "chart", amber: true, title: "Marketing Support", text: "Promotions, pricing guidance, and assets to help you move inventory faster." },
  { icon: "mail", navy: true, title: "Reporting & Controls", text: "Transparent activation reports and order tracking so you always know what's coming." },
  { icon: "zap", title: "Fast Shipping", text: "Reliable, trackable delivery that keeps your shelves and your platform stocked." },
];

const MODELS = [
  { name: "Dealer / Reseller", desc: "Buy activated SIM cards in bulk and resell to end customers.", featured: false, btn: "outline", cta: "Become a Dealer", items: ["Wholesale SIM & plan pricing", "Ready-to-sell activated inventory", "Marketing & promo support", "Reorder & inventory management"] },
  { name: "Enterprise / MVNO", desc: "Custom SIM programs, eSIM provisioning, and IoT/M2M scale.", featured: true, btn: "primary", cta: "Discuss a Program", items: ["Custom contracts & pricing", "API & eSIM provisioning", "Bulk batch activation at scale", "Dedicated technical & account teams"] },
  { name: "Referral", desc: "Refer business buyers and earn on every closed partnership.", featured: false, btn: "dark", cta: "Join Referral Program", items: ["Commission on referrals", "Simple, transparent terms", "No inventory required", "Ongoing revenue potential"] },
];

const STEPS = [
  { n: "01", title: "Apply", text: "Submit a partnership inquiry with basic details about your business." },
  { n: "02", title: "Qualify", text: "We review your needs and confirm the right model and pricing tier." },
  { n: "03", title: "Onboard", text: "Set up your account, pricing, and initial order requirements." },
  { n: "04", title: "Launch", text: "Place your first bulk order and start selling activated inventory." },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Partnership" }]}
        title={<>Partner With <span className="gradient-text">Alpacala Wireless</span></>}
        lead="Join a dealer network built for growth. We handle SIM sourcing and activation so you can focus on selling — with wholesale pricing, dedicated support, and turnkey inventory."
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why Partner" title="What Partners Get" sub="A single master relationship that gives you everything you need to sell wireless profitably." />
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

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Ways to Work Together" title="Cooperation Models" sub="Choose the model that fits your business — or combine them as you scale." />
          <div className="tier-grid">
            {MODELS.map((m, i) => (
              <div className={`tier reveal${i ? " d" + i : ""}${m.featured ? " featured" : ""}`} key={m.name}>
                {m.featured ? <div className="badge-pop">Most Popular</div> : null}
                <div className="tier-name">{m.name}</div>
                <div className="tier-desc">{m.desc}</div>
                <ul>
                  {m.items.map((it) => (
                    <li key={it}><Icon name="check" /> {it}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn btn-${m.btn} btn-block`}>{m.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Getting Started" title="How to Become a Partner" sub="Onboarding is quick and simple — here's what to expect." />
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
            <Link href="/contact" className="btn btn-primary btn-lg">
              Apply Now <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Grow Your Wireless Business?"
        text="Join our dealer network and start selling SIM cards and plans from the carriers your customers already want."
        ctaLabel="Start the Conversation"
      />
    </>
  );
}
