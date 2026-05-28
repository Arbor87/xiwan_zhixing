function GuidePanel({ scene, open, autoTour, onClose }) {
  return (
    <aside className={open ? 'guide-panel open' : 'guide-panel'} aria-label="AI 导游讲解卡片">
      <div className="guide-head">
        <div>
          <p className="panel-label">AI 导游讲解</p>
          <h2>{scene.title}</h2>
        </div>
        <button className="icon-button mobile-close" type="button" onClick={onClose} aria-label="关闭讲解">
          ×
        </button>
      </div>

      <p className="guide-description">{scene.description}</p>

      <div className="ai-answer">
        <span>{autoTour ? '自动导览中' : '模拟回答'}</span>
        <p>
          您好，我是溪智绿行 AI 导游。当前场景是“{scene.title}”。我会根据游客位置和兴趣，推荐下一站并补充绿色发展、研学实践与助农服务信息。
        </p>
      </div>

      <ul className="guide-tips">
        {scene.aiTips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </aside>
  )
}

export default GuidePanel
