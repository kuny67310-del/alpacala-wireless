import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Carrier Partners — Alpacala Wireless",
  description:
    "Alpacala Wireless works across major U.S. carrier networks — Verizon, AT&T, T-Mobile, Cricket, SIMPLE Mobile, Ultra Mobile and Gen Mobile — with prepaid and postpaid plans for bulk distribution.",
};

const CARRIERS = [
  { name: "Verizon", logo: "/assets/img/carriers/verizon.svg", text: "Prepaid and postpaid plans with unlimited options, Mexico calling & texting, and multi-line family plans." },
  { name: "AT&T", logo: "/assets/img/carriers/att.svg", text: "Higher network priority, international calling & roaming, and data-only options." },
  { name: "T-Mobile", logo: "/assets/img/carriers/tmobile.svg", text: "Flexible data tiers, unlimited options, and Mexico cross-border add-ons." },
  { name: "Cricket Wireless", logo: "/assets/img/carriers/cricket.svg", text: "Nationwide coverage on AT&T's network with family plans and flexible data tiers." },
  { name: "SIMPLE Mobile", logo: "/assets/img/carriers/simple.png", text: "Runs on AT&T and T-Mobile networks with mobile data and nationwide 5G." },
  { name: "Ultra Mobile", logo: "/assets/img/carriers/ultra.svg", text: "12-month prepay options with unlimited talk & text and international calling included." },
  { name: "Gen Mobile", logo: "/assets/img/carriers/gen.png", text: "5G and family plans powered by AT&T or T-Mobile, with unlimited international calling." },
  { name: "H2O Wireless", logo: "/assets/img/carriers/h2o.jpg", text: "Annual prepay options with unlimited talk & text, powered by AT&T's nationwide network." },
];

const PLANS = [
  { icon: "circleCheck", title: "Prepaid: pay first, no strings", text: "No credit check, no contract, no surprise bill. The most flexible and affordable option for most single users and students." },
  { icon: "clock", navy: true, title: "Postpaid: the top plans", text: "Higher network priority and the best perks, usually with a credit check and per-line pricing that favors multi-line accounts." },
  { icon: "mail", green: true, title: "Data-only & IoT plans", text: "Dedicated data plans for tablets, hotspots, and IoT/M2M deployments, available across multiple networks." },
];

export default function CarriersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Carrier Partners" }]}
        title={<>Our <span className="gradient-text">Carrier Partners</span></>}
        lead="Activate plans individually or in bulk across the largest networks in the United States — through a single wholesale relationship."
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Carrier Network"
            title="Multi-Carrier Coverage"
            sub="We distribute SIM cards and manage activations across all major U.S. carrier networks, giving your business the flexibility to serve every customer."
          />
          <div className="grid grid-3">
            {CARRIERS.map((c, i) => (
              <div className={`card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={c.name}>
                <div className="carrier-badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.name} loading="lazy" />
                </div>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </div>
            ))}
            <div className="card reveal d2">
              <div className="carrier-badge">
                <span className="card-icon navy"><Icon name="layers" /></span>
              </div>
              <h3>And More</h3>
              <p>Additional prepaid carriers, international roaming plans, travel lines, and data-only plans available on request.</p>
            </div>
          </div>

          <div className="compliance reveal" style={{ marginTop: 48 }}>
            <Icon name="circleAlert" />
            <div>
              <strong>Independent dealer notice.</strong> Alpacala Wireless is an independent wireless dealer and
              distributor. We are not affiliated with, endorsed by, or an agent of any carrier referenced above. Carrier
              names and trademarks are the property of their respective owners and are used solely to describe products
              and services we are authorized to sell.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Plans" title="Prepaid or Postpaid — We Cover Both" />
          <div className="grid grid-3">
            {PLANS.map((p, i) => (
              <div className={`card reveal${i ? " d" + i : ""}`} key={p.title}>
                <div className={`card-icon${p.navy ? " navy" : ""}${p.green ? " green" : ""}`}>
                  <Icon name={p.icon} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a Carrier Mix?"
        text="Tell us which carriers and plans you want to carry — we'll build a wholesale quote tailored to your market."
        ctaLabel="Get Carrier Pricing"
      />
    </>
  );
}
