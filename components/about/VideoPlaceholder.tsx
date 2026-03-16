interface VideoPlaceholderProps {
  label?: string;
  aspectRatio?: string;
  small?: boolean;
}

export default function VideoPlaceholder({
  label = '主视频（待上传）',
  aspectRatio = '16/9',
  small = false,
}: VideoPlaceholderProps) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio,
        background: small ? '#F5F5F5' : '#F0F0F0',
        border: small ? 'none' : '1px dashed #ddd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: small ? '8px' : '12px',
      }}
    >
      {/* CSS triangle play icon */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: small ? '8px solid transparent' : '12px solid transparent',
          borderBottom: small ? '8px solid transparent' : '12px solid transparent',
          borderLeft: small ? '14px solid #ccc' : '20px solid #ccc',
          marginLeft: small ? '3px' : '4px',
        }}
      />
      <span style={{ fontSize: small ? '11px' : '13px', color: '#ccc' }}>{label}</span>
      {!small && (
        <span style={{ fontSize: '11px', color: '#ddd', marginTop: '4px' }}>
          支持 MP4 / 嵌入 bilibili / YouTube 链接
        </span>
      )}
    </div>
  );
}
