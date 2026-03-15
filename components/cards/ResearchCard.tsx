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
        论文 · APSEC 2024
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
        基于大语言模型的 Pull Request
        <br />
        重复检测
      </p>

      {/* Journal */}
      <p style={{ fontSize: "10px", color: "#aaa", lineHeight: 1.8 }}>
        APSEC 2024 · 国际软件工程会议
        <br />
        Precision@1: 0.929 · Recall@1: 0.507
      </p>
    </div>
  );
}
