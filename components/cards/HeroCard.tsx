const tags = ["互联网 PM", "学术研究", "VIBE CODING", "旅行摄影", "跳舞"];

export default function HeroCard() {
  return (
    <div style={{ padding: "36px 32px", height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Big title */}
      <div style={{ marginBottom: "24px" }}>
        {["你好，", "我是 Betty", "产品经理"].map((line) => (
          <div
            key={line}
            style={{
              fontSize: "clamp(38px, 4vw, 52px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#111",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "12px",
          color: "#777",
          lineHeight: 1.8,
          marginBottom: "auto",
          maxWidth: "300px",
        }}
      >
        互联网 / 移动产品方向，1–3 年经验。
        <br />
        热爱用产品思维解决真实问题，相信技术与人文可以共存。
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              border: "1px solid #111",
              padding: "4px 10px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
