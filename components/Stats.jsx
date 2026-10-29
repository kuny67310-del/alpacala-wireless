import Counter from "./Counter";

export default function Stats({ items }) {
  return (
    <section className="stats-band section">
      <div className="container">
        <div className="stats-grid">
          {items.map((s, i) => (
            <div className={`reveal${i ? " d" + i : ""}`} key={s.label}>
              <div className="stat-num">
                <Counter value={s.value} decimals={s.decimals || 0} />
                {s.suffix ? <span className="suffix">{s.suffix}</span> : null}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
