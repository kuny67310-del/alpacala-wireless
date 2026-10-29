"use client";

import { useState } from "react";

export default function FAQ({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              className="faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? 520 : 0 }}>
              <div className="faq-a-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
