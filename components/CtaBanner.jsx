import Link from "next/link";
import Icon from "./Icon";

export default function CtaBanner({ title, text, ctaLabel, href = "/contact" }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link href={href} className="btn btn-light btn-lg">
            {ctaLabel}
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
