'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CatSVG from '@/components/ui/Image1';

const placeholders = [
  { key: 'main', isMain: true },
  { key: '02', label: '照片 02' },
  { key: '03', label: '照片 03' },
  { key: '04', label: '照片 04' },
  { key: '05', label: '照片 05' },
  { key: '06', label: '照片 06' },
];

export default function YoyoPage() {
  return (
    <>
      {/* ── Sticky navbar ── */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#fff',
          borderBottom: '0.5px solid #111',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '13px',
            color: '#111',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          ← 返回首页
        </Link>
        <span
          style={{
            fontSize: '12px',
            color: '#999',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          柚子 · Yoyo
        </span>
      </motion.nav>

      {/* ── Page body ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px 60px' }}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h1
            style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111',
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            柚子
            <br />
            Yoyo
          </h1>
          <p style={{ fontSize: '13px', color: '#999', marginTop: '8px', letterSpacing: '0.04em' }}>
            一岁半 · 狸花猫 · 2023年入住
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            fontSize: '13px',
            color: '#555',
            lineHeight: 1.8,
            maxWidth: '480px',
            marginTop: '16px',
          }}
        >
          家里的小主人，名字叫柚子，英文名 Yoyo。
          狸花猫，一岁半，负责每天提供治愈能量。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ marginTop: '40px', borderTop: '1px solid #111' }}
        />

        {/* Photo section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: '60px 0 32px',
          }}
        >
          相册
        </motion.div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="yoyo-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: '#111',
          }}
        >
          {placeholders.map((p) => (
            <div
              key={p.key}
              style={{
                background: '#F5F5F5',
                aspectRatio: '1/1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {p.isMain ? (
                <>
                  <CatSVG width={60} height={60} style={{ opacity: 0.3 }} />
                  <span style={{ fontSize: '11px', color: '#ccc', letterSpacing: '0.04em' }}>
                    柚子的照片（待上传）
                  </span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '24px', color: '#ddd' }}>🐱</span>
                  <span style={{ fontSize: '11px', color: '#ddd' }}>{p.label}</span>
                </>
              )}
            </div>
          ))}
        </motion.div>

        {/* Upload instructions */}
        <p
          style={{
            marginTop: '24px',
            fontSize: '11px',
            color: '#bbb',
            lineHeight: 1.8,
            borderLeft: '2px solid #eee',
            paddingLeft: '16px',
          }}
        >
          将柚子的照片放入 public/yoyo/ 目录，
          替换占位 div 为 &lt;img src="/yoyo/xxx.jpg" /&gt;
          <br />
          建议正方形裁切，尺寸 800×800px 以上
        </p>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: '80px',
            borderTop: '1px solid #111',
            paddingTop: '40px',
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: '13px',
              color: '#111',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            ← 返回首页
          </Link>
        </motion.div>
      </div>
    </>
  );
}
