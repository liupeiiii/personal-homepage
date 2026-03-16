import Link from 'next/link';

export default function AboutCard() {
  return (
    <Link href="/about" className="work-card-link">
      <div style={{ padding: '24px 22px' }}>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            marginBottom: '14px',
            color: '#111',
          }}
        >
          About Me
        </div>

        {/* Avatar placeholder */}
        <div
          style={{
            width: '54px',
            height: '54px',
            background: '#f0f0f0',
            borderRadius: '50%',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
          }}
        >
          🙂
        </div>

        <p
          style={{
            fontSize: '11px',
            color: '#555',
            lineHeight: 1.8,
          }}
        >
          计算机背景的产品经理，中南大学软件工程本科 +
          <br />
          计算机技术硕士。熟悉 LLM 评测方法论，有 APSEC
          <br />
          国际会议论文发表经历。热爱旅行摄影、跳舞与手工创作，
          <br />
          也在用 Vibe Coding 把想法变成现实。
        </p>
      </div>
    </Link>
  );
}
