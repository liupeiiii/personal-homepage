import Link from 'next/link';
import CatSVG from '@/components/ui/Image1';

export default function YoyoCard() {
  return (
    <Link href="/yoyo" className="work-card-link">
      <div
        style={{
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Top text area */}
        <div style={{ padding: '16px 18px 0' }}>
          <div style={{ fontSize: '10px', color: '#999', marginBottom: '6px', letterSpacing: '0.06em' }}>
            🐱 我的猫
          </div>
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

        {/* Bottom-right: cat illustration */}
        <div
          className="cat-wrapper"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: '72%',
          }}
        >
          <CatSVG style={{ height: '100%', width: 'auto', display: 'block' }} />
        </div>
      </div>
    </Link>
  );
}
