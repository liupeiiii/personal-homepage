export default function ResearchCard() {
  return (
    <div style={{ padding: "24px 22px" }}>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          marginBottom: "14px",
          color: "#111",
        }}
      >
        Research
      </div>

      {/* Red eyebrow */}
      <div
        style={{
          fontSize: "9px",
          fontWeight: 700,
          color: "#C0392B",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        论文 · 2023
      </div>

      {/* Paper title */}
      <p
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#111",
          lineHeight: 1.5,
          marginBottom: "8px",
        }}
      >
        论文标题：研究方向一句话概括
      </p>

      {/* Journal */}
      <p style={{ fontSize: "10px", color: "#aaa" }}>期刊名称</p>
    </div>
  );
}
