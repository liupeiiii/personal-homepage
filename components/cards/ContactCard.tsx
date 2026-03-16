import Link from 'next/link';

const links = [
  { label: "pei_3164@163.com",           href: "mailto:pei_3164@163.com" },
  { label: "https://github.com/liupeiiii", href: "https://github.com/liupeiiii" },
];

export default function ContactCard() {
  return (
    <Link
      href="/contact"
      style={{
        display: 'block',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        style={{
          padding: "24px 22px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#111",
          transition: 'background 0.15s',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "12px",
          }}
        >
          CONTACT
        </div>

        {/* CTA */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "auto",
          }}
        >
          一起
          <br />
          聊聊 →
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "20px" }}>
          {links.map((l) => (
            <span
              key={l.label}
              style={{
                fontSize: "11px",
                color: "#aaa",
              }}
            >
              → {l.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
