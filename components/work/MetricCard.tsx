interface MetricCardProps {
  number: string;
  label: string;
}

export default function MetricCard({ number, label }: MetricCardProps) {
  return (
    <div style={{ background: '#fff', padding: '20px 16px' }}>
      <div
        style={{
          fontSize: '32px',
          fontWeight: 800,
          color: '#111',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontSize: '11px',
          color: '#999',
          marginTop: '6px',
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}
