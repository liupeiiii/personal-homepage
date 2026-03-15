interface DecisionStoryProps {
  placeholder: string;
}

export default function DecisionStory({ placeholder }: DecisionStoryProps) {
  return (
    <div
      style={{
        background: '#F9F9F9',
        borderLeft: '3px solid #111',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <span style={{ fontSize: '20px', flexShrink: 0, lineHeight: 1.4 }}>💡</span>
      <div>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}
        >
          产品决策故事
        </div>
        <p
          style={{
            fontSize: '12px',
            color: '#bbb',
            lineHeight: 1.7,
            fontStyle: 'italic',
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {placeholder}
        </p>
      </div>
    </div>
  );
}
