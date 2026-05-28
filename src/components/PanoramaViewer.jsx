import { useEffect, useRef, useState } from 'react'
import 'pannellum'
import 'pannellum/build/pannellum.css'

const missingImageMessage = '请将 2:1 比例全景图放入 public/panoramas 文件夹'

function PanoramaViewer({ scene, onGoToScene, onShowGuide, onShowInfo }) {
  const containerRef = useRef(null)
  const viewerRef = useRef(null)
  const [imageState, setImageState] = useState({ src: '', status: 'loading' })
  const imageStatus = imageState.src === scene.image ? imageState.status : 'loading'
  const imageReady = imageStatus === 'ready'
  const imageError = imageStatus === 'error'

  useEffect(() => {
    let cancelled = false

    const image = new Image()
    image.onload = () => {
      if (!cancelled) setImageState({ src: scene.image, status: 'ready' })
    }
    image.onerror = () => {
      if (!cancelled) setImageState({ src: scene.image, status: 'error' })
    }
    image.src = scene.image

    return () => {
      cancelled = true
    }
  }, [scene.image])

  useEffect(() => {
    if (!containerRef.current || !imageReady) return undefined

    viewerRef.current?.destroy?.()
    viewerRef.current = window.pannellum.viewer(containerRef.current, {
      type: 'equirectangular',
      panorama: scene.image,
      autoLoad: true,
      showControls: false,
      compass: true,
      hfov: 105,
      pitch: 0,
      yaw: 0,
      hotSpots: scene.hotspots.map((hotspot) => ({
        pitch: hotspot.pitch,
        yaw: hotspot.yaw,
        type: 'info',
        text: hotspot.text,
        clickHandlerFunc: () => {
          if (hotspot.type === 'scene') onGoToScene(hotspot.target)
          if (hotspot.type === 'info') onShowInfo()
          if (hotspot.type === 'guide') onShowGuide()
        },
        createTooltipFunc: createHotspot,
        createTooltipArgs: hotspot.text,
      })),
    })

    return () => {
      viewerRef.current?.destroy?.()
      viewerRef.current = null
    }
  }, [imageReady, scene, onGoToScene, onShowGuide, onShowInfo])

  return (
    <section className="panorama-stage" aria-label={`${scene.title} 全景画面`}>
      <div ref={containerRef} className="panorama-canvas" />

      {(imageError || !imageReady) && (
        <div className="panorama-fallback">
          <div>
            <span className="fallback-kicker">{scene.title}</span>
            <h2>{missingImageMessage}</h2>
            <p>当前路径：{scene.image}</p>
          </div>
        </div>
      )}
    </section>
  )
}

function createHotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot')
  const marker = document.createElement('span')
  marker.className = 'hotspot-marker'
  marker.textContent = '+'
  const label = document.createElement('span')
  label.className = 'hotspot-label'
  label.textContent = args
  hotSpotDiv.append(marker, label)
}

export default PanoramaViewer
