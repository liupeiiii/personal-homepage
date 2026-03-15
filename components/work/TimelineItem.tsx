'use client';
import { motion } from 'framer-motion';
import MetricCard from './MetricCard';
import DecisionStory from './DecisionStory';
import ScreenshotBlock from './ScreenshotBlock';

export interface Metric {
  number: string;
  label: string;
}

export interface Bullet {
  keyword: string;
  text: string;
}

export interface TimelineItemProps {
  periodStart: string;
  periodEnd: string;
  company: string;
  role: string;
  project: string;
  metrics: Metric[];
  bullets: Bullet[];
  decisionPlaceholder: string;
  screenshotLabel: string;
  isLast?: boolean;
}

export default function TimelineItem({
  periodStart,
  periodEnd,
  company,
  role,
  project,
  metrics,
  bullets,
  decisionPlaceholder,
  screenshotLabel,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      className="timeline-grid"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}
    >
      {/* ── Left: time axis ── */}
      <div className="timeline-left" style={{ position: 'relative', paddingTop: '4px' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            // Last item: line only reaches past the dot (20px); others go full height
            height: isLast ? '20px' : '100%',
            width: '1px',
            background: '#111',
          }}
        />
        {/* Dot */}
        <div
          style={{
            position: 'absolute',
            right: '-4px',
            top: '8px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#111',
          }}
        />
        {/* Time text */}
        <div
          style={{
            fontSize: '11px',
            color: '#999',
            letterSpacing: '0.02em',
            lineHeight: 1.7,
            paddingRight: '20px',
          }}
        >
          {periodStart}
          <br />—<br />
          {periodEnd}
        </div>
      </div>

      {/* ── Right: content ── */}
      <div
        style={{
          paddingLeft: '40px',
          paddingBottom: isLast ? '40px' : '80px',
        }}
      >
        {/* Company + role header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '0 10px',
          }}
        >
          <span
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: '#111',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {company}
          </span>
          <span
            style={{
              fontSize: '11px',
              border: '1px solid #111',
              padding: '2px 8px',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {role}
          </span>
        </div>

        {/* Project name */}
        <div style={{ fontSize: '13px', color: '#999', marginTop: '6px' }}>
          {project}
        </div>

        {/* Metrics grid */}
        <div
          style={{
            marginTop: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: '#111',
          }}
        >
          {metrics.map((m, i) => (
            <MetricCard key={i} number={m.number} label={m.label} />
          ))}
        </div>

        {/* Bullet points */}
        <div style={{ marginTop: '32px' }}>
          {bullets.map((b, i) => (
            <div
              key={i}
              style={{
                marginTop: i > 0 ? '12px' : 0,
                fontSize: '13px',
                lineHeight: 1.8,
              }}
            >
              <span style={{ color: '#C0392B', marginRight: '2px' }}>·</span>{' '}
              <span style={{ fontWeight: 700, color: '#111' }}>{b.keyword}</span>
              <span style={{ color: '#444' }}>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Decision story */}
        <div style={{ marginTop: '32px' }}>
          <DecisionStory placeholder={decisionPlaceholder} />
        </div>

        {/* Screenshot block */}
        <div style={{ marginTop: '24px' }}>
          <ScreenshotBlock label={screenshotLabel} />
        </div>
      </div>
    </motion.div>
  );
}
