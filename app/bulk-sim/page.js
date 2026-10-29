import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Bulk SIM Cards — Alpacala Wireless",
  description:
    "Buy SIM cards in bulk from Alpacala Wireless. Volume pricing, multi-carrier SIM cards, batch activation, fast shipping and dedicated dealer support.",
};

const STEPS = [
  { n: "01", title: "Requirements", text: "Share volume, carrier mix, SIM format, activation type, and delivery timeline." },
  { n: "02", title: "Quote & Approval", text: "Receive wholesale pricing and a clear activation & shipping schedule." },
  { n: "03", title: "Procure & Activate", text: "We source SIM cards and process batch activations on your chosen carriers." },
  { n: "04", title: "Ship & Repeat", text: "Activated inventory ships to your door, ready to distribute or deploy." },
];

const TIERS = [
  { name: "Starter", desc: "For small retailers and resellers getting started.", note: "100 – 1,000 SIM cards", featured: false, btn: "outline", items: ["Single or multi-carrier options", "Batch activation included", "Standard shipping", "Email support"] },
  { name: "Growth", desc: "For growing chains and platforms scaling volume.", note: "1,000 – 25,000 SIM cards", featured: true, btn: "primary", items: ["Everything in Starter", "Dedicated account manager", "Priority batch activation", "Marketing & promo support"] },
  { name: "Enterprise", desc: "For MVNOs, IoT fleets, and nationwide programs.", note: "25,000+ SIM cards", featured: false, btn: "dark", items: ["Everything in Growth", "Custom pricing & contracts", "API & eSIM provisioning", "24/7 priority support"] },
];

const FAQS = [
  { q: "What is the minimum order quantity?", a: "Our standard minimum is 100 SIM cards. For enterprise programs, MVNO launches, and IoT deployments we offer custom terms — reach out and we'll tailor a quote to your volume." },
  { q: "Can I mix carriers in a single order?", a: "Yes. You can split a single order across multiple carriers and plans. We consolidate everything into one quote, one shipment, and one activation report." },
  { q: "Do you activate the SIM cards before shipping?", a: "That's our core service. We process batch activations so your SIM cards arrive ready to sell or deploy. You can also order unactivated SIM cards and activate them later through us." },
  { q: "How long does delivery take?", a: "Timelines depend on volume, carrier mix, and activation scope. Standard bulk orders ship within a few business days; we confirm an exact schedule on every quote." },
  { q: "Are your SIM cards for resale or internal use?", a: "Both. Retailers and dealers resell them to end customers, while enterprises and IoT companies deploy them internally. We support both models with appropriate pricing and support." },
];

export default function BulkSimPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Bulk SIM Cards" }]}
        title={<>Bulk SIM Cards, <span className="gradient-text">Activated &amp; Ready to Sell</span></>}
        lead="Source prepaid and postpaid SIM cards from multiple major carriers in any volume. We procure, activate, and ship — so your inventory arrives ready for your customers."
      />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Bulk SIM Distribution</span>
            <h2 className="section-title">One Partner, Every Carrier</h2>
            <p style={{ color: "var(--muted)" }}>
              Stop juggling vendors. Order SIM cards across all major U.S. carrier networks through a single wholesale
              relationship. Choose physical SIM cards or eSIMs, pick your carriers and plans, and we handle procurement
              and activation end-to-end.
            </p>
            <div className="check-list" style={{ marginTop: 28 }}>
              {[
                ["Physical SIM & eSIM options", "Standard nano-SIM, triple-cut SIM, and eSIM provisioning in bulk."],
                ["Flexible volumes", "From a few hundred units to enterprise-scale rollouts."],
                ["Wholesale pricing tiers", "Volume-based pricing that improves as you scale."],
                ["Nationwide shipping", "Fast, trackable delivery across the United States."],
              ].map(([h, p]) => (
                <div className="check-item" key={h}>
                  <span className="tick"><Icon name="check" strokeWidth={3} /></span>
                  <div><h4>{h}</h4><p>{p}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="media reveal d1">
            <div className="media-frame">
              <div className="tag"><span className="chip" /> What&apos;s Included</div>
              <h4>Every Bulk Order Includes</h4>
              <p style={{ marginBottom: 20 }}>Everything you need to receive activated inventory that is ready to distribute.</p>
              <div className="order-line"><span>SIM formats</span><strong>Nano-SIM · triple-cut · eSIM</strong></div>
              <div className="order-line"><span>Carrier mix</span><strong>Single or multi-network</strong></div>
              <div className="order-line"><span>Activation</span><strong>Batch, before shipping</strong></div>
              <div className="order-line"><span>Reporting</span><strong>Full activation report</strong></div>
              <div className="order-line"><span>Shipping</span><strong>Nationwide, tracked</strong></div>
              <div className="order-total"><span>Minimum order</span><strong>100 units</strong></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "100%" }} /></div>
              <div className="progress-caption">Delivered activated and ready to sell</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="The Process" title="From Quote to Delivery in Four Steps" sub="A clear, repeatable workflow designed for business buyers." />
          <div className="grid grid-4 steps">
            {STEPS.map((s, i) => (
              <div className={`step reveal${i ? " d" + i : ""}`} key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Volume Pricing"
            title="Wholesale Pricing Tiers"
            sub="Indicative volume tiers. Final pricing depends on carrier mix, plan selection, and activation requirements."
          />
          <div className="tier-grid">
            {TIERS.map((t, i) => (
              <div className={`tier reveal${i ? " d" + i : ""}${t.featured ? " featured" : ""}`} key={t.name}>
                {t.featured ? <div className="badge-pop">Most Popular</div> : null}
                <div className="tier-name">{t.name}</div>
                <div className="tier-desc">{t.desc}</div>
                <div className="tier-price">Custom<small> / unit</small></div>
                <div className="tier-note">{t.note}</div>
                <ul>
                  {t.items.map((it) => (
                    <li key={it}><Icon name="check" /> {it}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn btn-${t.btn} btn-block`}>Request Quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Product Details" title="SIM Card Specifications" />
          <div className="spec-table-wrap reveal">
            <table className="spec-table">
              <thead>
                <tr><th>Specification</th><th>Details</th></tr>
              </thead>
              <tbody>
                <tr><td>SIM format</td><td>Nano-SIM (4FF), triple-cut (Standard / Micro / Nano), eSIM</td></tr>
                <tr><td>Network type</td><td>GSM / LTE / 5G across supported carrier networks</td></tr>
                <tr><td>Carrier options</td><td>Verizon, AT&amp;T, T-Mobile, Cricket, SIMPLE Mobile, Ultra Mobile, Gen Mobile, and more</td></tr>
                <tr><td>Activation</td><td>Individual or bulk batch activation, processed before shipping</td></tr>
                <tr><td>Plan options</td><td>Prepaid and postpaid plans, data-only, and custom enterprise plans</td></tr>
                <tr><td>Minimum order</td><td>100 units (custom terms available for enterprise)</td></tr>
                <tr><td>Shipping</td><td>Nationwide, with tracking and expedited options</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="FAQs" title="Bulk SIM Questions, Answered" />
          <FAQ items={FAQS} />
        </div>
      </section>

      <CtaBanner
        title="Need a Volume Quote?"
        text="Tell us your volume, carrier mix, and timeline — we'll respond with wholesale pricing within one business day."
        ctaLabel="Request a Quote"
      />
    </>
  );
}
