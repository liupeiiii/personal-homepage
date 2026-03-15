import YoyoSVG from '@/components/ui/YoyoSVG';

const tags = ["互联网 PM", "AI 评测", "Vibe Coding", "旅行摄影", "跳舞", "手工"];

export default function HeroCard() {
  return (
    <div
      style={{
        padding: "36px 32px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Avatar — 绝对定位于右下角 */}
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

      {/* 小柚子装饰 — 右下角，半透明 */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "16px",
          pointerEvents: "none",
        }}
      >
        <YoyoSVG size={40} opacity={0.15} />
      </div>

      {/* 文字内容 */}
      <div style={{ position: "relative" }}>
        {/* 大字标题 */}
        <div style={{ marginBottom: "20px" }}>
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

        {/* 简介（合并 About 内容） */}
        <p
          style={{
            fontSize: "12px",
            color: "#777",
            lineHeight: 1.85,
            maxWidth: "220px",
            margin: 0,
          }}
        >
          OPPO · AI 评测产品经理方向
          <br />
          计算机技术硕士 · 中南大学软件工程
          <br />
          热爱用产品思维解决真实问题，
          <br />
          相信技术与人文可以共存。
        </p>
      </div>

      {/* 标签 — 固定左下角 */}
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
