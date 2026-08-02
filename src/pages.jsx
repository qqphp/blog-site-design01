import { useState } from 'react';

const articleRows = [
  ['产品思考', '别急着写代码，先让需求变得可以讨论', '从混乱沟通到清晰决策，我常用的一页纸方法。', '2026.07.30'],
  ['效率工具', '用更少的工具，完成更深的专注', '我的开发环境、笔记流和每周复盘。', '2026.07.29'],
  ['设计实践', '一个人也能做出有温度的产品页面', '从内容层级、留白到不讨好的视觉选择。', '2026.07.28'],
  ['独立开发', '给 Side Project 的 5 个完成定义', '别让「差不多了」成为项目永远上线不了的原因。', '2026.07.27'],
];
const projectRows = [
  ['写作工作台', '给长文写作者的轻量发布工具', 'React · Markdown', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85'],
  ['面包店记账', '小生意的日常现金流面板', '产品设计 · 数据', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85'],
  ['路线图实验室', '让团队讨论不再卡在会议室', '协作 · 原型', 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1000&q=85'],
];
const copy = {
  articles: ['文章', '把做过、想过、踩过的坑，写成可以被带走的东西。'],
  about: ['关于我', '一个持续练习的产品开发者，也是一名过程记录者。'],
  collaboration: ['合作', '从模糊想法到可用产品，一起把值得做的事做出来。'],
  works: ['作品', '一些从问题出发、被认真做完的产品实验。'],
  activity: ['动态', '创作、阅读、学习与开发，正在发生的事情。'],
  friends: ['友链', '在好奇的人群里，继续交换想法。'],
  investment: ['投资', '不追涨跌，只记录我理解世界的方式。'],
  bookmarks: ['书签', '留给那些值得再次打开的网站、工具与文章。'],
};

function Masthead({ page }) { const [title, intro] = copy[page]; return <section className="page-masthead"><p>DEVELOPER ALEI / {String(Object.keys(copy).indexOf(page) + 1).padStart(2, '0')}</p><div><h1>{title}</h1><span>{intro}</span></div></section> }
const Dot = () => <span className="brutal-dot" aria-hidden="true">✦</span>;

function ArticlesPage() { return <section className="page-section article-index"><div className="filter-strip"><b>全部文章</b><span>产品思考</span><span>效率工具</span><span>设计实践</span></div>{articleRows.map((row, index) => <article key={row[1]}><i>{String(index + 1).padStart(2, '0')}</i><div><small>{row[0]} · {row[3]}</small><h2>{row[1]}</h2><p>{row[2]}</p></div><b>↗</b></article>)}</section> }
function AboutPage() { return <section className="page-section about-page"><div className="about-portrait"><span>👨🏻‍💻</span><i>HELLO!</i></div><div><p className="label">开发 / 写作 / 产品</p><h2>我相信好的产品，<br/>来自清楚地理解问题。</h2><p>过去几年，我在产品、设计与开发之间来回切换。这个博客记录能复用的方法，也留住还没有答案的问题。</p><div className="number-row"><b>6<small>年写作</small></b><b>42<small>篇文章</small></b><b>12<small>个项目</small></b></div></div><aside><b>现在正在</b><p>整理一套给独立开发者用的写作工作台。</p><Dot/></aside></section> }
function CollaborationPage() { const services = [['01', '产品梳理', '把模糊需求变成可以讨论的方向。'], ['02', '原型与界面', '用可点击的界面提早验证关键判断。'], ['03', '前端实现', '把视觉与交互落地为稳定、清晰的页面。']]; return <section className="page-section collaboration-page"><div className="service-grid">{services.map(x => <article key={x[0]}><b>{x[0]}</b><h2>{x[1]}</h2><p>{x[2]}</p><span>→</span></article>)}</div><div className="process"><p className="label">合作流程</p><h2>先一起把问题说清楚。</h2><ol><li>认识问题与目标</li><li>确定最小可行方案</li><li>短周期交付与复盘</li></ol><button>发起一场交流 ↗</button></div></section> }
function WorksPage() { return <section className="page-section project-index">{projectRows.map((row, i) => <article key={row[0]}><img src={row[3]} alt=""/><div><small>{row[2]}</small><h2>{row[0]}</h2><p>{row[1]}</p><button>查看案例 ↗</button></div><b>{String(i + 1).padStart(2, '0')}</b></article>)}</section> }
function ActivityPage() { const entries = [['08.01', '发布新文章', '给 Side Project 的 5 个完成定义'], ['07.28', '作品进度', '写作工作台完成首轮测试'], ['07.24', '近期阅读', '正在读《设计中的设计》'], ['07.20', '视频更新', 'B站：我的本地开发流']]; return <section className="page-section activity-page">{entries.map((x, i) => <article key={x[0]}><time>{x[0]}</time><i>{i === 0 ? 'NOW' : '·'}</i><div><small>{x[1]}</small><h2>{x[2]}</h2></div></article>)}</section> }
function FriendsPage() { const [view, setView] = useState('cards'); const people = [['少数派', '数字生活与高质量内容', '内容'], ['设计小报', '关于视觉与产品的周刊', '设计'], ['独立开发者', '一群正在做产品的人', '开发'], ['慢慢做', '创作、工具与长期主义', '创作'], ['今日热榜', '把值得关注的信息整理成一页', '资讯'], ['Maybe', '独立杂志与城市文化采样', '灵感'], ['前端食堂', '写给前端人的工程实践', '技术'], ['设计之外', '设计师的生活与工作观察', '设计']]; return <section className={'page-section friends-page ' + view}><div className="friends-toolbar"><p>这些是我经常打开、也愿意推荐给你的站点。<b>{people.length} 位朋友</b></p><div role="group" aria-label="友链展示方式"><button className={view === 'cards' ? 'selected' : ''} onClick={() => setView('cards')}>▦ 卡片</button><button className={view === 'list' ? 'selected' : ''} onClick={() => setView('list')}>☷ 列表</button></div></div><div className="friend-collection">{people.map((x, i) => <article key={x[0]}><span>{x[0].slice(0,1)}</span><div><small>{x[2]}</small><h2>{x[0]}</h2><p>{x[1]}</p></div><button aria-label={`访问 ${x[0]}`}>↗</button></article>)}</div><aside>想交换链接？<button>来打个招呼 →</button></aside></section> }
function InvestmentPage() { return <section className="page-section investment-page"><div className="notice">⚠ 仅为个人记录，不构成投资建议。</div><div className="watch-grid"><article><small>长期关注</small><h2>AI 基础设施</h2><p>工具是否真的让人更有创造力。</p></article><article><small>长期关注</small><h2>消费品牌</h2><p>品牌如何在长期里建立信任。</p></article><article><small>长期关注</small><h2>创作者经济</h2><p>个体如何拥有更稳定的收入结构。</p></article></div><div className="investment-note"><p className="label">我的记录原则</p><h2>不预测价格，<br/>只持续更新自己的理解。</h2><span>↗</span></div></section> }
function BookmarksPage() { const groups = [{ name: '开发工具', items: ['Raycast', 'Linear', 'Vercel', 'Warp', 'Figma', 'Obsidian'] }, { name: '设计灵感', items: ['NOWNESS', 'A List Apart', 'It’s Nice That', 'The Brand Identity'] }, { name: '阅读与写作', items: ['Margin', '少数派', 'The Browser'] }, { name: '独立站点', items: ['Read.cv', 'Are.na', 'The Creative Independent', 'Dense Discovery', 'Sidebar'] }]; const density = count => count >= 6 ? 'dense' : count >= 4 ? 'medium' : 'light'; return <section className="page-section bookmark-page">{groups.map((group, i) => <article className={`bookmark-group ${density(group.items.length)}`} key={group.name}><div><b>{String(i + 1).padStart(2, '0')}</b><h2>{group.name}</h2><span>{group.items.length} 条收藏</span></div><section>{group.items.map(name => <button key={name}>{name}<span>↗</span></button>)}</section></article>)}</section> }

export function MvpPage({ page }) { return <main className="mvp-page"><Masthead page={page}/>{page === 'articles' && <ArticlesPage/>}{page === 'about' && <AboutPage/>}{page === 'collaboration' && <CollaborationPage/>}{page === 'works' && <WorksPage/>}{page === 'activity' && <ActivityPage/>}{page === 'friends' && <FriendsPage/>}{page === 'investment' && <InvestmentPage/>}{page === 'bookmarks' && <BookmarksPage/>}</main> }
