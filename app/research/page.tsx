'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PaperCard from '@/components/research/PaperCard';
import ProjectCard from '@/components/research/ProjectCard';

const paper = {
  venueBadge: 'APSEC 2024',
  venueFullName: 'Asia-Pacific Software Engineering Conference',
  year: '2024',
  titleZh: '基于大语言模型的 Pull Request 重复检测',
  titleEn: 'LLM-based Duplicate Pull Request Detection',
  background:
    'GitHub 中大量重复的 Pull Request 严重消耗评审者精力，极大降低 PR 评审效率。本研究探索利用大语言模型自动检测重复 PR，降低人工审查负担。',
  method:
    '通过自动 Prompt 优化策略，设计领域适应的最优提示，引导大模型挖掘 Pull Request 核心内容并生成技术目标导向的摘要，结合嵌入方法计算摘要间相似度，实现精准的重复检测。',
  metrics: [
    { number: '0.929', label: 'Precision@1' },
    { number: '0.507', label: 'Recall@1' },
    { number: '+0.7pp', label: 'Precision 提升', accent: true },
    { number: '+0.5pp', label: 'Recall 提升', accent: true },
  ],
  period: '2024.03 — 2024.10',
  pdfHref: '#',
};

const explorationProject = {
  badge: 'LLM 评测',
  title: '全搜结果页满意度自动化评测',
  description:
    '在 OPPO 主导落地 LLM-as-a-Judge 自动化评测工程实践，将人工季度评测升级为模型每日评测，大幅提升业务迭代反馈时效。',
  bullets: [
    '将复杂评测标准工程化为模型逻辑指令，构建自动化评测流程',
    '多轮人机对齐迭代，各维度准确率最终达 90%+',
    '评测成本控制在 10 元/天，频率从季度提升至每日',
  ],
  period: '2026.02 — 2026.03',
  status: '工程实践',
};

const education = [
  {
    school: '中南大学',
    degree: '硕士 · 计算机技术',
    period: '2022.09 — 2025.06',
  },
  {
    school: '中南大学',
    degree: '本科 · 软件工程',
    period: '2018.09 — 2022.06',
  },
];

const metricVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.08 },
  }),
};

const eduVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export default function ResearchPage() {
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
          刘佩 · 学术研究
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
              lineHeight: 1,
              margin: 0,
            }}
          >
            Research
          </h1>
          <p style={{ fontSize: '13px', color: '#999', marginTop: '8px', letterSpacing: '0.04em' }}>
            学术研究 · 1 篇论文 · 1 个探索项目
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
          计算机技术硕士背景，研究方向为大语言模型应用。
          在 APSEC 2024 国际软件工程会议发表论文，
          并在 OPPO 主导落地 LLM 自动化评测工程实践。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ marginTop: '40px', borderTop: '1px solid #111' }}
        />

        {/* ── Section 1: Paper ── */}
        <div style={{ marginTop: '60px' }}>
          <SectionTitle>发表论文</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PaperCard {...paper} />
          </motion.div>
        </div>

        {/* ── Section 2: Exploration project ── */}
        <div style={{ marginTop: '80px', borderTop: '0.5px solid #eee', paddingTop: '60px' }}>
          <SectionTitle>探索项目</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <ProjectCard {...explorationProject} />
          </motion.div>
        </div>

        {/* ── Section 3: Education ── */}
        <div style={{ marginTop: '80px', borderTop: '0.5px solid #eee', paddingTop: '60px' }}>
          <SectionTitle>学术背景</SectionTitle>

          <div
            className="research-edu"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#111',
            }}
          >
            {education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={eduVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ background: '#fff', padding: '32px' }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#111',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {edu.school}
                </div>
                <div style={{ fontSize: '13px', color: '#999', marginTop: '6px' }}>
                  {edu.degree}
                </div>
                <div style={{ fontSize: '11px', color: '#bbb', marginTop: '4px' }}>
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Footer nav ── */}
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
            href="/projects"
            style={{ fontSize: '13px', color: '#111', textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            ← Vibe Coding
          </Link>
          <Link
            href="/about"
            style={{ fontSize: '13px', color: '#999', textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            关于我 →
          </Link>
        </motion.div>
      </div>
    </>
  );
}

/* ── Local helper ── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: '12px',
        fontWeight: 700,
        color: '#111',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '32px',
      }}
    >
      {children}
    </div>
  );
}
