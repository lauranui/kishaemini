import { useState } from 'react'
import LayoutPagina from '../componentes/LayoutPagina'
import Cabecalho from '../componentes/Cabecalho'
import PlayerYoutube from '../componentes/PlayerYoutube'
import { musicas } from '../dados/musicas'
import './Musicas.css'

export default function Musicas() {
  const [musicaAtiva, setMusicaAtiva] = useState<string | null>(null)

  const musicaSelecionada = musicas.find(m => m.id === musicaAtiva)

  return (
    <LayoutPagina>
      <Cabecalho titulo="🎵 Músicas" />

      {musicaSelecionada ? (
        <div className="musica-player-area">
          <PlayerYoutube
            youtubeId={musicaSelecionada.youtubeId}
            titulo={musicaSelecionada.titulo}
          />
          <h2 className="musica-titulo-ativa">{musicaSelecionada.titulo}</h2>
          <button
            className="musica-botao-voltar"
            onClick={() => setMusicaAtiva(null)}
          >
            ← Voltar para a lista
          </button>
        </div>
      ) : (
        <div className="musicas-lista">
          {musicas.map(musica => (
            <button
              key={musica.id}
              className="musica-card"
              onClick={() => setMusicaAtiva(musica.id)}
            >
              <span className="musica-play-icon">▶</span>
              <span className="musica-nome">{musica.titulo}</span>
              <span className="musica-notas">♪♫</span>
            </button>
          ))}
        </div>
      )}
    </LayoutPagina>
  )
}
