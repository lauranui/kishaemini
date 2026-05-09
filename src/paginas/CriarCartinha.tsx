import { useState } from 'react'
import LayoutPagina from '../componentes/LayoutPagina'
import Cabecalho from '../componentes/Cabecalho'
import { templatesCartinha, adesivosCatalogo } from '../dados/templatesCartinha'
import { salvarCartinha, gerarId, type AdesivoPosicionado } from '../servicos/armazenamento'
import './CriarCartinha.css'

export default function CriarCartinha() {
  const [templateId, setTemplateId] = useState(templatesCartinha[0].id)
  const [texto, setTexto] = useState('')
  const [adesivos, setAdesivos] = useState<AdesivoPosicionado[]>([])
  const [salvo, setSalvo] = useState(false)

  const template = templatesCartinha.find(t => t.id === templateId)!

  const handleAdicionarAdesivo = (emoji: string) => {
    const novoAdesivo: AdesivoPosicionado = {
      id: gerarId(),
      emoji,
      x: 10 + Math.random() * 70, // posição aleatória dentro da cartinha
      y: 10 + Math.random() * 70,
    }
    setAdesivos(prev => [...prev, novoAdesivo])
    setSalvo(false)
  }

  const handleRemoverAdesivo = (id: string) => {
    setAdesivos(prev => prev.filter(a => a.id !== id))
    setSalvo(false)
  }

  const handleSalvar = () => {
    salvarCartinha({
      id: gerarId(),
      templateId,
      texto: texto || 'Minha cartinha especial ❤️',
      adesivos,
      criadoEm: Date.now(),
    })
    setSalvo(true)
    setTimeout(() => setSalvo(false), 2000)
  }

  const handleLimpar = () => {
    setTexto('')
    setAdesivos([])
    setSalvo(false)
  }

  return (
    <LayoutPagina>
      <Cabecalho titulo="💌 Criar Cartinha" />

      {/* Seletor de template */}
      <div className="cartinha-templates">
        {templatesCartinha.map(t => (
          <button
            key={t.id}
            className={`cartinha-template-btn ${templateId === t.id ? 'ativo' : ''}`}
            style={{ background: t.corFundo, color: t.corTexto }}
            onClick={() => { setTemplateId(t.id); setSalvo(false) }}
          >
            <span>{t.emoji}</span>
            <span className="cartinha-template-nome">{t.nome}</span>
          </button>
        ))}
      </div>

      {/* Preview da cartinha */}
      <div
        className="cartinha-preview"
        style={{ background: template.corFundo, color: template.corTexto }}
      >
        <div className="cartinha-borda-decorativa">
          <span className="cartinha-deco-tl">🐰</span>
          <span className="cartinha-deco-tr">💖</span>
          <span className="cartinha-deco-bl">💕</span>
          <span className="cartinha-deco-br">🐇</span>
        </div>

        <textarea
          className="cartinha-texto"
          placeholder="Escreva sua mensagem aqui... ✏️"
          value={texto}
          onChange={e => { setTexto(e.target.value); setSalvo(false) }}
          maxLength={200}
          style={{ color: template.corTexto }}
        />

        {/* Adesivos posicionados */}
        {adesivos.map(adesivo => (
          <button
            key={adesivo.id}
            className="cartinha-adesivo-posicionado"
            style={{ left: `${adesivo.x}%`, top: `${adesivo.y}%` }}
            onClick={() => handleRemoverAdesivo(adesivo.id)}
            title="Toque para remover"
          >
            {adesivo.emoji}
          </button>
        ))}
      </div>

      {/* Painel de adesivos */}
      <p className="cartinha-instrucao">Toque num adesivo para adicionar:</p>
      <div className="cartinha-adesivos-painel">
        {adesivosCatalogo.map(a => (
          <button
            key={a.id}
            className="cartinha-adesivo-btn"
            onClick={() => handleAdicionarAdesivo(a.emoji)}
          >
            {a.emoji}
          </button>
        ))}
      </div>

      {/* Ações */}
      <div className="cartinha-acoes">
        <button className="cartinha-limpar" onClick={handleLimpar}>
          🗑️ Limpar
        </button>
        <button
          className={`cartinha-salvar ${salvo ? 'salvo' : ''}`}
          onClick={handleSalvar}
        >
          {salvo ? '✅ Salvo!' : '💾 Salvar'}
        </button>
      </div>
    </LayoutPagina>
  )
}
