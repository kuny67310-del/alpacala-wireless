export default function SectionHead({ eyebrow, title, sub, left = false }) {
  return (
    <div className={`section-head${left ? " left" : " text-center"}`}>
      <span className={`eyebrow${left ? "" : " centered"}`}>{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );
}
