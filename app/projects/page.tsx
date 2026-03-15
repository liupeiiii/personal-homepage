'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
  {
    index: '01',
    name: '个人主页',
    tags: [
      { label: '已上线', filled: true },
      { label: 'Next.js' },
      { label: 'Tailwind' },
      { label: 'Vercel' },
      { label: 'Claude Code' },
    ],
    description:
      '从 0 到 1 独立开发的个人主页，包含可拖拽 Bento Grid 布局、极简黑白设计风格、工作经历与学术成果展示。',
    highlights: [
      { text: '可拖拽调整大小的 Bento Grid（原生 JS 实现）' },
      { text: 'Framer Motion 入场动效' },
      { text: 'Vercel 一键部署' },
    ],
    duration: '持续迭代中',
    href: '#',
    screenshotSiteLabel: 'liupei.vercel.app',
    placeholder: false,
  },
  {
    index: '02',
    name: '作品名称（待补充）',
    tags: [],
    description:
      '这里将展示你的第二个 Vibe Coding 作品。可以是小工具、数据可视化、Chrome 插件等。',
    highlights: [],
    duration: '开发中',
    placeholder: true,
  },
  {
    index: '03',
    name: '作品名称（待补充）',
    tags: [],
    description:
      '这里将展示你的第三个 Vibe Coding 作品。可以是小工具、数据可视化、Chrome 插件等。',
    highlights: [],
    duration: '开发中',
    placeholder: true,
  },
];

const stats = [
  { number: '1', label: '已上线作品' },
  { number: 'Claude Code', label: '主要开发工具' },
  { number: '持续更新', label: '作品集状态' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const statVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ProjectsPage() {
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
          刘佩 · Vibe Coding
        </span>
      </motion.nav>

      {/* ── Page body ── */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 40px 60px',
        }}
      >
        {/* Title section */}
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
            Vibe
            <br />
            Coding
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: '#999',
              marginTop: '12px',
              letterSpacing: '0.04em',
            }}
          >
            用 Claude Code 把想法变成现实 · {projects.filter(p => !p.placeholder).length} 个作品
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
            maxWidth: '560px',
            marginTop: '16px',
          }}
        >
          所有项目均通过 Vibe Coding 方式独立完成——
          先定义需求，再用 AI 辅助开发，从想法到部署上线。
          这个网站本身就是第一个作品。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ marginTop: '40px', borderTop: '1px solid #111' }}
        />

        {/* Project grid */}
        <div
          className="projects-grid"
          style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: '#111',
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.index}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="projects-stats"
          style={{
            marginTop: '60px',
            borderTop: '0.5px solid #eee',
            paddingTop: '40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1px',
            background: '#eee',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ background: '#fff', padding: '24px' }}
            >
              <div
                style={{
                  fontSize: s.number.length > 4 ? '18px' : '32px',
                  fontWeight: 800,
                  color: '#111',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.number}
              </div>
              <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: '80px',
            borderTop: '1px solid #111',
            paddingTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href="/work"
            style={{
              fontSize: '13px',
              color: '#111',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            ← 工作经历
          </Link>
          <Link
            href="/research"
            style={{
              fontSize: '13px',
              color: '#999',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            学术研究 →
          </Link>
        </motion.div>
      </div>
    </>
  );
}
