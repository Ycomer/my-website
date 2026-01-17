import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

// 特色卡片数据
const features = [
  {
    icon: '📝',
    title: '思考与复盘',
    description: '记录投资决策的完整过程，从事件驱动到执行反馈。在市场的起伏中沉淀认知，让每一次经历都成为进化的养分。',
    link: '/blog',
    linkText: '阅读博客',
  },
  {
    icon: '🔗',
    title: '链上工具',
    description: '追踪聪明钱的链上足迹，监控资金流动的方向与规模。在区块链的透明世界里，发现那些被忽视的信号。',
    link: '/blog',
    linkText: '敬请期待',
  },
  {
    icon: '📊',
    title: '市场洞察',
    description: '美股市场的量化工具与分析框架，从数据中挖掘确定性。用代码武装自己，在信息的海洋中找到航向。',
    link: '/blog',
    linkText: '敬请期待',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          在混沌中寻找<span>秩序</span>
        </h1>
        <p className={styles.heroSubtitle}>
          用代码构建工具，用文字沉淀思考
        </p>
        <p className={styles.heroDescription}>
          这里是 Fankus 的数字空间。我在币圈和美股市场中探索，打造追踪聪明钱的工具，
          记录投资决策的思考与复盘，分享在不确定性中寻找确定性的旅程。
        </p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/blog">
            探索博客 →
          </Link>
          <Link className={styles.secondaryButton} to="/blog">
            关于我
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
      <h2 className={styles.sectionTitle}>探索方向</h2>
      <p className={styles.sectionSubtitle}>
        在数据的宇宙中，每一个信号都可能指向新的星辰
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
      title="首页"
      description="Fankus 的数字空间 - 投资思考、链上工具、市场洞察">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
