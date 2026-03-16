'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PhotoPlaceholder from '@/components/about/PhotoPlaceholder';
import StorySection from '@/components/about/StorySection';
import VideoPlaceholder from '@/components/about/VideoPlaceholder';
import CraftGrid from '@/components/about/CraftGrid';

const infoItems = [
  { value: '湖南衡阳', label: '籍贯' },
  { value: '2000.09', label: '生日' },
  { value: '中南大学', label: '毕业院校' },
  { value: '计算机技术', label: '专业' },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const craftStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function AboutPage() {
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
          刘佩 · 关于我
        </span>
      </motion.nav>

      {/* ── Page body ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px 60px' }}>

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
              color: '#111',
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            About
            <br />
            Me
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: '#999',
              marginTop: '12px',
              letterSpacing: '0.04em',
            }}
          >
            产品经理 · 研究者 · 旅行者 · 舞者
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ marginTop: '40px', borderTop: '1px solid #111' }}
        />

        {/* ── Section 1: Photo + Quote ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="about-intro-grid"
          style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: '#111',
          }}
        >
          {/* Left: photo */}
          <div style={{ background: '#F5F5F5', padding: 0 }}>
            <PhotoPlaceholder />
          </div>

          {/* Right: quote + info */}
          <div
            style={{
              background: '#fff',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#111',
                marginBottom: '24px',
              }}
            >
              热爱用产品思维
              <br />
              解决真实问题
            </div>
            <p
              style={{
                fontSize: '14px',
                color: '#555',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              相信技术与人文可以共存。
              <br />
              计算机出身的产品经理，
              <br />
              既懂代码逻辑，也在意人的感受。
            </p>

            {/* Basic info */}
            <div
              className="about-info-grid"
              style={{
                marginTop: '40px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {infoItems.map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: '11px', color: '#bbb' }}>{item.value}</div>
                  <div style={{ fontSize: '10px', color: '#bbb', marginTop: '2px' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Section 2: Story ── */}
        <div style={{ marginTop: '80px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#111',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            我的故事
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <StorySection index="01" title="从工程到产品">
                软件工程本科 + 计算机技术硕士的背景，
                <br />
                让我在进入产品领域时多了一份技术直觉。
                <br />
                我理解工程师在说什么，也知道哪些「需求」
                <br />
                是真实可行的，哪些只是美好的幻想。
                <br />
                <br />
                在 OPPO 的实习和轮岗经历，让我第一次
                <br />
                感受到一个产品决策如何影响数以百万计
                <br />
                的用户。那种感觉是工程代码给不了的。
              </StorySection>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <StorySection index="02" title="对 AI 产品的理解">
                LLM 评测方向的研究经历，让我比大多数
                <br />
                PM 更早接触到大模型的「内部逻辑」——
                <br />
                它擅长什么、在哪里会犯错、评测标准
                <br />
                如何影响模型迭代方向。
                <br />
                <br />
                我相信未来最好的 AI 产品经理，
                <br />
                是那些既能定义「什么是好」，
                <br />
                又能设计出验证方法的人。
              </StorySection>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <StorySection index="03" title="工作之外的我">
                跳舞让我理解节奏与协调，
                <br />
                手工让我回归专注与细节，
                <br />
                旅行让我保持对世界的好奇，
                <br />
                摄影让我学会观察光线与构图。
                <br />
                <br />
                这些爱好看起来和产品无关，
                <br />
                但它们塑造了我看问题的方式。
              </StorySection>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Section 3: Dance Videos ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginTop: '80px' }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#111',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            舞蹈
          </div>
          <div
            style={{
              fontSize: '13px',
              color: '#999',
              marginBottom: '32px',
            }}
          >
            记录跳舞的瞬间
          </div>

          <VideoPlaceholder label="主视频（待上传）" aspectRatio="16/9" />

          {/* Small video grid */}
          <div
            className="video-small-grid"
            style={{
              marginTop: '1px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: '#111',
            }}
          >
            {['视频 01', '视频 02', '视频 03'].map((label) => (
              <VideoPlaceholder key={label} label={label} aspectRatio="9/16" small />
            ))}
          </div>

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
            视频上传方式：
            <br />· 本地视频：放入 public/videos/ 目录，用 &lt;video&gt; 标签引入
            <br />· bilibili：复制嵌入代码替换占位 div
            <br />· 竖屏视频建议比例 9:16，横屏建议 16:9
          </p>
        </motion.div>

        {/* ── Section 4: Crafts ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '80px' }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#111',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            手工
          </div>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>
            用双手创造的小东西
          </div>

          <motion.div variants={craftStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <CraftGrid />
          </motion.div>

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
            图片上传方式：
            <br />· 将图片放入 public/crafts/ 目录
            <br />· 将占位 div 替换为 &lt;img src=&quot;/crafts/xxx.jpg&quot; /&gt;
            <br />· 建议正方形裁切，尺寸 800×800px 以上
          </p>
        </motion.div>

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
            href="/research"
            style={{ fontSize: '13px', color: '#111', textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            ← 学术研究
          </Link>
          <Link
            href="/contact"
            style={{ fontSize: '13px', color: '#999', textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            联系我 →
          </Link>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .about-intro-grid { grid-template-columns: 1fr !important; }
          .about-contact-grid { grid-template-columns: 1fr !important; }
          .video-small-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .craft-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .about-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
