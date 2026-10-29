import Link from "next/link";

export default function PageHero({ crumbs = [], title, lead }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              {i < crumbs.length - 1 ? <span className="sep">/</span> : null}
            </span>
          ))}
        </nav>
        <h1 className="section-title">{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
    </section>
  );
}
