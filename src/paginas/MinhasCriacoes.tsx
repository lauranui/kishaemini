import { useState, useEffect } from 'react'
import LayoutPagina from '../componentes/LayoutPagina'
import Cabecalho from '../componentes/Cabecalho'
import {
  listarPersonagens,
  listarCartinhas,
  excluirPersonagem,
  excluirCartinha,
  type PersonagemSalvo,
  type CartinhaSalva,
} from '../servicos/armazenamento'
import { gerarAvatarDataUri } from '../dados/pecasAvatar'
import { templatesCartinha } from '../dados/templatesCartinha'
import './MinhasCriacoes.css'

type Aba = 'personagens' | 'cartinhas'

export default function MinhasCriacoes() {
  const [aba, setAba] = useState<Aba>('personagens')
  const [personagens, setPersonagens] = useState<PersonagemSalvo[]>([])
  const [cartinhas, setCartinhas] = useState<CartinhaSalva[]>([])

  useEffect(() => {
    setPersonagens(listarPersonagens())
    setCartinhas(listarCartinhas())
  }, [])

  const handleExcluirPersonagem = (id: string) => {
    if (confirm('Tem certeza que quer apagar este personagem?')) {
      excluirPersonagem(id)
      setPersonagens(listarPersonagens())
    }
  }

  const handleExcluirCartinha = (id: string) => {
    if (confirm('Tem certeza que quer apagar esta cartinha?')) {
      excluirCartinha(id)
      setCartinhas(listarCartinhas())
    }
  }

  const getTemplate = (templateId: string) => {
    return templatesCartinha.find(t => t.id === templateId)
  }

  return (
    <LayoutPagina>
      <Cabecalho titulo="🖼️ Minhas Criações" />

      {/* Abas */}
      <div className="criacoes-abas">
        <button
          className={`criacoes-aba ${aba === 'personagens' ? 'ativa' : ''}`}
          onClick={() => setAba('personagens')}
        >
          🎨 Personagens ({personagens.length})
        </button>
        <button
          className={`criacoes-aba ${aba === 'cartinhas' ? 'ativa' : ''}`}
          onClick={() => setAba('cartinhas')}
        >
          💌 Cartinhas ({cartinhas.length})
        </button>
      </div>

      {/* Conteúdo da aba */}
      {aba === 'personagens' && (
        <div className="criacoes-lista">
          {personagens.length === 0 ? (
            <div className="criacoes-vazio">
              <span className="criacoes-vazio-emoji">🎨</span>
              <p>Nenhum personagem criado ainda!</p>
              <p className="criacoes-vazio-dica">Vá em "Criar Personagem" para começar</p>
            </div>
          ) : (
            personagens.map(p => (
              <div key={p.id} className="criacao-card">
                <img
                  className="criacao-card-avatar"
                  src={gerarAvatarDataUri(p.pecas)}
                  alt={p.nome}
                />
                <div className="criacao-card-info">
                  <h3>{p.nome}</h3>
                  <p className="criacao-data">
                    {new Date(p.criadoEm).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <button
                  className="criacao-excluir"
                  onClick={() => handleExcluirPersonagem(p.id)}
                  aria-label="Excluir"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {aba === 'cartinhas' && (
        <div className="criacoes-lista">
          {cartinhas.length === 0 ? (
            <div className="criacoes-vazio">
              <span className="criacoes-vazio-emoji">💌</span>
              <p>Nenhuma cartinha criada ainda!</p>
              <p className="criacoes-vazio-dica">Vá em "Criar Cartinha" para começar</p>
            </div>
          ) : (
            cartinhas.map(c => {
              const template = getTemplate(c.templateId)
              return (
                <div
                  key={c.id}
                  className="criacao-card cartinha-card"
                  style={{
                    background: template?.corFundo || '#FFE4E9',
                    color: template?.corTexto || '#D1476B',
                  }}
                >
                  <div className="cartinha-card-preview">
                    <p className="cartinha-card-texto">
                      {c.texto.length > 60 ? c.texto.substring(0, 60) + '...' : c.texto}
                    </p>
                    {c.adesivos.length > 0 && (
                      <span className="cartinha-card-adesivos">
                        {c.adesivos.slice(0, 4).map(a => a.emoji).join('')}
                        {c.adesivos.length > 4 && ` +${c.adesivos.length - 4}`}
                      </span>
                    )}
                  </div>
                  <div className="criacao-card-info">
                    <p className="criacao-data">
                      {new Date(c.criadoEm).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <button
                    className="criacao-excluir"
                    onClick={() => handleExcluirCartinha(c.id)}
                    aria-label="Excluir"
                  >
                    🗑️
                  </button>
                </div>
              )
            })
          )}
        </div>
      )}
    </LayoutPagina>
  )
}
