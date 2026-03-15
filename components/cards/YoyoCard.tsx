import Link from 'next/link';
import YoyoSVG from '@/components/ui/YoyoSVG';

export default function YoyoCard() {
  return (
    <Link href="/yoyo" className="work-card-link">
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top text area */}
        <div style={{ padding: '16px 18px 0' }}>
          <span
            style={{
              fontSize: '10px',
              border: '1px solid #111',
              padding: '2px 8px',
              letterSpacing: '0.06em',
              display: 'inline-block',
              marginBottom: '8px',
            }}
          >
            🐱 我的猫
          </span>
          <div
            style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#111',
              letterSpacing: '-0.01em',
            }}
          >
            柚子 · Yoyo
          </div>
          <div style={{ fontSize: '11px', color: '#999', marginTop: '3px' }}>
            一岁半 · 狸花猫
          </div>
        </div>

        {/* Center: cat illustration */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
          }}
        >
          <YoyoSVG size={72} />
        </div>

        {/* Bottom hint */}
        <div
          style={{
            fontSize: '10px',
            color: '#bbb',
            textAlign: 'right',
            padding: '0 14px 12px',
          }}
        >
          点击查看更多 →
        </div>
      </div>
    </Link>
  );
}
