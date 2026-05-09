import type { ReactNode } from 'react'
import './BotaoGrande.css'

interface BotaoGrandeProps {
  icone: string
  texto: string
  cor: 'azul' | 'rosa' | 'lilas'
  onClick: () => void
  children?: ReactNode
}

const coresMapa = {
  azul: 'var(--cor-azul)',
  rosa: 'var(--cor-rosa)',
  lilas: 'var(--cor-lilas)',
}

const coresEscurasMapa = {
  azul: 'var(--cor-azul-escuro)',
  rosa: 'var(--cor-rosa-escuro)',
  lilas: 'var(--cor-lilas-escuro)',
}

export default function BotaoGrande({ icone, texto, cor, onClick }: BotaoGrandeProps) {
  return (
    <button
      className="botao-grande"
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${coresMapa[cor]}, ${coresEscurasMapa[cor]})`,
      }}
    >
      <span className="botao-grande-icone">{icone}</span>
      <span className="botao-grande-texto">{texto}</span>
    </button>
  )
}
