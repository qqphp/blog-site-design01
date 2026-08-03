import { useState } from "react";

const articleRows = [
  [
    "产品思考",
    "别急着写代码，先让需求变得可以讨论",
    "从混乱沟通到清晰决策，我常用的一页纸方法。",
    "2026.07.30",
  ],
  [
    "效率工具",
    "用更少的工具，完成更深的专注",
    "我的开发环境、笔记流和每周复盘。",
    "2026.07.29",
  ],
  [
    "设计实践",
    "一个人也能做出有温度的产品页面",
    "从内容层级、留白到不讨好的视觉选择。",
    "2026.07.28",
  ],
  [
    "独立开发",
    "给 Side Project 的 5 个完成定义",
    "别让「差不多了」成为项目永远上线不了的原因。",
    "2026.07.27",
  ],
];
const productCatalog = [
  {
    name: "写作工作台",
    summary: "给长文写作者的轻量发布工具",
    type: "工具",
    tags: "React · Markdown",
    status: "持续维护",
    date: "2026.07",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "面包店记账",
    summary: "小生意的日常现金流面板",
    type: "Web 产品",
    tags: "产品设计 · 数据",
    status: "已发布",
    date: "2026.05",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "路线图实验室",
    summary: "让团队讨论不再卡在会议室",
    type: "协作工具",
    tags: "协作 · 原型",
    status: "持续维护",
    date: "2026.03",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "像素邮局",
    summary: "将订阅邮件变成可阅读的个人刊物",
    type: "内容产品",
    tags: "内容 · 邮件",
    status: "已发布",
    date: "2025.12",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "专注计时器",
    summary: "为深度工作设计的极简浏览器工具",
    type: "工具",
    tags: "Web · Chrome",
    status: "已归档",
    date: "2025.08",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "城市散步",
    summary: "记录城市路线与街头发现的小应用",
    type: "实验项目",
    tags: "地图 · 日记",
    status: "实验中",
    date: "2025.04",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "空白画布",
    summary: "帮助团队同步想法的轻量白板",
    type: "Web 产品",
    tags: "协作 · Canvas",
    status: "实验中",
    date: "2024.11",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "开源清单",
    summary: "值得信赖的小型开源工具收藏",
    type: "开源项目",
    tags: "社区 · Curated",
    status: "持续维护",
    date: "2024.06",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  },
];
const copy = {
  articles: ["文章", "把做过、想过、踩过的坑，写成可以被带走的东西。"],
  about: ["关于我", "一个持续练习的产品开发者，也是一名过程记录者。"],
  collaboration: ["合作", "从模糊想法到可用产品，一起把值得做的事做出来。"],
  works: ["作品", "一些从问题出发、被认真做完的产品实验。"],
  activity: ["动态", "创作、阅读、学习与开发，正在发生的事情。"],
  friends: ["友链", "在好奇的人群里，继续交换想法。"],
  investment: ["投资", "不追涨跌，只记录我理解世界的方式。"],
  bookmarks: ["书签", "留给那些值得再次打开的网站、工具与文章。"],
};

function Masthead({ page }) {
  const [title, intro] = copy[page];
  return (
    <section className="page-masthead">
      <p>
        DEVELOPER ALEI /{" "}
        {String(Object.keys(copy).indexOf(page) + 1).padStart(2, "0")}
      </p>
      <div>
        <h1>{title}</h1>
        <span>{intro}</span>
      </div>
    </section>
  );
}
const Dot = () => (
  <span className="brutal-dot" aria-hidden="true">
    ✦
  </span>
);

