export const dynamic = 'force-dynamic';
export const revalidate = 0;

const features = [
  {
    title: '智能剧本管理',
    description: '从灵感卡片到章节大纲，自动整理人物关系、情节节奏与版本记录。',
    icon: '✦',
  },
  {
    title: '项目管理',
    description: '多作品并行推进，明确排期、里程碑和制作状态，减少沟通损耗。',
    icon: '▣',
  },
  {
    title: '角色与形象设定',
    description: '统一角色档案、形象关键词与世界观设定，保证风格长期一致。',
    icon: '◈',
  },
  {
    title: '分镜管理',
    description: '以镜头视图管理节奏与画面语言，快速回看、调整与批注。',
    icon: '◫',
  },
  {
    title: 'AI内容生成',
    description: '自动辅助生成对白、场景描述、分镜提示词与宣传文案，提高产能。',
    icon: '◎',
  },
  {
    title: '团队协作',
    description: '编剧、主笔、制片与运营在同一空间协同审阅、评论与交付。',
    icon: '✧',
  },
] as const;

const workflow = [
  {
    step: '01',
    title: '输入创意与题材方向',
    description: '录入故事灵感、受众标签和更新节奏，自动生成可执行的创作框架。',
  },
  {
    step: '02',
    title: '搭建角色与分镜资产',
    description: '集中管理角色设定、服装道具、分镜草稿与场景模板。',
  },
  {
    step: '03',
    title: 'AI 协同生产与审核',
    description: '用 AI 生成内容草案，再通过团队协作完成校对、审核与迭代。',
  },
  {
    step: '04',
    title: '一键沉淀并持续复用',
    description: '把高质量角色、镜头与提示词沉淀为资产库，下一部作品直接复用。',
  },
] as const;

const cases = [
  {
    title: '星际冒险',
    tag: '科幻热血',
    description: '在宏大世界观下统一舰队角色设定、科技道具与高密度动作分镜。',
  },
  {
    title: '都市传说',
    tag: '悬疑惊悚',
    description: '通过章节节奏面板控制反转点与信息投放，让追更张力更加稳定。',
  },
  {
    title: '魔法学院',
    tag: '校园奇幻',
    description: '统一角色成长线、社团关系与服装系统，保证长篇连载叙事一致。',
  },
] as const;

const plans = [
  {
    title: '免费版',
    price: '¥0',
    description: '适合个人作者验证题材与工作流。',
    items: ['1 个项目空间', '基础 AI 草案生成', '角色设定模板', '社区支持'],
    cta: '立即开始',
    featured: false,
  },
  {
    title: '专业版',
    price: '¥99/月',
    description: '适合小团队稳定生产与协作交付。',
    items: ['无限章节与分镜', '高级 AI 内容生成', '多人协作与评论', '版本历史与资产库'],
    cta: '预约演示',
    featured: true,
  },
  {
    title: '企业版',
    price: '联系销售',
    description: '适合版权方、工作室与规模化内容工厂。',
    items: ['私有化部署', 'SSO 与权限体系', '专属成功经理', '定制工作流集成'],
    cta: '联系顾问',
    featured: false,
  },
] as const;

const faqs = [
  {
    question: 'AI漫剧适合哪些团队使用？',
    answer: '适合个人创作者、漫画工作室、IP 孵化团队以及需要稳定连载生产的内容公司。',
  },
  {
    question: '是否可以从现有项目迁移资料？',
    answer: '可以，支持把已有角色设定、章节文档、分镜说明和素材标签逐步导入到项目空间。',
  },
  {
    question: 'AI 生成内容可以二次编辑吗？',
    answer: '可以，所有 AI 结果都可以在协作界面中继续修改、批注、审核与版本回溯。',
  },
  {
    question: '是否支持团队权限管理？',
    answer: '支持，专业版起即可邀请成员协作，企业版提供更细粒度的角色权限与审批流程。',
  },
  {
    question: '上线后是否有培训与支持？',
    answer: '我们提供上手指引、模板库与客户成功支持，帮助团队更快建立标准化创作流程。',
  },
] as const;

