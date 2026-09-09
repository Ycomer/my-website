import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import './styles.css';

export default function BlogFooter(props: React.ComponentProps<typeof Footer>) {
  const {isBlogPostPage} = useBlogPost();
  return <><Footer {...props}/>{isBlogPostPage && <aside className="blog-conversion"><small>继续这次思考</small><h2>把读到的想法，变成一个实验。</h2><p>打开 7 天产品验证清单，或订阅你关心的构建笔记。</p><Link to="/field-guide">获取验证清单 →</Link><span> · </span><Link to="/#subscribe">订阅后续笔记 →</Link></aside>}</>;
}