function ArticlesPage() {
  const directory = [
    ["开发与产品", ["产品思考", "独立开发"]],
    ["工作方法", ["效率工具"]],
    ["体验与表达", ["设计实践"]],
  ];
  const [category, setCategory] = useState("全部");
  const [openGroup, setOpenGroup] = useState("开发与产品");
  const [query, setQuery] = useState("");
  const activeGroup = directory.find(([, items]) => items.includes(category))?.[0] || "全部";
  const visible = articleRows.filter(
    (row) =>
      (category === "全部" || row[0] === category) &&
      `${row[1]}${row[2]}`.toLowerCase().includes(query.toLowerCase()),
  );
  const selectCategory = (item) => {
    setCategory(item);
    setOpenGroup(directory.find(([, items]) => items.includes(item))?.[0] || "");
  };
  return (
    <section className="page-section article-index knowledge-directory">
      <aside className="knowledge-tree">
        <p className="label">ARTICLE DIRECTORY</p>
        <nav aria-label="文章知识分类">
          <button className={`knowledge-all ${category === "全部" ? "selected" : ""}`} onClick={() => { setCategory("全部"); setOpenGroup(""); }}><span>全部文章</span><b>{articleRows.length}</b></button>
          {directory.map(([group, items]) => <div className="knowledge-tree-group" key={group}>
            <button className={activeGroup === group ? "selected" : ""} onClick={() => setOpenGroup(openGroup === group ? "" : group)}><span>{group}</span><b>{openGroup === group ? "⌃" : "⌄"}</b></button>
            {openGroup === group && <div>{items.map((item) => <button className={category === item ? "selected" : ""} key={item} onClick={() => selectCategory(item)}>{item}<small>{articleRows.filter((row) => row[0] === item).length}</small></button>)}</div>}
          </div>)}
        </nav>
        <p>先选择一个方向，再从文章里慢慢往下走。</p>
      </aside>

      <main className="knowledge-results">
        <div className="knowledge-heading"><div><p className="label">{activeGroup === "全部" ? "ALL ARTICLES" : activeGroup.toUpperCase()}</p><h2>{category === "全部" ? "所有文章" : category}</h2></div><span>共 {visible.length} 篇 · 按最新发布</span></div>
        <div className="knowledge-current"><b>{category === "全部" ? "从所有记录中挑一篇开始" : `正在浏览：${category}`}</b><span>把复杂的事拆开讲，让每一次阅读都能带走一点东西。</span></div>
        <div className="knowledge-listing">
          {visible.map((row, index) => <article key={row[1]}>
            <i>{String(index + 1).padStart(2, "0")}</i><div><small>{row[0]} · {row[3]} · 阅读约 6 分钟</small><h2>{row[1]}</h2><p>{row[2]}</p></div><button onClick={() => document.getElementById("soon").showModal()} aria-label={`阅读：${row[1]}`}>↗</button>
          </article>)}
          {!visible.length && <p className="knowledge-empty">没有找到匹配文章，试试更短的关键词或换一个分类。</p>}
        </div>
      </main>

      <aside className="knowledge-aside">
        <label className="knowledge-search"><span>SEARCH ARTICLES</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索标题、摘要…" /></label>
        <section className="knowledge-next"><p className="label">START HERE</p><h2>先从一篇<br />能解决问题的文章开始。</h2><p>不知道读什么？从近期最受欢迎的产品思考文章进入。</p><button onClick={() => document.getElementById("soon").showModal()}>随机读一篇 ↗</button></section>
        <section className="knowledge-archive"><p className="label">ARCHIVE</p><button className="selected">2026 <b>{articleRows.length}</b></button><button>2025 <b>0</b></button><button>2024 <b>0</b></button></section>
        <section className="knowledge-tags"><p className="label">POPULAR TAGS</p><div>{["产品", "开发", "效率", "设计", "复盘"].map((tag) => <button key={tag} onClick={() => setQuery(tag)}>#{tag}</button>)}</div></section>
      </aside>
    </section>
  );
}
function SampleQr() {
  return (
    <svg
      className="sample-qr"
      viewBox="0 0 116 116"
      role="img"
      aria-label="示例二维码，仅用于页面展示"
    >
      <rect width="116" height="116" fill="currentColor" opacity=".08" />
      <g fill="currentColor">
        <path d="M8 8h31v31H8zm6 6v19h19V14zM77 8h31v31H77zm6 6v19h19V14zM8 77h31v31H8zm6 6v19h19V83zM48 9h7v7h-7zm14 0h8v8h-8zm-14 15h14v7H48zm15 9h8v8h-8zm-15 15h8v8h-8zm15 0h7v15h-7zm15 0h8v8h-8zm16 0h9v9h-9zM48 63h8v8h-8zm15 0h8v8h-8zm15 0h15v7H78zm-30 15h8v8h-8zm15 0h8v15h-8zm15 0h8v8h-8zm16 15h14v8H94zM48 94h8v14h-8zm15 0h16v8H63z" />
      </g>
    </svg>
  );
}
function AboutPage() {
  const channels = [
    ["合作微信号", "微信名片", "添加中", "用于项目合作与技术咨询"],
    ["交流 QQ 群", "社群交流", "即将开放", "和正在做产品的人交换经验"],
    ["抖音", "短视频", "开发阿雷", "技术变化里的个人实践"],
    ["哔哩哔哩", "视频频道", "开发阿雷", "把开发过程讲得更明白"],
    ["小红书", "图文记录", "开发阿雷", "工具、创作与工作流"],
    ["微信公众号", "深度文章", "开发阿雷", "值得慢慢读完的技术故事"],
  ];
  return (
    <section className="page-section about-page about-profile">
      <div className="about-intro">
        <div className="about-portrait">
          <span>👨🏻‍💻</span>
          <i>HELLO!</i>
        </div>
        <div className="about-statement">
          <p className="label">DEVELOPER / WRITER / MAKER</p>
          <h2>
            把复杂技术讲清楚，
            <br />
            把好用工具做出来。
          </h2>
          <p className="about-lead">
            从技术变化到个人实践，写给不想被术语挡住的人。
          </p>
          <p>
            我在产品、设计与开发之间来回切换；这里记录可复用的方法，也保留尚未有答案的问题。
          </p>
          <div className="number-row">
            <b>
              6<small>年写作</small>
            </b>
            <b>
              42<small>篇文章</small>
            </b>
            <b>
              12<small>个项目</small>
            </b>
          </div>
        </div>
        <aside className="about-now">
          <b>现在正在</b>
          <p>整理一套给独立开发者用的写作工作台。</p>
          <Dot />
        </aside>
      </div>
      <div className="about-services">
        <div>
          <p className="label">TECHNICAL SERVICES / 01</p>
          <h2>有要落地的技术想法？</h2>
          <p>从需求梳理、原型验证到前端实现，把值得做的事情更快推到下一步。</p>
        </div>
        <a href="https://shop.qqphp.com" target="_blank" rel="noreferrer">
          <span>技术服务商店</span>
          <b>去看看 →</b>
          <small>shop.qqphp.com</small>
        </a>
      </div>
      <section className="about-channels">
        <div className="about-section-heading">
          <p className="label">FIND ME / 02</p>
          <h2>在不同的地方，继续交流。</h2>
        </div>
        <div className="channel-grid">
          {channels.map(([name, type, account, description], index) => (
            <article key={name}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <small>{type}</small>
              <h3>{name}</h3>
              <div className="channel-card-body">
                <div>
                  <strong>{account}</strong>
                  <p>{description}</p>
                </div>
                <SampleQr />
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="about-explore">
        <p className="label">START HERE / 03</p>
        <h2>不需要搜索。选一个此刻最关心的方向，慢慢往里走。</h2>
        <div>
          {[
            ["技术与工具", "把工具真正用进工作流。"],
            ["产品与实践", "从一个问题走到可用的答案。"],
            ["独立开发", "给长期项目留出完成的空间。"],
          ].map(([title, text]) => (
            <button key={title}>
              <b>{title}</b>
              <span>{text}</span>
              <i>↘</i>
            </button>
          ))}
        </div>
      </div>
      <div className="about-principles">
        <article>
          <p className="label">WRITING PRINCIPLE / 04</p>
          <h2>
            先说解决了什么问题，
            <br />
            再聊技术、取舍和走过的弯路。
          </h2>
        </article>
        <article>
          <p className="label">WHAT STAYS / 05</p>
          <h2>
            不追热点的每一次浪潮，
            <br />
            只分享值得留下的东西。
          </h2>
        </article>
      </div>
    </section>
  );
}
function CollaborationPage() {
  const [submitted, setSubmitted] = useState(false);
  const services = [
    [
      "01",
      "软件定制开发",
      "从业务流程、管理后台到面向用户的 Web 应用，按真实需求完成交付。",
    ],
    [
      "02",
      "技术部署服务",
      "完成服务器、域名、环境、发布与基础监控，让产品可靠上线。",
    ],
    [
      "03",
      "技术咨询服务",
      "在方案选型、系统架构、性能与风险之间，给出可执行的建议。",
    ],
    ["04", "软件维护服务", "持续处理迭代、故障排查、安全更新与体验优化。"],
    ["05", "原型与界面实现", "先把关键路径做成可讨论的原型，再推进前端开发。"],
    [
      "06",
      "其他互联网需求",
      "暂不在列表里的需求也欢迎说明；我会评估，或联系合适的朋友共同解决。",
    ],
  ];
  const openForm = () => {
    setSubmitted(false);
    document.getElementById("collaboration-form").showModal();
  };
  return (
    <section className="page-section collaboration-page">
      <section className="collaboration-brief">
        <div>
          <p className="label">INTERNET SERVICES / 01</p>
          <h2>
            把业务需求，
            <br />
            变成能稳定使用的软件。
          </h2>
          <p>
            我提供软件开发、技术部署、技术咨询与长期维护等互联网服务。先理解你要解决的问题，再一起确定范围、节奏与交付方式。
          </p>
          <button onClick={openForm}>发起一场交流 →</button>
        </div>
        <a href="https://shop.qqphp.com" target="_blank" rel="noreferrer">
          <span>TECH SERVICE SHOP</span>
          <b>
            技术服务店铺
            <br />
            shop.qqphp.com
          </b>
          <i>去看看 ↗</i>
        </a>
      </section>
      <section className="collaboration-services">
        <div className="collaboration-heading">
          <p className="label">WHAT I CAN HELP / 02</p>
          <h2>可以一起做什么？</h2>
          <span>从一个清楚的问题开始。</span>
        </div>
        <div className="service-grid">
          {services.map((x) => (
            <article key={x[0]}>
              <b>{x[0]}</b>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
              <span>→</span>
            </article>
          ))}
        </div>
      </section>
      <section className="delivery-process">
        <div>
          <p className="label">WORKING PROCESS / 03</p>
          <h2>每一步都有可确认的产出。</h2>
          <p>不把沟通留到最后：从目标、方案到上线，都在短周期内对齐。</p>
        </div>
        <ol>
          {[
            ["01", "理解需求", "了解业务场景、目标和现有条件。"],
            ["02", "确认方案", "拆分范围、交付物、节奏与预算。"],
            ["03", "开发与同步", "小步实现，阶段性交付并持续沟通。"],
            ["04", "上线与维护", "完成部署、交接和后续支持。"],
          ].map(([number, title, description]) => (
            <li key={number}>
              <b>{number}</b>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="collaboration-note">
        <p className="label">ONE MORE THING / 04</p>
        <h2>需求不在服务列表里，也可以先说说。</h2>
        <p>
          如果它不是我最适合完成的事情，我会尽力联系可信赖的设计、开发或运营朋友，一起找到更合适的解决方式。
        </p>
        <button onClick={openForm}>描述你的需求 →</button>
      </section>
      <dialog id="collaboration-form" className="collaboration-dialog">
        <button
          className="dialog-close"
          onClick={(event) => event.currentTarget.parentElement.close()}
          aria-label="关闭"
        >
          ×
        </button>
        {submitted ? (
          <div className="form-success">
            <p className="label">REQUEST RECEIVED</p>
            <h2>收到你的需求。</h2>
            <p>
              这是当前原型的本地提交反馈；接入邮件或表单服务后，信息将会发送给我。
            </p>
            <button
              onClick={(event) => event.currentTarget.closest("dialog").close()}
            >
              关闭
            </button>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <p className="label">START A CONVERSATION</p>
            <h2>告诉我，你想解决什么？</h2>
            <div className="form-grid">
              <label>
                个人昵称
                <input name="nickname" required placeholder="怎么称呼你" />
              </label>
              <label>
                个人邮箱
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                />
              </label>
              <label className="full">
                需求描述
                <textarea
                  name="requirement"
                  required
                  rows="5"
                  placeholder="项目背景、想解决的问题、期待的结果…"
                />
              </label>
              <label>
                备注信息（选填）
                <input name="note" placeholder="预算、计划时间或其他说明" />
              </label>
              <label>
                联系方式（选填）
                <input name="contact" placeholder="微信、电话或其他联系方式" />
              </label>
            </div>
            <button className="form-submit" type="submit">
              提交需求 →
            </button>
            <small>提交后将由我确认并联系你；当前为 MVP 本地演示。</small>
          </form>
        )}
      </dialog>
    </section>
  );
}
function WorksPage() {
  const [type, setType] = useState("全部");
  const [sort, setSort] = useState("精选优先");
  const [query, setQuery] = useState("");
  const types = ["全部", ...new Set(productCatalog.map((item) => item.type))];
  const sorted = productCatalog
    .filter(
      (item) =>
        (type === "全部" || item.type === type) &&
        `${item.name}${item.summary}${item.tags}`
          .toLowerCase()
          .includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "精选优先"
        ? Number(b.featured) - Number(a.featured) ||
          b.date.localeCompare(a.date)
        : sort === "最新发布"
          ? b.date.localeCompare(a.date)
          : a.status.localeCompare(b.status),
    );
  const featured = productCatalog.filter((item) => item.featured);
  return (
    <section className="page-section product-library">
      <section className="all-products">
        <div className="library-heading">
          <p className="label">PRODUCT LIBRARY / 01</p>
          <h2>全部产品</h2>
          <span>从全部实践中，慢慢找到你感兴趣的方向。</span>
        </div>
        <div className="product-toolbar">
          <nav aria-label="产品类型">
            {types.map((item) => (
              <button
                className={type === item ? "selected" : ""}
                onClick={() => setType(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </nav>
          <div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索产品…"
              aria-label="搜索产品"
            />
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="排序"
            >
              <option>精选优先</option>
              <option>最新发布</option>
              <option>项目状态</option>
            </select>
          </div>
        </div>
        <p className="product-count">共 {sorted.length} 个产品</p>
        <div className="product-grid">
          {sorted.map((item) => (
            <article key={item.name}>
              <img src={item.image} alt="" />
              <div>
                <small>
                  {item.type} · {item.status}
                </small>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <span>{item.tags}</span>
                <button>查看案例 ↗</button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <aside className="featured-products">
        <div className="library-heading">
          <p className="label">EDITOR’S PICK / 02</p>
          <h2>精选作品</h2>
          <span>三项代表作，作为快速入口。</span>
        </div>
        <div>
          {featured.map((item, index) => (
            <article key={item.name} className={index === 0 ? "lead" : ""}>
              <img src={item.image} alt="" />
              <div>
                <small>
                  {item.type} · {item.status}
                </small>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <button>查看案例 ↗</button>
              </div>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
function ActivityPage() {
  const landscapes = [
    "photo-1500534623283-312aade485b7",
    "photo-1501785888041-af3ef285b470",
    "photo-1441974231531-c6227db76b6e",
    "photo-1464822759023-fed622ff2c3b",
    "photo-1470770841072-f978cf4d019e",
    "photo-1506744038136-46273834b3fb",
    "photo-1507525428034-b723cf961d3e",
    "photo-1470252649378-9c29740c9fa8",
    "photo-1469474968028-56623f02e42e",
  ].map(
    (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`,
  );
  const updates = [
    {
      id: 1,
      date: "2026-08-03",
      place: "杭州 · 工作室",
      text: "把合作页重新拆了一遍。先把客户真正关心的交付过程说清楚，比堆叠技术名词更有用。",
      emoji: "🛠️",
    },
    {
      id: 2,
      date: "2026-08-01",
      place: "杭州 · 西湖边",
      text: "下午带着电脑出门，给网站换了一组风景照片。屏幕里和屏幕外，刚好都是同一种安静。",
      images: landscapes.slice(0, 1),
    },
    {
      id: 3,
      date: "2026-07-29",
      place: "线上",
      text: "写完了一篇关于需求沟通的笔记。很多项目不是做不出来，而是还没说清楚要解决什么。",
      link: {
        label: "读这篇：别急着写代码，先让需求变得可以讨论",
        href: "?page=articles",
      },
    },
    {
      id: 4,
      date: "2026-07-26",
      place: "杭州 · 家里",
      text: "今天把知识库里积压的 42 条笔记归到三个问题下面。删掉一半以后，反而更容易继续写。",
      emoji: "✂️",
    },
    {
      id: 5,
      date: "2026-07-22",
      place: "上海 · 出差路上",
      text: "在高铁上看完《设计中的设计》。提醒自己：先把事情做对，再想怎么做得更酷。",
      emoji: "📖",
    },
    {
      id: 6,
      date: "2026-07-19",
      place: "杭州 · 城市边缘",
      text: "一张照片也可以是完整的记录。",
      images: landscapes.slice(1, 2),
    },
    {
      id: 7,
      date: "2026-07-18",
      place: "杭州 · 山里",
      text: "三张图，记住这次短暂离线。",
      images: landscapes.slice(0, 3),
    },
    {
      id: 8,
      date: "2026-07-17",
      place: "浙江 · 海边",
      text: "六张图，留给傍晚和海风。",
      images: landscapes.slice(3, 9),
    },
    {
      id: 9,
      date: "2026-07-16",
      place: "浙江 · 远山",
      text: "七张图，试试不规则但依然安静的排版。",
      images: [...landscapes.slice(0, 6), landscapes[8]],
    },
    {
      id: 10,
      date: "2026-07-15",
      place: "浙江 · 沿途",
      text: "九张图，刚好装下一次出行的完整片段。",
      images: landscapes,
    },
    {
      id: 11,
      date: "2026-07-14",
      place: "浙江 · 山脚",
      text: "两张图，留住出发前和抵达后的光线。",
      images: landscapes.slice(4, 6),
    },
    {
      id: 12,
      date: "2026-07-13",
      place: "浙江 · 海岸线",
      text: "八张图，是这段路上舍不得删掉的片段。",
      images: landscapes.slice(1, 9),
    },
    {
      id: 13,
      date: "2025-12-18",
      place: "线上",
      text: "把技术服务商店的第一批服务整理上线，给“知道自己需要什么”的人一个直接入口。",
      link: { label: "看看技术服务商店", href: "https://shop.qqphp.com" },
    },
  ];
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const earliestYear = Math.min(
    ...updates.map((item) => Number(item.date.slice(0, 4))),
  );
  const years = Array.from(
    { length: currentYear - earliestYear + 1 },
    (_, index) => currentYear - index,
  );
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState("");
  const [activeImage, setActiveImage] = useState(null);
  const months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];
  const makeDate = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const activeDays = new Set(
    updates
      .filter((item) =>
        item.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`),
      )
      .map((item) => Number(item.date.slice(-2))),
  );
  const visible = selectedDate
    ? updates.filter((item) => item.date === selectedDate)
    : updates.filter((item) => item.date.startsWith(`${year}-`));
  const chooseYear = (nextYear) => {
    setYear(nextYear);
    if (nextYear === currentYear && month > currentMonth)
      setMonth(currentMonth);
    setSelectedDate("");
  };
  const shiftMonth = (offset) => {
    const next = new Date(year, month + offset, 1);
    if (
      next > new Date(currentYear, currentMonth, 1) ||
      next.getFullYear() < earliestYear
    )
      return;
    setYear(next.getFullYear());
    setMonth(next.getMonth());
    setSelectedDate("");
  };
  return (
    <section className="page-section activity-page activity-diary">
      <section className="activity-stream">
        <div className="activity-stream-heading">
          <p className="label">MY MOMENTS</p>
          <h2>
            {selectedDate
              ? `${selectedDate.replaceAll("-", ".")} 的动态`
              : "最近动态"}
          </h2>
          {selectedDate && (
            <button onClick={() => setSelectedDate("")}>查看全部 ×</button>
          )}
        </div>
        {visible.length ? (
          <div className="activity-list">
            {visible.map((item) => (
              <article key={item.id}>
                <time>{item.date.replaceAll("-", ".")}</time>
                <div className="activity-pin">●</div>
                <div className="activity-entry">
                  <small>⌖ {item.place}</small>
                  <p>{item.text}</p>
                  {item.images && (
                    <div
                      className={`activity-photo-grid count-${item.images.length}`}
                    >
                      {item.images.map((image, index) => (
                        <button
                          type="button"
                          className="activity-photo-button"
                          onClick={() =>
                            setActiveImage({
                              src: image,
                              alt: `${item.place} 的风景记录 ${index + 1}`,
                            })
                          }
                          key={image + index}
                          aria-label={`放大查看 ${item.place} 的第 ${index + 1} 张图片`}
                        >
                          <img
                            src={image}
                            alt={`${item.place} 的风景记录 ${index + 1}`}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <a
                      href={item.link.href}
                      target={
                        item.link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.link.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      {item.link.label} ↗
                    </a>
                  )}
                  {item.emoji && (
                    <span className="activity-emoji">{item.emoji}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="activity-empty">
            <b>这一天没有公开动态。</b>
            <p>换个日期，或查看全部记录。</p>
            <button onClick={() => setSelectedDate("")}>查看全部</button>
          </div>
        )}
      </section>
      <aside className="activity-calendar">
        <div className="calendar-heading">
          <p className="label">CALENDAR FILTER</p>
          <label className="year-picker">
            <span className="sr-only">选择年份</span>
            <select
              value={year}
              onChange={(event) => chooseYear(Number(event.target.value))}
            >
              {years.map((item) => (
                <option key={item} value={item}>
                  {item} 年
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="calendar-month">
          <button onClick={() => shiftMonth(-1)} aria-label="上一个月">
            ←
          </button>
          <b>
            {year} 年 {months[month]}
          </b>
          <button
            onClick={() => shiftMonth(1)}
            aria-label="下一个月"
            disabled={year === currentYear && month === currentMonth}
          >
            →
          </button>
        </div>
        <div className="calendar-weekdays">
          {["一", "二", "三", "四", "五", "六", "日"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="calendar-days">
          {Array.from({ length: firstDay }, (_, index) => (
            <span className="calendar-blank" key={`blank-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const date = makeDate(day);
            const future =
              new Date(year, month, day) >
              new Date(currentYear, currentMonth, today.getDate());
            return (
              <button
                key={date}
                disabled={future}
                className={`${activeDays.has(day) ? "has-entry" : ""} ${selectedDate === date ? "selected" : ""}`}
                onClick={() => setSelectedDate(date)}
                aria-label={`筛选 ${date}`}
              >
                {day}
              </button>
            );
          })}
        </div>
        <p className="calendar-note">
          <i /> 有公开动态　未来日期不可选
        </p>
      </aside>
      {activeImage && (
        <div
          className="activity-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="放大图片预览"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="activity-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="关闭图片预览"
            >
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}
function FriendsPage() {
  const friendLinks = [
    ["少数派", "数字生活与高质量内容", "内容", true],
    ["设计小报", "关于视觉与产品的周刊", "设计", true],
    ["独立开发者", "一群正在做产品的人", "开发", true],
    ["慢慢做", "创作、工具与长期主义", "创作", true],
    ["NOWNESS", "影像、设计与文化采样", "灵感", true],
    ["前端食堂", "写给前端人的工程实践", "技术", true],
    ["今日热榜", "把值得关注的信息整理成一页", "资讯"],
    ["Maybe", "独立杂志与城市文化采样", "灵感"],
    ["设计之外", "设计师的生活与工作观察", "设计"],
    ["小众软件", "发现有趣、实用的数字工具", "工具"],
    ["CSS-Tricks", "前端样式与实践笔记", "技术"],
    ["A List Apart", "面向 Web 的设计思考", "设计"],
    ["Margin", "独立杂志与长文阅读", "内容"],
    ["Read.cv", "创作者的个人档案", "创作"],
    ["Are.na", "把灵感连成自己的路径", "灵感"],
    ["The Browser", "每周值得读的五篇文章", "内容"],
    ["Dense Discovery", "独立产品与数字文化周刊", "资讯"],
    ["Sidebar", "设计与开发资源收集", "工具"],
    ["Product Hunt", "新产品与独立开发者社区", "开发"],
    ["Vercel", "现代前端部署与工程实践", "技术"],
    ["Notion Template", "个人与团队工作流模板", "工具"],
    ["The Brand Identity", "品牌识别与视觉案例", "设计"],
    ["Creative Independent", "关于创作与职业的对话", "创作"],
    ["Linear Blog", "产品团队的工作方式", "开发"],
  ].map(([name, description, category, featured], index) => ({
    id: index + 1,
    name,
    description,
    category,
    featured,
  }));
  const [view, setView] = useState("list");
  const [category, setCategory] = useState("全部");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("最近新增");
  const [limit, setLimit] = useState(12);
  const [exchangeOpen, setExchangeOpen] = useState(false);
  const [exchangeSubmitted, setExchangeSubmitted] = useState(false);
  const categories = [
    "全部",
    ...new Set(friendLinks.map((item) => item.category)),
  ];
  const filtered = friendLinks
    .filter(
      (item) =>
        (category === "全部" || item.category === category) &&
        `${item.name}${item.description}${item.category}`
          .toLowerCase()
          .includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "名称 A-Z"
        ? a.name.localeCompare(b.name, "zh-CN")
        : sort === "推荐优先"
          ? Number(b.featured) - Number(a.featured) || b.id - a.id
          : b.id - a.id,
    );
  const shown = filtered.slice(0, limit);
  const resetAnd = (action) => {
    action();
    setLimit(12);
  };
  return (
    <section className={"page-section friends-page friend-directory " + view}>
      <section className="friend-exchange">
        <div>
          <p className="label">LINK EXCHANGE / OPEN</p>
          <h2>
            一个好站点，
            <br />
            值得被更多正在寻找的人遇见。
          </h2>
          <p>
            如果你也在认真记录、持续创造，欢迎把你的链接留在这里。我们不只互放一个入口，也交换那些能让彼此前进的想法。
          </p>
        </div>
        <button
          onClick={() => {
            setExchangeSubmitted(false);
            setExchangeOpen(true);
          }}
        >
          交换链接 →
        </button>
      </section>
      <section className="friends-all">
        <div className="friends-section-heading">
          <p className="label">ALL FRIENDS</p>
          <h2>全部友链</h2>
          <span>
            {filtered.length} / {friendLinks.length} 个站点
          </span>
        </div>
        <div className="friends-toolbar">
          <div className="friend-filters">
            <input
              value={query}
              onChange={(event) => resetAnd(() => setQuery(event.target.value))}
              placeholder="搜索名称、分类或描述…"
              aria-label="搜索友链"
            />
            <select
              value={sort}
              onChange={(event) => resetAnd(() => setSort(event.target.value))}
              aria-label="排序友链"
            >
              <option>最近新增</option>
              <option>推荐优先</option>
              <option>名称 A-Z</option>
            </select>
          </div>
          <div role="group" aria-label="友链展示方式">
            <button
              className={view === "list" ? "selected" : ""}
              onClick={() => setView("list")}
            >
              ☷ 列表
            </button>
            <button
              className={view === "cards" ? "selected" : ""}
              onClick={() => setView("cards")}
            >
              ▦ 卡片
            </button>
          </div>
        </div>
        <nav className="friend-category-nav" aria-label="友链分类">
          {categories.map((item) => (
            <button
              className={category === item ? "selected" : ""}
              key={item}
              onClick={() => resetAnd(() => setCategory(item))}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="friend-collection">
          {shown.map((item) => (
            <article key={item.id}>
              <span>{item.name.slice(0, 1)}</span>
              <div>
                <small>{item.category}</small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <button aria-label={`访问 ${item.name}`}>↗</button>
            </article>
          ))}
        </div>
        {shown.length < filtered.length && (
          <button
            className="friend-load-more"
            onClick={() => setLimit((value) => value + 12)}
          >
            加载更多 <b>↓</b>
          </button>
        )}
      </section>
      {exchangeOpen && (
        <div
          className="friend-exchange-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="交换链接"
          onClick={() => setExchangeOpen(false)}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <button
              className="dialog-close"
              onClick={() => setExchangeOpen(false)}
              aria-label="关闭交换链接表单"
            >
              ×
            </button>
            {exchangeSubmitted ? (
              <section className="exchange-success">
                <p className="label">LINK RECEIVED</p>
                <h2>谢谢你把站点留在这里。</h2>
                <p>
                  这是当前原型的本地提交反馈；正式接入表单服务后，我会收到并认真阅读你的链接。
                </p>
                <button onClick={() => setExchangeOpen(false)}>关闭</button>
              </section>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setExchangeSubmitted(true);
                }}
              >
                <p className="label">ADD YOUR LINK</p>
                <h2>让更多人遇见你的站点。</h2>
                <div className="form-grid">
                  <label>
                    名称
                    <input name="name" required placeholder="站点或你的名字" />
                  </label>
                  <label>
                    链接
                    <input
                      name="url"
                      type="url"
                      required
                      placeholder="https://example.com"
                    />
                  </label>
                  <label>
                    邮箱
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                    />
                  </label>
                  <label>
                    类型（选填）
                    <input name="type" placeholder="技术、设计、咨询、创作…" />
                  </label>
                  <label className="full">
                    描述
                    <textarea
                      name="description"
                      rows="4"
                      required
                      placeholder="用几句话介绍你的站点，以及它正在认真做的事。"
                    />
                  </label>
                </div>
                <button className="form-submit" type="submit">
                  提交链接 →
                </button>
                <small>当前为 MVP 本地演示，提交内容暂不会发送或保存。</small>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
function MiniChart({ tone = "green" }) {
  const paths = {
    green:
      "M4 76 L22 61 L38 67 L55 38 L72 49 L91 24 L111 34 L132 13 L151 22 L171 7",
    yellow:
      "M4 41 L24 50 L43 29 L62 45 L82 25 L101 39 L121 20 L141 30 L159 14 L171 21",
    blue: "M4 60 L21 39 L40 47 L60 31 L80 54 L100 36 L119 43 L139 17 L158 28 L171 11",
  };
  return (
    <svg
      className={"mini-chart " + tone}
      viewBox="0 0 176 88"
      role="img"
      aria-label="示例走势复盘图"
    >
      <path className="chart-grid" d="M0 20H176M0 44H176M0 68H176" />
      <path className="chart-area" d={`${paths[tone]} L171 88 L4 88 Z`} />
      <path className="chart-line" d={paths[tone]} />
      <circle
        cx="132"
        cy={tone === "green" ? 13 : tone === "yellow" ? 30 : 17}
        r="4"
      />
    </svg>
  );
}
function InvestmentPage() {
  const categories = ["全部", "投资技术分析", "投资技术指标", "图表复盘", "研究框架"];
  const articles = [
    ["2026.08.02", "趋势线失效之后，下一步应该观察什么？", "投资技术分析", "把转折点、量能与下一次验证条件写进同一篇记录。"],
    ["2026.07.30", "成交量突然放大时，我会先问的三个问题", "投资技术分析", "先分辨情绪、消息与预期变化，再决定是否值得继续研究。"],
    ["2026.07.24", "给每次技术判断补上“推翻条件”", "研究框架", "不急着证明自己对，先写清楚什么情况会让观点失效。"],
    ["2026.07.19", "均线：用不同周期确认趋势位置", "投资技术指标", "均线并非信号本身，而是帮助判断价格处在什么趋势位置。"],
    ["2026.07.14", "成交量：价格变化背后的参与度", "投资技术指标", "从放量、缩量到量价背离，先把成交量放回具体背景里理解。"],
    ["2026.07.09", "相对强弱：识别节奏，而不是预测转折", "投资技术指标", "RSI 的极端值是提醒，不是替代独立判断的按钮。"],
    ["2026.07.02", "一次突破回落的完整复盘", "图表复盘", "记录当时看到的条件、后续变化，以及遗漏的风险边界。"],
    ["2026.06.27", "看盘前，先写下今天只验证什么", "研究框架", "限定问题范围，避免盘中信息越来越多、判断却越来越散。"],
    ["2026.06.21", "MACD 交叉值得看，但不值得孤立地看", "投资技术指标", "快慢线的关系要和趋势、位置、成交量放在一起复盘。"],
    ["2026.06.16", "横盘区间里，如何识别真正的变化", "投资技术分析", "比起猜方向，更重要的是提前写下两边被打破后的观察方案。"],
    ["2026.06.08", "一张图复盘情绪与量能的错位", "图表复盘", "市场情绪看似热烈时，先检查参与度是否真的跟上。"],
    ["2026.06.01", "为研究笔记建立可回看的索引", "研究框架", "把结论、证据和推翻条件放在同一个可检索的结构里。"],
  ];
  const [activeCategory, setActiveCategory] = useState("全部");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredArticles = articles.filter((article) => (activeCategory === "全部" || article[2] === activeCategory) && (!normalizedQuery || article.join(" ").toLowerCase().includes(normalizedQuery)));
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const selectCategory = (category) => { setActiveCategory(category); setVisibleCount(4); };

  return (
    <section className="page-section investment-page investment-research investment-hub">
      <div className="investment-home-layout">
        <div className="investment-reading-stack">
          <section className="investment-library">
            <div className="investment-heading">
              <p className="label">INVESTMENT ARTICLES / 02</p><h2>投资研究文章</h2><span>{filteredArticles.length} 篇内容，持续整理中。</span>
            </div>
            <div className="investment-library-toolbar">
              <nav aria-label="投资文章分类">{categories.map((category) => <button className={activeCategory === category ? "selected" : ""} key={category} onClick={() => selectCategory(category)}>{category}</button>)}</nav>
              <label><span className="sr-only">搜索投资文章</span><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(4); }} placeholder="搜索文章、指标、关键词…" /></label>
            </div>
            <div className="investment-article-list">
              {visibleArticles.map(([date, title, category, summary], index) => <article key={title}>
                <time>{date}</time><div><small>{category}</small><h3>{title}</h3><p>{summary}</p></div><b>{String(index + 1).padStart(2, "0")}</b>
              </article>)}
              {!visibleArticles.length && <p className="investment-empty">没有匹配的文章，换个关键词或分类试试。</p>}
            </div>
            {visibleCount < filteredArticles.length && <button className="investment-more" onClick={() => setVisibleCount((count) => count + 4)}>加载更多文章 <b>↓</b></button>}
          </section>
        </div>

        <aside className="investment-community">
          <p className="label">INVESTMENT COMMUNITY / 04</p>
          <h2>投资技术交流</h2>
          <p>一个聊图表、指标和研究方法的小范围交流区。分享过程，也欢迎不同观点。</p>
          <div className="investment-qr"><SampleQr /><span>扫码加入交流群</span></div>
          <dl><div><dt>交流主题</dt><dd>技术分析 / 指标学习 / 复盘记录</dd></div><div><dt>适合谁来</dt><dd>愿意独立思考、友善交流的人</dd></div></dl>
          <button data-soon="投资技术交流入口">申请加入交流 ↗</button>
          <small>群二维码与具体规则可在后续后台配置。</small>
        </aside>
      </div>
    </section>
  );
}
function BookmarksPage() {
  const entries = [
    [
      "Raycast",
      "把常用动作收进一个更快的启动器。",
      "开发工具",
      "效率工具",
      "https://www.raycast.com",
    ],
    [
      "Warp",
      "为开发者重新设计的终端。",
      "开发工具",
      "效率工具",
      "https://www.warp.dev",
    ],
    [
      "Linear",
      "清晰、快速的产品与工程协作工具。",
      "开发工具",
      "项目协作",
      "https://linear.app",
    ],
    [
      "Vercel",
      "现代 Web 项目的部署与发布平台。",
      "开发工具",
      "部署发布",
      "https://vercel.com",
    ],
    [
      "GitHub",
      "代码、协作与开源社区的基础设施。",
      "开发工具",
      "项目协作",
      "https://github.com",
    ],
    [
      "Obsidian",
      "本地优先的知识库与写作工具。",
      "开发工具",
      "效率工具",
      "https://obsidian.md",
    ],
    [
      "CSS-Tricks",
      "关于 CSS 和前端实践的长期笔记。",
      "设计与前端",
      "前端工程",
      "https://css-tricks.com",
    ],
    [
      "MDN Web Docs",
      "可靠的 Web 技术参考资料。",
      "设计与前端",
      "前端工程",
      "https://developer.mozilla.org",
    ],
    [
      "A List Apart",
      "Web 设计、内容和体验的深度文章。",
      "设计与前端",
      "设计思考",
      "https://alistapart.com",
    ],
    [
      "Figma",
      "协作式界面设计与原型工具。",
      "设计与前端",
      "设计工具",
      "https://www.figma.com",
    ],
    [
      "The Brand Identity",
      "品牌设计与视觉系统案例。",
      "设计与前端",
      "设计灵感",
      "https://the-brandidentity.com",
    ],
    [
      "It’s Nice That",
      "创意行业的视觉灵感采样。",
      "设计与前端",
      "设计灵感",
      "https://www.itsnicethat.com",
    ],
    [
      "少数派",
      "数字生活、工具与认真生活方式。",
      "阅读与写作",
      "中文内容",
      "https://sspai.com",
    ],
    [
      "The Browser",
      "每周值得读完的五篇文章。",
      "阅读与写作",
      "英文内容",
      "https://thebrowser.com",
    ],
    [
      "Margin",
      "值得慢慢读的独立杂志。",
      "阅读与写作",
      "独立杂志",
      "https://margin.com",
    ],
    [
      "NOWNESS",
      "影像、城市与当代文化。",
      "阅读与写作",
      "独立杂志",
      "https://www.nowness.com",
    ],
    [
      "The Creative Independent",
      "关于创作、工作和生活的对话。",
      "阅读与写作",
      "英文内容",
      "https://thecreativeindependent.com",
    ],
    [
      "好奇心日报",
      "面向日常的商业与文化观察。",
      "阅读与写作",
      "中文内容",
      "https://www.qdaily.com",
    ],
    [
      "Read.cv",
      "创作者与独立工作者的个人档案。",
      "独立站点",
      "个人主页",
      "https://read.cv",
    ],
    [
      "Are.na",
      "把碎片灵感连成自己的路径。",
      "独立站点",
      "灵感社区",
      "https://www.are.na",
    ],
    [
      "Dense Discovery",
      "独立产品和数字文化周刊。",
      "独立站点",
      "独立产品",
      "https://www.densediscovery.com",
    ],
    [
      "Sidebar",
      "为设计师准备的高质量资源库。",
      "独立站点",
      "资源库",
      "https://sidebar.io",
    ],
    [
      "Product Hunt",
      "发现新产品与独立开发者。",
      "独立站点",
      "独立产品",
      "https://www.producthunt.com",
    ],
    [
      "Muzli",
      "设计资源与灵感的每日入口。",
      "独立站点",
      "资源库",
      "https://muz.li",
    ],
  ].map(([name, description, primary, secondary, url], index) => ({
    id: index + 1,
    name,
    description,
    primary,
    secondary,
    url,
  }));
  const filters = {
    全部: ["全部"],
    开发工具: ["全部", "效率工具", "项目协作", "部署发布"],
    设计与前端: ["全部", "前端工程", "设计思考", "设计工具", "设计灵感"],
    阅读与写作: ["全部", "中文内容", "英文内容", "独立杂志"],
    独立站点: ["全部", "个人主页", "灵感社区", "独立产品", "资源库"],
  };
  const tagMap = {
    效率工具: ["桌面应用", "工作流", "个人效率"],
    项目协作: ["团队协作", "开源", "产品管理"],
    部署发布: ["云服务", "持续部署"],
    前端工程: ["CSS", "JavaScript", "参考资料"],
    设计思考: ["用户体验", "内容策略"],
    设计工具: ["协作设计", "原型"],
    设计灵感: ["视觉采样", "品牌"],
    中文内容: ["深度阅读", "数字生活"],
    英文内容: ["创作者", "长文"],
    独立杂志: ["影像", "文化"],
    个人主页: ["作品集", "职业"],
    灵感社区: ["收藏", "知识网络"],
    独立产品: ["独立开发", "创业"],
    资源库: ["导航", "设计资源"],
  };
  const bookmarks = entries.map((item, index) => ({
    ...item,
    tags: (tagMap[item.secondary] || []).filter(
      (_, tagIndex) => (index + tagIndex) % 2 === 0,
    ),
  }));
  const [primary, setPrimary] = useState("全部");
  const [secondary, setSecondary] = useState("全部");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(12);
  const [view, setView] = useState("list");
  const [tag, setTag] = useState("全部");
  const [expandedPrimary, setExpandedPrimary] = useState("开发工具");
  const scoped = bookmarks.filter(
    (item) =>
      (primary === "全部" || item.primary === primary) &&
      (secondary === "全部" || item.secondary === secondary),
  );
  const tags = ["全部", ...new Set(scoped.flatMap((item) => item.tags))];
  const visible = scoped.filter(
    (item) =>
      (tag === "全部" || item.tags.includes(tag)) &&
      `${item.name}${item.description}${item.primary}${item.secondary}${item.tags.join("")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const applyPrimary = (item) => {
    setPrimary(item);
    setSecondary("全部");
    setTag("全部");
    setLimit(12);
  };
  const applySecondary = (item) => {
    setSecondary(item);
    setTag("全部");
    setLimit(12);
  };
  return (
    <section
      className={`page-section bookmark-page bookmark-directory ${view}`}
    >
      <section className="bookmark-library">
        <div className="bookmark-library-heading">
          <div>
            <p className="label">BOOKMARK LIBRARY</p>
            <h2>慢慢收集，随时再遇见。</h2>
          </div>
          <div className="bookmark-library-actions">
            <span>
              {visible.length} / {entries.length} 条书签
            </span>
            <div role="group" aria-label="书签展示方式">
              <button
                className={view === "list" ? "selected" : ""}
                onClick={() => setView("list")}
              >
                ☷ 列表
              </button>
              <button
                className={view === "cards" ? "selected" : ""}
                onClick={() => setView("cards")}
              >
                ▦ 卡片
              </button>
            </div>
          </div>
        </div>
        <div className="bookmark-tag-bar">
          <b>{secondary === "全部" ? primary : secondary}</b>
          <nav aria-label="书签标签">
            {tags.map((item) => (
              <button
                className={tag === item ? "selected" : ""}
                key={item}
                onClick={() => {
                  setTag(item);
                  setLimit(12);
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="bookmark-card-grid">
          {visible.slice(0, limit).map((item) => {
            const host = new URL(item.url).hostname.replace("www.", "");
            return (
              <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
                <span className="bookmark-favicon">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${host}&sz=128`}
                    alt=""
                  />
                </span>
                <div>
                  <small>
                    {item.primary} / {item.secondary}
                  </small>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>
                    {host} <b>↗</b>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
        {visible.length > limit && (
          <button
            className="bookmark-load-more"
            onClick={() => setLimit((value) => value + 12)}
          >
            加载更多 <b>↓</b>
          </button>
        )}
      </section>
      <aside className="bookmark-filter bookmark-tree">
        <p className="label">BROWSE BOOKMARKS</p>
        <label>
          <span>搜索</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setLimit(12);
            }}
            placeholder="搜索网站、描述、分类…"
          />
        </label>
        <nav aria-label="书签二级分类">
          <button
            className={`bookmark-tree-root ${primary === "全部" ? "selected" : ""}`}
            onClick={() => {
              setPrimary("全部");
              setSecondary("全部");
              setTag("全部");
              setLimit(12);
              setExpandedPrimary("");
            }}
          >
            全部书签 <b>↗</b>
          </button>
          {Object.keys(filters)
            .filter((item) => item !== "全部")
            .map((item) => (
              <div className="bookmark-tree-group" key={item}>
                <button
                  className={primary === item ? "selected" : ""}
                  onClick={() => {
                    setExpandedPrimary(expandedPrimary === item ? "" : item);
                    applyPrimary(item);
                  }}
                >
                  <span>{item}</span>
                  <b>{expandedPrimary === item ? "⌃" : "⌄"}</b>
                </button>
                {expandedPrimary === item && (
                  <div>
                    {filters[item]
                      .filter((child) => child !== "全部")
                      .map((child) => (
                        <button
                          className={
                            primary === item && secondary === child
                              ? "selected"
                              : ""
                          }
                          key={child}
                          onClick={() => applySecondary(child)}
                        >
                          {child}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </nav>
        <p className="bookmark-filter-note">
          先从一个方向开始，再用上方标签继续缩小范围。
        </p>
      </aside>
    </section>
  );
}

export function MvpPage({ page }) {
  return (
    <main className="mvp-page">
      <Masthead page={page} />
      {page === "articles" && <ArticlesPage />}
      {page === "about" && <AboutPage />}
      {page === "collaboration" && <CollaborationPage />}
      {page === "works" && <WorksPage />}
      {page === "activity" && <ActivityPage />}
      {page === "friends" && <FriendsPage />}
      {page === "investment" && <InvestmentPage />}
      {page === "bookmarks" && <BookmarksPage />}
    </main>
  );
}
