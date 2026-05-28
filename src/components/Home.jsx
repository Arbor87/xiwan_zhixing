function Home({ onEnter }) {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">乡村振兴 × 绿色发展 × AI赋能</p>
          <h1>溪智绿行 AI 全景导览</h1>
          <p className="home-lead">
            面向乡村与校园实践展示的 720° 全景漫游原型，支持场景切换、热点跳转、自动导览与 AI 导游模拟讲解。
          </p>
          <button className="primary-action" type="button" onClick={onEnter}>
            进入导览
          </button>
        </div>
        <div className="home-status" aria-label="系统能力">
          <span>360° View</span>
          <span>Hotspots</span>
          <span>AI Guide</span>
        </div>
      </section>
      <section className="home-strip">
        <span>后溪村入口</span>
        <span>校园走廊</span>
        <span>支教课堂</span>
        <span>电商助农展区</span>
      </section>
    </main>
  )
}

export default Home
