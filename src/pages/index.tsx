import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import LeadForm from '../components/LeadForm';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// 特色卡片数据
const features = [
  {
    icon: '01',
    title: '思考与复盘',
    description: '记录投资决策的完整过程，从事件驱动到执行反馈。在市场的起伏中沉淀认知，让每一次经历都成为进化的养分。',
    link: '/blog',
    linkText: '阅读博客',
  },
  {
    icon: '02',
    title: 'SpeechAct · 言出法随',
    description: '把一句话目标变成可验证的结果。正在寻找真实任务，与首批用户一起验证 AI 能可靠完成哪些工作。',
    link: 'https://speechact.xyz/?utm_source=ycomer&utm_medium=project&utm_campaign=founding-pilot',
    linkText: '提交一个真实任务',
  },
  {
    icon: '03',
    title: 'Silicon Self · 向内看',
    description: '用七天记录，对照你说过的目标与真正做过的事。从一个小小的反馈循环，开始认识自己的模式。',
    link: 'https://siliconself.xyz/?utm_source=ycomer&utm_medium=project&utm_campaign=seven-days',
    linkText: '开始 7 天记录',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>FANKUS / FIELD NOTES & EXPERIMENTS</p>
        <h1 className={styles.heroTitle}>
          混沌中寻找<span>秩序</span><br />把思考变成实验。
        </h1>
        <p className={styles.heroDescription}>
          我是 Fankus，记录投资决策，构建 AI 产品，也观察自己的行动。这里分享过程、证据，以及下一次会怎么做。
        </p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="#subscribe">
            订阅构建笔记 →
          </Link>
          <Link className={styles.secondaryButton} to="/blog">
            阅读最近的思考
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({icon, title, description, link, linkText}: {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <Link className={styles.featureLink} to={link}>
        {linkText} →
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>你想一起探索什么？</h2>
      <p className={styles.sectionSubtitle}>
        阅读思考，提交任务，或者开始一次与自己的对话。
      </p>
      <div className={styles.featureCards}>
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Fankus 的数字空间 - 投资思考、链上工具、市场洞察">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.newsletter}>
          <div>
            <p className={styles.eyebrow}>A LETTER FROM THE WORKBENCH</p>
            <Heading as="h2" id="subscribe">让下一次相遇，<br />发生在你的收件箱。</Heading>
            <p>按你选择的方向，分享新的实验、决策复盘与构建进展。计划每周一封，有值得分享的进展时再写。</p>
            <p>订阅后即可打开《7 天产品验证清单》，把一个模糊想法变成可观察的实验。</p>
            <Link to="/field-guide">先看看清单 →</Link>
          </div>
          <LeadForm site="ycomer" />
        </section>
        <section className={styles.about}><Heading as="h2" id="about">关于 Fankus</Heading><p>我在市场、产品与个人成长之间寻找反馈。这个网站记录正在进行的探索，SpeechAct 和 Silicon Self 是其中两个实验。你可以从一篇文章开始，也可以直接带着一个问题来找我。</p><a href="mailto:hello@ycomer.xyz">写信给我 →</a></section>
      </main>
    </Layout>
  );
}
