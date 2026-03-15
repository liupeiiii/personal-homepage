import MetricBadge from './MetricBadge';

interface Metric {
  number: string;
  label: string;
  accent?: boolean;
}

interface PaperCardProps {
  venueBadge: string;
  venueFullName: string;
  year: string;
  titleZh: string;
  titleEn: string;
  background: string;
  method: string;
  metrics: Metric[];
  period: string;
  pdfHref?: string;
}

export default function PaperCard({
  venueBadge,
  venueFullName,
  year,
  titleZh,
  titleEn,
  background,
  method,
  metrics,
  period,
  pdfHref = '#',
}: PaperCardProps) {
  return (
    <div style={{ border: '1px solid #111', padding: '40px', width: '100%' }}>
      {/* Venue tag row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            background: '#111',
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {venueBadge}
        </span>
        <span
          style={{
            fontSize: '11px',
            color: '#999',
            letterSpacing: '0.02em',
          }}
        >
          {venueFullName}
        </span>
        <span
          style={{
            fontSize: '11px',
            color: '#bbb',
            marginLeft: 'auto',
          }}
        >
          {year}
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: 'clamp(20px, 3vw, 28px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#111',
          lineHeight: 1.2,
          marginBottom: '8px',
          margin: '0 0 8px',
        }}
      >
        {titleZh}
      </h2>
      <p
        style={{
          fontSize: '14px',
          color: '#999',
          marginBottom: '24px',
          margin: '0 0 24px',
        }}
      >
        {titleEn}
      </p>

      {/* Background */}
      <SectionLabel>研究背景</SectionLabel>
      <p
        style={{
          fontSize: '13px',
          color: '#555',
          lineHeight: 1.8,
          maxWidth: '640px',
          margin: '8px 0 0',
          whiteSpace: 'pre-line',
        }}
      >
        {background}
      </p>

      {/* Method */}
      <div style={{ marginTop: '24px' }}>
        <SectionLabel>核心方法</SectionLabel>
        <p
          style={{
            fontSize: '13px',
            color: '#555',
            lineHeight: 1.8,
            maxWidth: '640px',
            margin: '8px 0 0',
            whiteSpace: 'pre-line',
          }}
        >
          {method}
        </p>
      </div>

      {/* Metrics */}
      <div
        style={{
          marginTop: '32px',
          borderTop: '0.5px solid #eee',
          paddingTop: '32px',
        }}
      >
        <SectionLabel style={{ marginBottom: '16px' }}>实验指标</SectionLabel>
        <div
          className="research-metrics"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#eee',
          }}
        >
          {metrics.map((m, i) => (
            <MetricBadge key={i} number={m.number} label={m.label} accent={m.accent} />
          ))}
        </div>
      </div>

      {/* Figure placeholder */}
      <div
        style={{
          marginTop: '32px',
          width: '100%',
          height: '200px',
          background: '#F5F5F5',
          border: '1px dashed #ddd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '24px', color: '#ccc' }}>📄</span>
        <span style={{ fontSize: '12px', color: '#ccc', letterSpacing: '0.04em' }}>
          论文图表 / 方法架构图（待上传）
        </span>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '32px',
          borderTop: '0.5px solid #eee',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '11px', color: '#bbb' }}>{period}</span>
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#111',
            textDecoration: 'none',
          }}
        >
          查看论文 IEEE →
        </a>
      </div>
    </div>
  );
}

/* ── Local helper ── */
function SectionLabel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontSize: '11px',
        fontWeight: 700,
        color: '#111',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
