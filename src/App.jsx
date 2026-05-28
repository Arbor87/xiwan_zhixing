import { useEffect, useMemo, useState } from 'react'
import Home from './components/Home.jsx'
import PanoramaViewer from './components/PanoramaViewer.jsx'
import SceneList from './components/SceneList.jsx'
import GuidePanel from './components/GuidePanel.jsx'
import ControlBar from './components/ControlBar.jsx'
import { scenes } from './data/scenes.js'
import './styles/main.css'

function App() {
  const initialSceneId = scenes.some((scene) => scene.id === window.location.hash.split('/')[1])
    ? window.location.hash.split('/')[1]
    : scenes[0].id
  const [view, setView] = useState(() =>
    window.location.hash.startsWith('#tour') ? 'tour' : 'home',
  )
  const [currentSceneId, setCurrentSceneId] = useState(initialSceneId)
  const [guideOpen, setGuideOpen] = useState(true)
  const [autoTour, setAutoTour] = useState(false)
  const [notice, setNotice] = useState('')

  const currentIndex = useMemo(
    () => scenes.findIndex((scene) => scene.id === currentSceneId),
    [currentSceneId],
  )
  const currentScene = scenes[currentIndex] ?? scenes[0]

  const goToScene = (sceneId) => {
    window.location.hash = `tour/${sceneId}`
    setCurrentSceneId(sceneId)
    setGuideOpen(true)
  }

  const goToOffset = (offset) => {
    const nextIndex = (currentIndex + offset + scenes.length) % scenes.length
    goToScene(scenes[nextIndex].id)
  }

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3600)
  }

  const enterTour = () => {
    window.location.hash = `tour/${currentSceneId}`
    setView('tour')
  }

  const returnHome = () => {
    window.location.hash = ''
    setAutoTour(false)
    setView('home')
  }

  useEffect(() => {
    if (!autoTour || view !== 'tour') return undefined

    const timer = window.setInterval(() => {
      setCurrentSceneId((sceneId) => {
        const index = scenes.findIndex((scene) => scene.id === sceneId)
        const nextSceneId = scenes[(index + 1) % scenes.length].id
        window.location.hash = `tour/${nextSceneId}`
        return nextSceneId
      })
      setGuideOpen(true)
    }, 8000)

    return () => window.clearInterval(timer)
  }, [autoTour, view])

  if (view === 'home') {
    return <Home onEnter={enterTour} />
  }

  return (
    <main className="tour-shell">
      <PanoramaViewer
        scene={currentScene}
        onGoToScene={goToScene}
        onShowGuide={() => setGuideOpen(true)}
        onShowInfo={() => showNotice(currentScene.description)}
      />

      <header className="tour-header">
        <button className="brand-button" type="button" onClick={returnHome}>
          溪智绿行
        </button>
        <span>AI 全景导览</span>
      </header>

      <SceneList
        scenes={scenes}
        currentSceneId={currentScene.id}
        onSelectScene={goToScene}
      />

      <GuidePanel
        scene={currentScene}
        open={guideOpen}
        autoTour={autoTour}
        onClose={() => setGuideOpen(false)}
      />

      <ControlBar
        autoTour={autoTour}
        onPrev={() => goToOffset(-1)}
        onNext={() => goToOffset(1)}
        onStart={() => setAutoTour(true)}
        onPause={() => setAutoTour(false)}
        onHome={returnHome}
        onFullscreen={() => document.documentElement.requestFullscreen?.()}
      />

      {notice && <div className="toast">{notice}</div>}
    </main>
  )
}

export default App
