interface StorySectionProps {
  index: string;
  title: string;
  children: React.ReactNode;
}

export default function StorySection({ index, title, children }: StorySectionProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        borderTop: '0.5px solid #eee',
        padding: '40px 0',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          color: '#bbb',
          letterSpacing: '0.1em',
          paddingTop: '6px',
        }}
      >
        {index}
      </div>
      <div>
        <div
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: '#111',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: '#555',
            lineHeight: 1.9,
            maxWidth: '600px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
