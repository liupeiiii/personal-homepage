const jobs = [
  { company: "OPPO · 文件管理（轮岗）", role: "软件产品经理", note: "主导17.0规划，驱动产品AI化转型；主导60+项体验优化落地", period: "2025.11–2026.03" },
  { company: "OPPO · 搜索业务组（实习）", role: "搜索策略产品经理", note: "构建被动搜索评测体系；提升被动搜索词条质量", period: "2024.06–2024.09" },
];

export default function WorkCard() {
  return (
    <div style={{ padding: "24px 28px" }}>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          marginBottom: "10px",
          color: "#111",
        }}
      >
        Work
      </div>

      {/* Project name */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: 800,
          color: "#1B3A6B",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          marginBottom: "16px",
        }}
      >
        COLOROS
        <br />
        FILE MGR
      </div>

      {/* Job list */}
      <div style={{ display: "flex", flexDirection: "column", marginBottom: "14px" }}>
        {jobs.map((job, i) => (
          <div
            key={job.company}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "10px 0",
              borderBottom: i < jobs.length - 1 ? "0.5px solid #eee" : "none",
              gap: "12px",
            }}
          >
            <div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#111" }}>
                {job.company}
              </span>
              <span style={{ fontSize: "11px", color: "#777", marginLeft: "8px" }}>
                {job.role} · {job.note}
              </span>
            </div>
            <span
              style={{
                fontSize: "10px",
                color: "#aaa",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}
            >
              {job.period}
            </span>
          </div>
        ))}
      </div>

      {/* Tool bar */}
      <div
        style={{
          paddingTop: "12px",
          borderTop: "0.5px solid #ddd",
          fontSize: "10px",
          color: "#bbb",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Next.js · Tailwind · Vercel
      </div>
    </div>
  );
}
