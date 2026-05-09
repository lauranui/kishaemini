import type { ReactNode } from 'react'
import './LayoutPagina.css'

interface LayoutPaginaProps {
  children: ReactNode
  comAdesivos?: boolean
}

export default function LayoutPagina({ children, comAdesivos = true }: LayoutPaginaProps) {
  return (
    <div className="layout-pagina">
      {comAdesivos && (
        <>
          <span className="adesivo-decorativo adesivo-topo-esquerda">🐰</span>
          <span className="adesivo-decorativo adesivo-topo-direita">💖</span>
          <span className="adesivo-decorativo adesivo-baixo-esquerda">💕</span>
          <span className="adesivo-decorativo adesivo-baixo-direita">🐇</span>
        </>
      )}
      <div className="layout-conteudo">
        {children}
      </div>
    </div>
  )
}
