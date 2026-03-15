interface MetricBadgeProps {
  number: string;
  label: string;
  accent?: boolean; // red highlight for improvement metrics
}

export default function MetricBadge({ number, label, accent = false }: MetricBadgeProps) {
  return (
    <div style={{ background: '#fff', padding: '20px 16px' }}>
      <div
        style={{
          fontSize: '28px',
          fontWeight: 800,
          color: accent ? '#C0392B' : '#111',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {number}
      </div>
      <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
        {label}
      </div>
    </div>
  );
}
