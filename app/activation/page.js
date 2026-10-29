import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Activation Services — Alpacala Wireless",
  description:
    "SIM and eSIM activation services from Alpacala Wireless. New activations, bulk batch activation, number porting, plan upgrades and renewals across major U.S. carriers.",
};

const SERVICES = [
  { icon: "activity", title: "New Activations", text: "Start new lines on any carrier we carry — individually or in bulk, with fast turnaround." },
  { icon: "calendar", alt: true, title: "Bulk Batch Activation", text: "Process thousands of SIM cards at once with verified activation reports and zero manual work." },
  { icon: "squarePlus", green: true, title: "SIM & eSIM Setup", text: "Physical SIM and eSIM activations configured and verified before they reach your customers." },
  { icon: "arrowLeftRight", amber: true, title: "Number Porting", text: "Keep numbers when switching carriers — port-ins processed in bulk with instant delivery." },
  { icon: "repeat", navy: true, title: "Account Transfers", text: "Move lines between accounts without the headache — handled for you in bulk." },
  { icon: "arrowRightLeft", alt: true, title: "Renewals & Plan Changes", text: "Process renewals, upgrades, and plan switches in bulk with transparent reporting." },
];

const STEPS = [
  { n: "01", title: "Provide Details", text: "Share the SIM cards, carrier selection, plan specs, and any port-in numbers." },
  { n: "02", title: "We Process", text: "Our team executes activations individually or in batch on your chosen carriers." },
  { n: "03", title: "Verify & Report", text: "Every line is verified active, with a full report of numbers, plans, and status." },
  { n: "04", title: "Deliver", text: "Activated inventory ships — or digital eSIM profiles are delivered — ready to use." },
];

const FAQS = [
  { q: "Which carriers can you activate?", a: "We activate across major U.S. carrier networks including Verizon, AT&T, T-Mobile, Cricket, SIMPLE Mobile, Ultra Mobile, and Gen Mobile — covering new lines, SIM cards, eSIM, number transfers, and plan changes." },
  { q: "Can I keep my customers' phone numbers when switching?", a: "Yes. We process port-ins in bulk, moving numbers between carriers while preserving them for your customers." },
  { q: "How long does batch activation take?", a: "Most standard batch activations complete within a few business days depending on volume and carrier. We confirm a precise timeline with every order." },
  { q: "Do you provide verification and reporting?", a: "Absolutely. Every batch comes with a detailed report of numbers, plans, activation status, and any exceptions — so you always know exactly what was delivered." },
  { q: "Is a credit check required?", a: "Not for prepaid. Prepaid plans have no credit check and no contract. Postpaid plans usually require a credit check." },
];

export default function ActivationPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Activation Services" }]}
        title={<>Activation Services, <span className="gradient-text">Handled End-to-End</span></>}
        lead="We activate SIM cards and eSIMs on your behalf — one line or one hundred thousand. Our team manages new activations, batch processing, number porting, plan changes, and renewals."
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What We Can Do For You"
            title="Activation & Management Services"
            sub="Reference the services below to understand exactly how we handle your wireless activation work."
          />
          <div className="grid grid-3">
            {SERVICES.map((s, i) => (
              <div className={`card reveal${i ? " d" + (i % 3) : ""}`} key={s.title}>
                <div className={`card-icon${s.alt ? " alt" : ""}${s.green ? " green" : ""}${s.amber ? " amber" : ""}${s.navy ? " navy" : ""}`}>
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="How Activation Works" title="A Turnkey Activation Workflow" sub="You place the order — we take care of the rest." />
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
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Flexible Options</span>
            <h2 className="section-title">Individual or Bulk — We Handle Both</h2>
            <p style={{ color: "var(--muted)" }}>
              Whether you need a single line activated for a customer or a full-scale batch for inventory, our process
              scales without friction.
            </p>
            <div className="check-list" style={{ marginTop: 28 }}>
              {[
                ["Single-line activations", "On-demand activations for retail and customer requests."],
                ["Batch activations", "Automated bulk processing with a verified success report."],
                ["eSIM provisioning", "Digital SIM profiles delivered instantly, at scale."],
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
              <div className="tag"><span className="chip" /> Activation Report</div>
              <h4>What Every Batch Includes</h4>
              <p style={{ marginBottom: 20 }}>A clear summary of what each batch activation delivers back to your team.</p>
              <div className="order-line"><span>Line status</span><strong>Activated / pending, per line</strong></div>
              <div className="order-line"><span>Port-ins</span><strong>Confirmed transfers</strong></div>
              <div className="order-line"><span>eSIM profiles</span><strong>Delivered digitally</strong></div>
              <div className="order-line"><span>Exceptions</span><strong>Flagged and explained</strong></div>
              <div className="order-total"><span>Delivery</span><strong>Report + activated inventory</strong></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "100%" }} /></div>
              <div className="progress-caption">Every activation verified before handoff</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="FAQs" title="Activation Questions, Answered" />
          <FAQ items={FAQS} />
        </div>
      </section>

      <CtaBanner
        title="Let Us Handle Your Activations"
        text="Free up your team and scale your wireless business with turnkey activation services."
        ctaLabel="Talk to Sales"
      />
    </>
  );
}
