function ControlBar({
  autoTour,
  onPrev,
  onNext,
  onStart,
  onPause,
  onHome,
  onFullscreen,
}) {
  return (
    <div className="control-bar" aria-label="导览操作">
      <button type="button" onClick={onPrev}>
        上一个场景
      </button>
      <button type="button" onClick={onNext}>
        下一个场景
      </button>
      <button type="button" onClick={onStart} disabled={autoTour}>
        开始自动导览
      </button>
      <button type="button" onClick={onPause} disabled={!autoTour}>
        暂停自动导览
      </button>
      <button type="button" onClick={onHome}>
        返回首页
      </button>
      <button type="button" onClick={onFullscreen}>
        全屏
      </button>
    </div>
  )
}

export default ControlBar
