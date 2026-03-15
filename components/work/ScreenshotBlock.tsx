interface ScreenshotBlockProps {
  label?: string;
}

export default function ScreenshotBlock({
  label = '项目截图 / 流程图（待上传）',
}: ScreenshotBlockProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '280px',
        background: '#F5F5F5',
        border: '1px dashed #ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <span style={{ fontSize: '24px', color: '#ccc' }}>📸</span>
      <span
        style={{
          fontSize: '12px',
          color: '#ccc',
          letterSpacing: '0.04em',
        }}
      >
        {label}
      </span>
    </div>
  );
}
