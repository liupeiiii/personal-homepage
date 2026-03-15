export default function AboutCard() {
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
        About Me
      </div>

      {/* Avatar placeholder */}
      <div
        style={{
          width: "54px",
          height: "54px",
          background: "#f0f0f0",
          borderRadius: "50%",
          marginBottom: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
        }}
      >
        🙂
      </div>

      <p
        style={{
          fontSize: "11px",
          color: "#555",
          lineHeight: 1.8,
        }}
      >
        有学术研究背景，发表过论文。热爱旅行摄影，走过多个城市。
        业余时间跳舞、做手工，也在用 Vibe Coding 把想法变成现实。
      </p>
    </div>
  );
}
