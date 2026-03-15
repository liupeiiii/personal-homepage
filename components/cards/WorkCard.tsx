const jobs = [
  { company: "公司 A", role: "产品经理", note: "核心成就占位", period: "2023–至今" },
  { company: "公司 B", role: "产品经理", note: "核心成就占位", period: "2022–2023" },
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
        Vibe Coding Portfolio
      </div>

      {/* Job list */}
      <div style={{ display: "flex", flexDirection: "column" }}>
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
    </div>
  );
}
