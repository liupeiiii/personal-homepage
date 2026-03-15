const highlighted = ["产品规划", "LLM评测", "Vibe Coding"];
const normal = ["用户研究", "数据分析", "AB实验", "竞品分析", "原型设计", "需求文档", "指标体系构建", "增长策略"];
const tools = ["Python", "SQL", "Figma", "Claude Code"];

export default function SkillsCard() {
  return (
    <div style={{ padding: "24px 28px" }}>
      <div
        style={{
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "14px",
          color: "#111",
        }}
      >
        工具 &amp; 技能
      </div>

      {/* Skills line */}
      <div
        style={{
          fontSize: "13px",
          color: "#444",
          lineHeight: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: "0 12px",
        }}
      >
        {highlighted.map((s) => (
          <span key={s} style={{ color: "#C0392B", fontWeight: 700 }}>
            {s}
          </span>
        ))}
        {normal.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      {/* Tool bar */}
      <div
        style={{
          marginTop: "14px",
          paddingTop: "12px",
          borderTop: "0.5px solid #ddd",
          fontSize: "10px",
          color: "#bbb",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {tools.join(" · ")}
      </div>
    </div>
  );
}
