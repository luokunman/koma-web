import Image from 'next/image';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const features = [
  {
    title: '智能剧本管理',
    description: '从灵感卡片到章节大纲，统一整理角色关系、剧情节奏与版本记录。',
    icon: '✦',
  },
  {
    title: '项目协同推进',
    description: '支持多作品并行制作，清晰跟踪排期、任务和交付状态。',
    icon: '▣',
  },
  {
    title: '角色与世界观资产',
    description: '统一管理角色设定、视觉关键词和世界观规则，保证风格长期一致。',
    icon: '◎',
  },
  {
    title: '分镜生产面板',
    description: '按镜头组织画面语言，便于快速回看、调整和批注。',
    icon: '◈',
  },
  {
    title: 'AI 内容生成',
    description: '辅助生成对白、场景描述、分镜提示词和宣传文案，提升产能。',
    icon: '✧',
  },
  {
    title: '团队审阅反馈',
    description: '编剧、主笔、制片和运营可在同一空间内协同评审与修改。',
    icon: '✓',
  },
] as const;

const workflow = [
  {
    step: '01',
    title: '输入创意与题材方向',
    description: '录入故事灵感、受众标签与更新计划，快速生成可执行的创作框架。',
  },
  {
    step: '02',
    title: '搭建角色与分镜资产',
    description: '集中管理角色设定、服装道具、分镜草稿与场景模板。',
  },
  {
    step: '03',
    title: 'AI 协同生成与审校',
    description: '先由 AI 生成草案，再由团队完成校对、审核与迭代。',
  },
  {
    step: '04',
    title: '沉淀复用创作能力',
    description: '把高质量角色、镜头与提示词沉淀为资产库，供后续作品直接复用。',
  },
] as const;

const faqs = [
  {
    question: '这个平台适合哪些团队使用？',
    answer: '适合个人创作者、漫画工作室、IP 孵化团队，以及需要稳定连载生产的内容团队。',
  },
  {
    question: '能否从现有项目迁移资料？',
    answer: '可以，支持把已有角色设定、章节文档、分镜说明和素材标签逐步导入。',
  },
  {
    question: 'AI 生成内容可以继续编辑吗？',
    answer: '可以，所有 AI 结果都能继续修改、批注、审核和版本回溯。',
  },
  {
    question: '是否支持团队权限管理？',
    answer: '支持，可按角色控制访问范围，并配合审核流程进行协作。',
  },
] as const;

