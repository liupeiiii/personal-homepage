export default function PhotoPlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '3/4',
        background: '#EBEBEB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <span style={{ fontSize: '32px', color: '#ccc' }}>🌸</span>
      <span style={{ fontSize: '12px', color: '#ccc' }}>个人照片（待上传）</span>
      <span style={{ fontSize: '11px', color: '#ddd', marginTop: '4px' }}>
        建议：旅行或生活感照片
      </span>
    </div>
  );
}
