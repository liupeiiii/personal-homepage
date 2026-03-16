'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const contacts = [
  { label: 'EMAIL', value: 'pei_3164@163.com', href: 'mailto:pei_3164@163.com' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/（待填入）', href: '#' },
  { label: 'GITHUB', value: 'github.com/liupeiiii', href: 'https://github.com/liupeiiii' },
];

export default function ContactPage() {
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
          background: '#111',
          borderBottom: '0.5px solid #333',
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
            color: '#aaa',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          ← 返回首页
        </Link>
        <span
          style={{
            fontSize: '12px',
            color: '#666',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          刘佩 · 联系我
        </span>
      </motion.nav>

      {/* ── Page body ── */}
      <div
        style={{
          minHeight: 'calc(100vh - 52px)',
          background: '#111',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px 60px', width: '100%' }}>

          {/* ── Title ── */}
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
                color: '#fff',
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              一起
              <br />
              聊聊
            </h1>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                marginTop: '12px',
                letterSpacing: '0.04em',
              }}
            >
              无论是产品想法、合作机会，还是只是想打个招呼
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            style={{ marginTop: '40px', borderTop: '1px solid #333' }}
          />

          {/* ── Contact items ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginTop: '60px' }}
          >
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '32px 0',
                  borderBottom: '0.5px solid #222',
                  textDecoration: 'none',
                  borderTop: i === 0 ? '0.5px solid #222' : undefined,
                  cursor: c.href === '#' ? 'default' : 'pointer',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#555',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(18px, 2.5vw, 28px)',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {c.value}
                  </div>
                </div>
                {c.href !== '#' && (
                  <span style={{ fontSize: '20px', color: '#444' }}>→</span>
                )}
              </a>
            ))}
          </motion.div>

          {/* ── Footer nav ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              marginTop: '80px',
              borderTop: '1px solid #333',
              paddingTop: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link
              href="/"
              style={{ fontSize: '13px', color: '#666', textDecoration: 'none', letterSpacing: '0.02em' }}
            >
              ← 返回首页
            </Link>
            <Link
              href="/about"
              style={{ fontSize: '13px', color: '#444', textDecoration: 'none', letterSpacing: '0.02em' }}
            >
              关于我 →
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