export default function Page() {
  return (
    <main>
      <header className="site-header" data-site-header>
        <div className="container nav-shell glass">
          <a className="brand" href="#top" aria-label="KOMA 首页">
            <Image className="brand-mark" src="/koma-logo.svg" alt="KOMA Logo" width={40} height={40} priority />
            <span>KOMA</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#preview">平台预览</a>
            <a href="#features">功能</a>
            <a href="#workflow">流程</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <button className="icon-button" type="button" data-theme-toggle aria-label="切换主题">
              <span data-theme-icon>☀</span>
            </button>
            <a className="button button-ghost desktop-only" href="#cta">
              预约演示
            </a>
            <button className="icon-button mobile-only" type="button" data-mobile-toggle aria-label="打开菜单">
              ☰
            </button>
          </div>
        </div>
        <div className="mobile-panel glass" data-mobile-panel>
          <a href="#preview">平台预览</a>
          <a href="#features">功能</a>
          <a href="#workflow">流程</a>
          <a href="#faq">FAQ</a>
          <a className="button button-primary" href="#cta">
            立即咨询
          </a>
        </div>
      </header>

      <section className="hero section" id="top">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">面向内容团队的 KOMA 生产中枢</span>
            <h1>把灵感、剧本、分镜与协作汇聚到一个可持续创作的平台。</h1>
            <p className="hero-text">
              KOMA 帮助团队从创意提案到上线交付实现统一管理，让每一次创作都更快、更稳、更一致。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#cta">
                下载Windows
              </a>
              <a className="button button-ghost" target="_blank"  href="https://komaapi.com">
                下载Mac
              </a>
              <a className="button button-ghost" target="_blank"  href="https://komaapi.com">
                获取激活
              </a>
            </div>
            <ul className="hero-stats">
              <li>
                <strong>3x</strong>
                <span>分镜迭代效率</span>
              </li>
              <li>
                <strong>50%</strong>
                <span>协作沟通成本下降</span>
              </li>
              <li>
                <strong>100+</strong>
                <span>可沉淀角色与场景资产</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual reveal" data-tilt>
            <div className="visual-card glass">
              <div className="visual-top">
                <span className="status-dot live" />
                <span>KOMA 控制台</span>
                <span className="badge">SSR App Router</span>
              </div>
              <div className="visual-content">
                <aside className="visual-sidebar">
                  <div className="mini-block active">剧本大纲</div>
                  <div className="mini-block">角色设定</div>
                  <div className="mini-block">分镜面板</div>
                  <div className="mini-block">协作评论</div>
                </aside>
                <div className="visual-main">
                  <div className="visual-panel panel-lg">
                    <div className="panel-title">本周制作进度</div>
                    <div className="bars">
                      <span style={{ width: '88%' }} />
                      <span style={{ width: '72%' }} />
                      <span style={{ width: '64%' }} />
                    </div>
                  </div>
                  <div className="visual-row">
                    <div className="visual-panel">
                      <div className="panel-title">角色一致性</div>
                      <strong>96%</strong>
                    </div>
                    <div className="visual-panel">
                      <div className="panel-title">待审核镜头</div>
                      <strong>12</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="preview">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">平台预览</span>
            <h2>一眼掌握作品状态，所有关键资产都在同一画布里。</h2>
            <p>从章节推进到角色设定、分镜安排和团队评论，制作信息集中呈现，不再散落在多个工具中。</p>
          </div>
          <div className="preview-grid">
            <article className="preview-card glass reveal" data-tilt>
              <div className="preview-header">
                <span className="badge">项目总览</span>
                <span>更新至第 24 话</span>
              </div>
              <h3>制作驾驶舱</h3>
              <p>排期、任务、镜头审核与角色资产同步展示，帮助制片快速识别风险点。</p>
              <div className="preview-metrics">
                <div>
                  <strong>8</strong>
                  <span>进行中章节</span>
                </div>
                <div>
                  <strong>24</strong>
                  <span>本周新增分镜</span>
                </div>
                <div>
                  <strong>15</strong>
                  <span>待处理评论</span>
                </div>
              </div>
            </article>
            <article className="preview-card glass reveal">
              <div className="preview-header">
                <span className="badge">角色库</span>
                <span>已同步 36 份设定</span>
              </div>
              <h3>可复用的角色与世界观资产</h3>
              <p>角色卡、口吻规则、服装变化和道具说明沉淀为模板，减少重复沟通。</p>
              <ul className="preview-list">
                <li>主角团关系图谱</li>
                <li>服装与道具变体</li>
                <li>风格关键词与禁用词</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">功能区</span>
            <h2>为漫剧团队量身打造的全链路创作能力。</h2>
            <p>覆盖从剧本到镜头、从资产到协作的核心生产场景，让团队用同一套语言推进作品。</p>
          </div>
          <div className="card-grid">
            {features.map((feature) => (
              <article className="feature-card glass reveal" data-tilt key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">流程区</span>
            <h2>从创意输入到持续复用，建立标准化生产闭环。</h2>
            <p>每一步都有沉淀，每个角色都有上下文，每次迭代都有可追踪记录。</p>
          </div>
          <div className="timeline">
            {workflow.map((item) => (
              <article className="timeline-item glass reveal" key={item.step}>
                <span className="timeline-step">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-shell glass reveal">
          <div className="section-heading align-left">
            <span className="eyebrow">FAQ</span>
            <h2>常见问题，提前帮你想清楚。</h2>
            <p>点击展开即可查看每项说明，方便团队快速判断是否适合接入。</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <article className="faq-item" key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  data-faq-trigger
                >
                  <span>{item.question}</span>
                  <span className="faq-symbol">＋</span>
                </button>
                <div className={`faq-answer ${index === 0 ? 'is-open' : ''}`} data-faq-answer>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="cta">
        <div className="container">
          <div className="cta-card glass reveal" data-tilt>
            <div className="cta-copy">
              <span className="eyebrow">立即开始</span>
              <h2>让 KOMA 成为你团队的内容操作系统。</h2>
              <p>从第一部作品开始建立标准流程，把高质量创作能力沉淀成长期资产。</p>
              <div className="cta-actions">
                <a className="button button-primary cta-contact-button" href="#contact-qr" data-contact-trigger>
                  微信咨询
                </a>
                <a className="button button-ghost" href="#top">
                  回到顶部
                </a>
              </div>
            </div>
            <div className="cta-contact-card" id="contact-qr" data-contact-card>
              <div className="cta-contact-text">
                <span className="cta-contact-label">联系我们</span>
                <p>扫码添加微信，获取产品介绍与演示安排。</p>
              </div>
              <div className="cta-qr-shell">
                <Image src="/contact-qr.jpg" alt="KOMA 联系二维码" width={176} height={224} className="cta-qr-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">K</span>
              <span>KOMA</span>
            </a>
            <p>为漫剧、漫画与 IP 内容团队打造的 AI 创作与协作平台。</p>
          </div>
          <div className="footer-links">
            <a href="#features">功能</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
