const CARRIERS = [
  { name: "Verizon", src: "/assets/img/carriers/verizon.svg" },
  { name: "AT&T", src: "/assets/img/carriers/att.svg" },
  { name: "T-Mobile", src: "/assets/img/carriers/tmobile.svg" },
  { name: "Cricket Wireless", src: "/assets/img/carriers/cricket.svg" },
  { name: "SIMPLE Mobile", src: "/assets/img/carriers/simple.png" },
  { name: "Ultra Mobile", src: "/assets/img/carriers/ultra.svg" },
  { name: "Gen Mobile", src: "/assets/img/carriers/gen.png" },
];

export default function CarrierStrip() {
  return (
    <section className="carrier-strip">
      <div className="container carrier-strip-inner">
        <span className="carrier-strip-label">Works across major U.S. carrier networks</span>
        <div className="carrier-list">
          {CARRIERS.map((c) => (
            <span className="carrier-logo" key={c.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.name} loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
