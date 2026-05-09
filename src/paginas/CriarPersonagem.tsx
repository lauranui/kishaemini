import { useState, useMemo } from 'react'
import LayoutPagina from '../componentes/LayoutPagina'
import Cabecalho from '../componentes/Cabecalho'
import { categoriasAvatar, opcoesIniciais, gerarAvatarSvg, gerarAvatarDataUri } from '../dados/pecasAvatar'
import { salvarPersonagem, gerarId } from '../servicos/armazenamento'
import './CriarPersonagem.css'

export default function CriarPersonagem() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoriasAvatar[0].id)
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState<Record<string, string>>(opcoesIniciais)
  const [nome, setNome] = useState('')
  const [salvo, setSalvo] = useState(false)

  const categoriaAtual = categoriasAvatar.find(c => c.id === categoriaAtiva)!

  const avatarSvg = useMemo(() => gerarAvatarSvg(opcoesSelecionadas), [opcoesSelecionadas])

  const handleSelecionarOpcao = (valor: string) => {
    setOpcoesSelecionadas(prev => ({
      ...prev,
      [categoriaAtiva]: valor,
    }))
    setSalvo(false)
  }

  const handleSalvar = () => {
    salvarPersonagem({
      id: gerarId(),
      nome: nome || 'Meu Personagem',
      pecas: opcoesSelecionadas,
      criadoEm: Date.now(),
    })
    setSalvo(true)
    setTimeout(() => setSalvo(false), 2000)
  }

  const handleAleatorio = () => {
    const novasOpcoes: Record<string, string> = {}
    categoriasAvatar.forEach(cat => {
      const opcoes = cat.opcoes
      const indiceAleatorio = Math.floor(Math.random() * opcoes.length)
      novasOpcoes[cat.id] = opcoes[indiceAleatorio].valor
    })
    setOpcoesSelecionadas(novasOpcoes)
    setSalvo(false)
  }

  // Gera thumbnails para cada opção da categoria ativa
  const thumbnails = useMemo(() => {
    return categoriaAtual.opcoes.map(opcao => {
      if (categoriaAtual.tipo === 'cor') {
        return { id: opcao.id, valor: opcao.valor, nome: opcao.nome, cor: opcao.valor, dataUri: '' }
      }
      // Para variantes, gerar mini-avatar com essa opção
      const opcoesPreview = { ...opcoesSelecionadas, [categoriaAtiva]: opcao.valor }
      return {
        id: opcao.id,
        valor: opcao.valor,
        nome: opcao.nome,
        cor: '',
        dataUri: gerarAvatarDataUri(opcoesPreview),
      }
    })
  }, [categoriaAtual, categoriaAtiva, opcoesSelecionadas])

  return (
    <LayoutPagina>
      <Cabecalho titulo="🎨 Criar Personagem" />

      {/* Preview do personagem */}
      <div className="personagem-preview">
        <div
          className="personagem-avatar-svg"
          dangerouslySetInnerHTML={{ __html: avatarSvg }}
        />
      </div>

      {/* Campo de nome + botão aleatório */}
      <div className="personagem-acoes-topo">
        <input
          className="personagem-nome-input"
          type="text"
          placeholder="Nome do personagem..."
          value={nome}
          onChange={e => setNome(e.target.value)}
          maxLength={30}
        />
        <button className="personagem-aleatorio" onClick={handleAleatorio} title="Aleatório">
          🎲
        </button>
      </div>

      {/* Abas de categorias */}
      <div className="personagem-categorias">
        {categoriasAvatar.map(cat => (
          <button
            key={cat.id}
            className={`personagem-cat-btn ${categoriaAtiva === cat.id ? 'ativo' : ''}`}
            onClick={() => setCategoriaAtiva(cat.id)}
          >
            <span>{cat.icone}</span>
            <span className="personagem-cat-nome">{cat.nome}</span>
          </button>
        ))}
      </div>

      {/* Opções da categoria selecionada */}
      <div className="personagem-opcoes">
        {thumbnails.map(thumb => (
          <button
            key={thumb.id}
            className={`personagem-opcao ${opcoesSelecionadas[categoriaAtiva] === thumb.valor ? 'selecionado' : ''}`}
            onClick={() => handleSelecionarOpcao(thumb.valor)}
          >
            {categoriaAtual.tipo === 'cor' ? (
              <span
                className="personagem-opcao-cor"
                style={{
                  background: thumb.valor === 'transparent'
                    ? 'linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%)'
                    : `#${thumb.valor}`,
                  backgroundSize: thumb.valor === 'transparent' ? '8px 8px' : undefined,
                  backgroundPosition: thumb.valor === 'transparent' ? '0 0, 4px 4px' : undefined,
                }}
              />
            ) : (
              <img
                className="personagem-opcao-thumb"
                src={thumb.dataUri}
                alt={thumb.nome}
                loading="lazy"
              />
            )}
            <span className="personagem-opcao-nome">{thumb.nome}</span>
          </button>
        ))}
      </div>

      {/* Botão salvar */}
      <button className={`personagem-salvar ${salvo ? 'salvo' : ''}`} onClick={handleSalvar}>
        {salvo ? '✅ Salvo!' : '💾 Salvar Personagem'}
      </button>
    </LayoutPagina>
  )
}
