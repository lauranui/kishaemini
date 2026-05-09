import { useState } from 'react'
import LayoutPagina from '../componentes/LayoutPagina'
import Cabecalho from '../componentes/Cabecalho'
import PlayerYoutube from '../componentes/PlayerYoutube'
import { videos } from '../dados/videos'
import './Videos.css'

export default function Videos() {
  const [videoAtivo, setVideoAtivo] = useState<string | null>(null)

  const videoSelecionado = videos.find(v => v.id === videoAtivo)

  return (
    <LayoutPagina>
      <Cabecalho titulo="🎬 Vídeos" />

      {videoSelecionado ? (
        <div className="video-player-area">
          <PlayerYoutube
            youtubeId={videoSelecionado.youtubeId}
            titulo={videoSelecionado.titulo}
          />
          <h2 className="video-titulo-ativo">{videoSelecionado.titulo}</h2>
          <button
            className="video-botao-voltar"
            onClick={() => setVideoAtivo(null)}
          >
            ← Voltar para a lista
          </button>
        </div>
      ) : (
        <div className="videos-grid">
          {videos.map(video => (
            <button
              key={video.id}
              className="video-card"
              onClick={() => setVideoAtivo(video.id)}
            >
              <div className="video-thumb">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.titulo}
                  loading="lazy"
                />
                <span className="video-play">▶</span>
              </div>
              <p className="video-titulo">{video.titulo}</p>
            </button>
          ))}
        </div>
      )}
    </LayoutPagina>
  )
}
