import { useNavigate } from 'react-router-dom'
import './Cabecalho.css'

interface CabecalhoProps {
  titulo: string
  corFundo?: string
}

export default function Cabecalho({ titulo, corFundo }: CabecalhoProps) {
  const navegar = useNavigate()

  return (
    <header className="cabecalho" style={corFundo ? { background: corFundo } : undefined}>
      <button className="cabecalho-voltar" onClick={() => navegar('/')} aria-label="Voltar">
        ← Voltar
      </button>
      <h1 className="cabecalho-titulo">{titulo}</h1>
    </header>
  )
}
