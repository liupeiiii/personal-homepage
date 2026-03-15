interface ProjectCardProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  period: string;
  status?: string;
}

export default function ProjectCard({
  badge,
  title,
  description,
  bullets,
  period,
  status = '工程实践',
}: ProjectCardProps) {
  return (
    <div style={{ border: '1px solid #111', padding: '36px 40px' }}>
      {/* Badge row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <span
          style={{
            border: '1px solid #111',
            fontSize: '11px',
            fontWeight: 700,
            padding: '3px 10px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#111',
          }}
        >
          {badge}
        </span>
        <span style={{ fontSize: '11px', color: '#bbb', marginLeft: 'auto' }}>
          {status}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '22px',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#111',
          lineHeight: 1.2,
          margin: '0 0 12px',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.8, margin: '0 0 20px' }}>
        {description}
      </p>

      {/* Bullets */}
      <div>
        {bullets.map((b, i) => (
          <div key={i} style={{ fontSize: '13px', lineHeight: 1.8, marginTop: i > 0 ? '6px' : 0 }}>
            <span style={{ color: '#C0392B' }}>·</span>{' '}
            <span style={{ color: '#444' }}>{b}</span>
          </div>
        ))}
      </div>

      {/* Period */}
      <div
        style={{
          marginTop: '24px',
          borderTop: '0.5px solid #eee',
          paddingTop: '16px',
          fontSize: '11px',
          color: '#bbb',
        }}
      >
        {period}
      </div>
    </div>
  );
}
