import { useNavigate } from 'react-router-dom'
import LayoutPagina from '../componentes/LayoutPagina'
import BotaoGrande from '../componentes/BotaoGrande'
import './Inicio.css'

export default function Inicio() {
  const navegar = useNavigate()

  return (
    <LayoutPagina>
      <div className="inicio">
        <div className="inicio-logo">
          <span className="inicio-logo-emoji">🐰💖</span>
          <h1 className="inicio-titulo">Kisha e Mine</h1>
          <p className="inicio-subtitulo">Fan App</p>
        </div>

        <div className="inicio-botoes">
          <BotaoGrande
            icone="🎬"
            texto="Assistir Vídeos"
            cor="azul"
            onClick={() => navegar('/videos')}
          />
          <BotaoGrande
            icone="🎵"
            texto="Ouvir Músicas"
            cor="rosa"
            onClick={() => navegar('/musicas')}
          />
          <BotaoGrande
            icone="🎨"
            texto="Criar Personagem"
            cor="lilas"
            onClick={() => navegar('/criar-personagem')}
          />
          <BotaoGrande
            icone="💌"
            texto="Criar Cartinha"
            cor="rosa"
            onClick={() => navegar('/criar-cartinha')}
          />
          <BotaoGrande
            icone="🖼️"
            texto="Minhas Criações"
            cor="lilas"
            onClick={() => navegar('/minhas-criacoes')}
          />
        </div>
      </div>
    </LayoutPagina>
  )
}
