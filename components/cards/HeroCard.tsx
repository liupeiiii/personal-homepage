const tags = ["互联网 PM", "AI 评测", "Vibe Coding", "旅行摄影", "跳舞", "手工"];

export default function HeroCard() {
  return (
    // 不加 overflow:hidden（cell wrapper 已处理），不加 z-index，
    // 避免意外创建新层叠上下文而遮挡分隔条
    <div
      style={{
        padding: "36px 32px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Avatar — 绝对定位于右下角，无 z-index、无 pointer-events 限制，
          让 CSS :hover 正常触发；分隔条靠 z-index:50 保证在上层 */}
      <div
        className="avatar-wrapper"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "68%",
        }}
      >
        <img
          src="/avatar.svg"
          alt=""
          style={{ height: "100%", width: "auto", display: "block" }}
        />
      </div>

      {/* 文字内容 — 靠 DOM 顺序在 avatar 之后渲染，自然叠于上方 */}
      <div style={{ position: "relative" }}>
        <div style={{ marginBottom: "24px" }}>
          {["你好，", "我是刘佩", "产品经理"].map((line) => (
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

        <p
          style={{
            fontSize: "12px",
            color: "#777",
            lineHeight: 1.8,
            maxWidth: "220px",
          }}
        >
          OPPO · 产品经理
          <br />
          计算机技术硕士 · 中南大学
          <br />
          热爱用产品思维解决真实问题，相信技术与人文可以共存。
        </p>
      </div>

      {/* 标签 — 固定左下角，宽度限制不与插画重叠 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginTop: "auto",
          paddingTop: "20px",
          maxWidth: "55%",
          position: "relative",
        }}
      >
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
