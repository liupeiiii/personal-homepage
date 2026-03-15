const items = ["旅行 · 摄影", "跳舞", "手工创作"];

export default function HobbyCard() {
  return (
    <div style={{ padding: "24px 22px" }}>
      {/* Big decorative text */}
      <div
        style={{
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#111",
          marginBottom: "18px",
        }}
      >
        Life
        <br />
        &amp;
        <br />
        Fun
      </div>

      {/* List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#111",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "12px", color: "#333" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
