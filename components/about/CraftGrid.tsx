const crafts = [
  { index: '01', emoji: '✂️', type: '手工' },
  { index: '02', emoji: '🧵', type: '编织' },
  { index: '03', emoji: '🎨', type: '绘画' },
  { index: '04', emoji: '✂️', type: '手工' },
  { index: '05', emoji: '🧵', type: '编织' },
  { index: '06', emoji: '🎨', type: '绘画' },
];

export default function CraftGrid() {
  return (
    <div
      className="craft-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: '#111',
      }}
    >
      {crafts.map((c) => (
        <div key={c.index} style={{ background: '#fff' }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              background: '#F5F5F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: '#ddd',
            }}
          >
            {c.emoji}
          </div>
          <div
            style={{
              padding: '12px 14px',
              borderTop: '0.5px solid #eee',
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#ccc' }}>
              作品 {c.index}（待上传）
            </div>
            <div style={{ fontSize: '10px', color: '#ddd', marginTop: '2px' }}>
              {c.type}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