export default function Page() {
  return (
    <main>
      <header className="site-header" data-site-header>
        <div className="container nav-shell glass">
          <a className="brand" href="#top" aria-label="AI漫剧首页">
            <span className="brand-mark">AI</span>
            <span>AI漫剧</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#preview">平台预览</a>
            <a href="#features">功能</a>
            <a href="#workflow">流程</a>
            <a href="#cases">案例</a>
            <a href="#pricing">价格</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <button className="icon-button" type="button" data-theme-toggle aria-label="切换深色模式">
              <span data-theme-icon>☾</span>
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
          <a href="#cases">案例</a>
          <a href="#pricing">价格</a>
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
            <span className="eyebrow">面向内容团队的 AI 漫剧生产中枢</span>
            <h1>把灵感、剧本、分镜与协作，汇聚成一个可持续连载的工作台。</h1>
            <p className="hero-text">
              AI漫剧帮助团队从创意提案到上线交付统一管理，让每一次创作都更快、更稳、更一致。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#pricing">
                查看方案
              </a>
              <a className="button button-ghost" href="#preview">
                预览平台
              </a>
            </div>
            <ul className="hero-stats">
              <li>
                <strong>3x</strong>
                <span>分镜迭代效率</span>
              </li>
              <li>
                <strong>50%</strong>
                <span>协作沟通成本降低</span>
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
                <span>AI漫剧 控制台</span>
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
            <h2>一眼掌握作品状态，所有关键资产都在同一个画布里。</h2>
            <p>从章节推进到角色设定、分镜安排和团队评论，制作信息集中呈现，不再分散在多个工具里。</p>
          </div>
          <div className="preview-grid">
            <article className="preview-card glass reveal" data-tilt>
              <div className="preview-header">
                <span className="badge">项目总览</span>
                <span>更新至第 24 话</span>
              </div>
              <h3>制作驾驶舱</h3>
              <p>排期、任务、镜头审核与角色资产同步展示，帮助制片快速判断风险点。</p>
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
            <p>AI漫剧让每一步都有沉淀、每个角色都有上下文、每次迭代都有可追踪记录。</p>
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

      <section className="section" id="cases">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">案例区</span>
            <h2>不同题材，都能在统一平台里跑出稳定制作节奏。</h2>
            <p>无论是热血科幻、都市悬疑还是校园奇幻，都能围绕角色和分镜建立长期资产体系。</p>
          </div>
          <div className="card-grid cases-grid">
            {cases.map((item) => (
              <article className="case-card glass reveal" data-tilt key={item.title}>
                <span className="badge">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#cta">查看演示场景 →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">价格区</span>
            <h2>从个人起步到企业协同，按团队规模灵活选择。</h2>
            <p>先快速试用，再逐步扩展到稳定协作和企业级流程治理。</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card glass reveal ${plan.featured ? 'is-featured' : ''}`}
                key={plan.title}
              >
                <div>
                  <span className="badge">{plan.title}</span>
                  <h3>{plan.price}</h3>
                  <p>{plan.description}</p>
                </div>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className={`button ${plan.featured ? 'button-primary' : 'button-ghost'}`} href="#cta">
                  {plan.cta}
                </a>
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
            <div>
              <span className="eyebrow">立即开始</span>
              <h2>让 AI漫剧 成为你团队的内容操作系统。</h2>
              <p>从第一部作品开始建立标准流程，把高质量创作能力沉淀成长期资产。</p>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href="mailto:hello@aimanju.example">
                联系我们
              </a>
              <a className="button button-ghost" href="#top">
                回到顶部
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">AI</span>
              <span>AI漫剧</span>
            </a>
            <p>为漫剧、漫画与 IP 内容团队打造的 AI 创作与协作平台。</p>
          </div>
          <div className="footer-links">
            <a href="#features">功能</a>
            <a href="#cases">案例</a>
            <a href="#pricing">价格</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
