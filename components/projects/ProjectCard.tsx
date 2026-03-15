import ProjectScreenshot from './ProjectScreenshot';

interface Tag {
  label: string;
  filled?: boolean;
}

interface Highlight {
  text: string;
}

interface ProjectCardProps {
  index: string;           // "01" "02" "03"
  name: string;
  tags: Tag[];
  description: string;
  highlights: Highlight[];
  duration: string;
  href?: string;
  screenshotSrc?: string;
  screenshotSiteLabel?: string;
  placeholder?: boolean;   // dims everything for "coming soon" cards
}

export default function ProjectCard({
  index,
  name,
  tags,
  description,
  highlights,
  duration,
  href = '#',
  screenshotSrc,
  screenshotSiteLabel,
  placeholder = false,
}: ProjectCardProps) {
  const dim = placeholder ? '#ddd' : undefined;

  return (
    <div style={{ background: '#fff' }}>
      {/* Screenshot */}
      <ProjectScreenshot
        src={screenshotSrc}
        siteLabel={screenshotSiteLabel}
        alt={name}
      />

      {/* Text area */}
      <div style={{ padding: '24px' }}>
        {/* Index */}
        <div
          style={{
            fontSize: '11px',
            color: dim ?? '#bbb',
            letterSpacing: '0.1em',
            marginBottom: '8px',
          }}
        >
          {index}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: dim ?? '#111',
          }}
        >
          {name}
        </div>

        {/* Tags */}
        {!placeholder && (
          <div
            style={{
              marginTop: '8px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag.label}
                style={{
                  fontSize: '10px',
                  padding: '2px 8px',
                  letterSpacing: '0.04em',
                  background: tag.filled ? '#111' : 'transparent',
                  color: tag.filled ? '#fff' : '#111',
                  border: tag.filled ? 'none' : '1px solid #111',
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p
          style={{
            marginTop: '12px',
            fontSize: '12px',
            color: dim ?? '#555',
            lineHeight: 1.75,
            margin: '12px 0 0',
          }}
        >
          {description}
        </p>

        {/* Tech highlights */}
        {!placeholder && highlights.length > 0 && (
          <div style={{ marginTop: '12px' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ fontSize: '12px', lineHeight: 1.8 }}>
                <span style={{ color: '#C0392B' }}>·</span>{' '}
                <span style={{ color: '#555' }}>{h.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: '20px',
            borderTop: '0.5px solid #eee',
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '11px', color: dim ?? '#bbb' }}>
            {duration}
          </span>
          {!placeholder ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#111',
                textDecoration: 'none',
              }}
            >
              访问网站 →
            </a>
          ) : (
            <span style={{ fontSize: '11px', color: '#ddd' }}>
              开发中 · 敬请期待
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
