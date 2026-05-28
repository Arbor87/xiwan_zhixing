function SceneList({ scenes, currentSceneId, onSelectScene }) {
  return (
    <nav className="scene-list" aria-label="场景列表">
      <p className="panel-label">导览场景</p>
      <div className="scene-items">
        {scenes.map((scene, index) => (
          <button
            key={scene.id}
            className={scene.id === currentSceneId ? 'scene-item active' : 'scene-item'}
            type="button"
            onClick={() => onSelectScene(scene.id)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {scene.title}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default SceneList
