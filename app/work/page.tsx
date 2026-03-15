'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TimelineItem, { type TimelineItemProps } from '@/components/work/TimelineItem';

const experiences: Omit<TimelineItemProps, 'isLast'>[] = [
  {
    periodStart: '2025.11',
    periodEnd: '2026.03',
    company: 'OPPO · 文件管理（半年轮岗）',
    role: '软件产品经理',
    project: 'ColorOS 文件管理 17.0 规划 / 16.1 验收',
    metrics: [
      { number: '60+', label: '体验优化落地' },
      { number: '4大', label: 'AI 核心场景' },
      { number: '17.0', label: 'AI 功能矩阵规划' },
    ],
    bullets: [
      {
        keyword: '17.0 规划　',
        text: '主导 ColorOS 文管 17.0 规划，通过数据洞察与用户调研定义超级用户画像及 4 大核心场景，规划智能重命名、AI 搜索、智能推荐等 AI 功能矩阵，驱动产品从「管理文件」向「理解知识」转型。',
      },
      {
        keyword: '16.1 验收　',
        text: '覆盖内部验收、功能 showcase、可用性测试、beta 试用等多阶段，识别体验问题并决策优先级，主导 60+ 项体验优化落地。',
      },
      {
        keyword: '基础优化　',
        text: '重新定义核心业务指标层级，推动数据报表重构与埋点补齐，基于用户反馈识别高价值需求转化为月更需求。',
      },
    ],
    decisionPlaceholder:
      '为什么选择 AI 搜索而非其他方向？\n你的核心决策逻辑是什么？（待补充）',
    screenshotLabel: '项目截图 / 流程图（待上传）',
  },
  {
    periodStart: '2024.06',
    periodEnd: '2024.09',
    company: 'OPPO · 搜索业务组（实习）',
    role: '搜索策略产品经理',
    project: '浏览器 / 全搜被动搜索增长项目',
    metrics: [
      { number: '62.4%', label: '词条低质率降低' },
      { number: '100w/d', label: '搜索 PV 预估提升' },
      { number: '12个', label: '报表需求创建' },
    ],
    bullets: [
      {
        keyword: '基础能力完善　',
        text: '进行被动搜索链路梳理与内容库数据摸底，制定 4 个维度的词条体验评测标准，创建 12 个报表需求，完成从标准制定到正式标注的完整流程。',
      },
      {
        keyword: '体验提升　',
        text: '针对低质词条问题，分场景根因分析，通过人工审核流程缩紧、低质模型优化、算法召回排序链路优化等多项策略，词条低质率降低 62.4%。',
      },
      {
        keyword: '搜索增长　',
        text: '从已有场景优化放量、新场景探索、算法推荐优化等多维度拆解增长策略，探索信息流列表页新增相关搜索，预估搜索 PV 提升 100w/d。',
      },
    ],
    decisionPlaceholder:
      '如何确定低质率优化的策略优先级？\n决策依据是什么？（待补充）',
    screenshotLabel: '项目截图 / 评测体系文档（待上传）',
  },
  {
    periodStart: '2026.02',
    periodEnd: '2026.03',
    company: 'OPPO · 全搜结果页满意度评测',
    role: 'AI 评测探索项目',
    project: 'LLM 自动化评测方案落地',
    metrics: [
      { number: '90%+', label: '各维度评测准确率' },
      { number: '10元/天', label: '成本控制' },
      { number: '季度→每日', label: '评测频率提升' },
    ],
    bullets: [
      {
        keyword: '方案设计　',
        text: '将复杂评测标准深度解构并工程化为模型逻辑指令，构建集数据预处理、API 调度与多维指标分析于一体的自动化评测流程。',
      },
      {
        keyword: '人机对齐　',
        text: '通过多轮人机对齐，系统性识别并解决评分标准模糊导致的人机分歧，迭代优化模型评测标准，各维度准确率最终达 90%+。',
      },
      {
        keyword: '成本与效率　',
        text: '评测频率由人工季度评测提升为模型每日评测，成本控制在 10 元/天，大幅降低人力成本，极大提升业务迭代反馈时效。',
      },
    ],
    decisionPlaceholder:
      '为什么选择 LLM-as-a-Judge 方案？\n评测框架的核心设计决策是什么？（待补充）',
    screenshotLabel: '评测流程架构图 / 准确率对比图（待上传）',
  },
];

export default function WorkPage() {
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
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
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
          刘佩 · 工作经历
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
          transition={{ duration: 0.5, delay: 0.1 }}
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
            Work
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: '#999',
              marginTop: '8px',
              letterSpacing: '0.04em',
            }}
          >
            工作经历 · 3段
          </p>
          <div style={{ marginTop: '40px', borderTop: '1px solid #111' }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ marginTop: '60px' }}>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              {...exp}
              isLast={i === experiences.length - 1}
            />
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
          <Link
            href="/projects"
            style={{
              fontSize: '13px',
              color: '#999',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Vibe Coding →
          </Link>
        </motion.div>
      </div>
    </>
  );
}
