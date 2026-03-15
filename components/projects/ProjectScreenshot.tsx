interface ProjectScreenshotProps {
  /** Pass a real src to show an image; omit for placeholder */
  src?: string;
  alt?: string;
  siteLabel?: string;
}

export default function ProjectScreenshot({
  src,
  alt = '',
  siteLabel,
}: ProjectScreenshotProps) {
  const common: React.CSSProperties = {
    width: '100%',
    aspectRatio: '16/9',
    borderBottom: '0.5px solid #111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    overflow: 'hidden',
  };

  if (src) {
    return (
      <div style={common}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }

  if (siteLabel) {
    return (
      <div style={{ ...common, background: '#F0F0F0' }}>
        <span style={{ fontSize: '13px', color: '#bbb', letterSpacing: '0.04em' }}>
          {siteLabel}
        </span>
      </div>
    );
  }

  return (
    <div style={{ ...common, background: '#F9F9F9', border: '1px dashed #ddd' }}>
      <span style={{ fontSize: '24px', color: '#ccc' }}>📸</span>
      <span style={{ fontSize: '12px', color: '#ccc', letterSpacing: '0.04em' }}>
        截图待上传
      </span>
    </div>
  );
}
