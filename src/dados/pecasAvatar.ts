import { createAvatar } from '@dicebear/core'
import * as adventurer from '@dicebear/adventurer'

// Opções do DiceBear Adventurer organizadas por categoria

export interface OpcaoAvatar {
  id: string
  valor: string
  nome: string
}

export interface CategoriaAvatar {
  id: string
  nome: string
  icone: string
  propriedadeDiceBear: string
  tipo: 'variante' | 'cor'
  opcoes: OpcaoAvatar[]
}

export const categoriasAvatar: CategoriaAvatar[] = [
  {
    id: 'cabelo',
    nome: 'Cabelo',
    icone: '💇',
    propriedadeDiceBear: 'hair',
    tipo: 'variante',
    opcoes: [
      { id: 'long01', valor: 'long01', nome: 'Longo 1' },
      { id: 'long03', valor: 'long03', nome: 'Longo 2' },
      { id: 'long05', valor: 'long05', nome: 'Longo 3' },
      { id: 'long07', valor: 'long07', nome: 'Longo 4' },
      { id: 'long09', valor: 'long09', nome: 'Longo 5' },
      { id: 'long13', valor: 'long13', nome: 'Longo 6' },
      { id: 'long16', valor: 'long16', nome: 'Longo 7' },
      { id: 'long19', valor: 'long19', nome: 'Longo 8' },
      { id: 'short01', valor: 'short01', nome: 'Curto 1' },
      { id: 'short03', valor: 'short03', nome: 'Curto 2' },
      { id: 'short05', valor: 'short05', nome: 'Curto 3' },
      { id: 'short08', valor: 'short08', nome: 'Curto 4' },
      { id: 'short11', valor: 'short11', nome: 'Curto 5' },
      { id: 'short14', valor: 'short14', nome: 'Curto 6' },
      { id: 'short17', valor: 'short17', nome: 'Curto 7' },
    ],
  },
  {
    id: 'corCabelo',
    nome: 'Cor do Cabelo',
    icone: '🎨',
    propriedadeDiceBear: 'hairColor',
    tipo: 'cor',
    opcoes: [
      { id: 'cc-preto', valor: '0e0e0e', nome: 'Preto' },
      { id: 'cc-castanho-escuro', valor: '562306', nome: 'Castanho Escuro' },
      { id: 'cc-castanho', valor: '6a4e35', nome: 'Castanho' },
      { id: 'cc-caramelo', valor: 'ac6511', nome: 'Caramelo' },
      { id: 'cc-ruivo', valor: 'ab2a18', nome: 'Ruivo' },
      { id: 'cc-cobre', valor: 'cb6820', nome: 'Cobre' },
      { id: 'cc-loiro', valor: 'b9a05f', nome: 'Loiro' },
      { id: 'cc-loiro-claro', valor: 'e5d7a3', nome: 'Loiro Claro' },
      { id: 'cc-rosa', valor: 'dba3be', nome: 'Rosa' },
      { id: 'cc-roxo', valor: '592454', nome: 'Roxo' },
      { id: 'cc-verde', valor: '3eac2c', nome: 'Verde' },
      { id: 'cc-azul', valor: '85c2c6', nome: 'Azul' },
      { id: 'cc-cinza', valor: 'afafaf', nome: 'Cinza' },
    ],
  },
  {
    id: 'olhos',
    nome: 'Olhos',
    icone: '👀',
    propriedadeDiceBear: 'eyes',
    tipo: 'variante',
    opcoes: [
      { id: 'eyes-01', valor: 'variant01', nome: 'Estilo 1' },
      { id: 'eyes-02', valor: 'variant02', nome: 'Estilo 2' },
      { id: 'eyes-03', valor: 'variant03', nome: 'Estilo 3' },
      { id: 'eyes-05', valor: 'variant05', nome: 'Estilo 4' },
      { id: 'eyes-07', valor: 'variant07', nome: 'Estilo 5' },
      { id: 'eyes-09', valor: 'variant09', nome: 'Estilo 6' },
      { id: 'eyes-12', valor: 'variant12', nome: 'Estilo 7' },
      { id: 'eyes-14', valor: 'variant14', nome: 'Estilo 8' },
      { id: 'eyes-17', valor: 'variant17', nome: 'Estilo 9' },
      { id: 'eyes-20', valor: 'variant20', nome: 'Estilo 10' },
      { id: 'eyes-23', valor: 'variant23', nome: 'Estilo 11' },
      { id: 'eyes-26', valor: 'variant26', nome: 'Estilo 12' },
    ],
  },
  {
    id: 'sobrancelhas',
    nome: 'Sobrancelhas',
    icone: '🤨',
    propriedadeDiceBear: 'eyebrows',
    tipo: 'variante',
    opcoes: [
      { id: 'eb-01', valor: 'variant01', nome: 'Estilo 1' },
      { id: 'eb-02', valor: 'variant02', nome: 'Estilo 2' },
      { id: 'eb-04', valor: 'variant04', nome: 'Estilo 3' },
      { id: 'eb-06', valor: 'variant06', nome: 'Estilo 4' },
      { id: 'eb-08', valor: 'variant08', nome: 'Estilo 5' },
      { id: 'eb-10', valor: 'variant10', nome: 'Estilo 6' },
      { id: 'eb-12', valor: 'variant12', nome: 'Estilo 7' },
      { id: 'eb-15', valor: 'variant15', nome: 'Estilo 8' },
    ],
  },
  {
    id: 'boca',
    nome: 'Boca',
    icone: '👄',
    propriedadeDiceBear: 'mouth',
    tipo: 'variante',
    opcoes: [
      { id: 'mouth-01', valor: 'variant01', nome: 'Estilo 1' },
      { id: 'mouth-03', valor: 'variant03', nome: 'Estilo 2' },
      { id: 'mouth-05', valor: 'variant05', nome: 'Estilo 3' },
      { id: 'mouth-07', valor: 'variant07', nome: 'Estilo 4' },
      { id: 'mouth-09', valor: 'variant09', nome: 'Estilo 5' },
      { id: 'mouth-12', valor: 'variant12', nome: 'Estilo 6' },
      { id: 'mouth-15', valor: 'variant15', nome: 'Estilo 7' },
      { id: 'mouth-18', valor: 'variant18', nome: 'Estilo 8' },
      { id: 'mouth-20', valor: 'variant20', nome: 'Estilo 9' },
      { id: 'mouth-23', valor: 'variant23', nome: 'Estilo 10' },
      { id: 'mouth-26', valor: 'variant26', nome: 'Estilo 11' },
      { id: 'mouth-30', valor: 'variant30', nome: 'Estilo 12' },
    ],
  },
  {
    id: 'corPele',
    nome: 'Cor da Pele',
    icone: '🧑',
    propriedadeDiceBear: 'skinColor',
    tipo: 'cor',
    opcoes: [
      { id: 'skin-1', valor: 'f2d3b1', nome: 'Clara' },
      { id: 'skin-2', valor: 'ecad80', nome: 'Média' },
      { id: 'skin-3', valor: '9e5622', nome: 'Morena' },
      { id: 'skin-4', valor: '763900', nome: 'Escura' },
    ],
  },
  {
    id: 'oculos',
    nome: 'Óculos',
    icone: '👓',
    propriedadeDiceBear: 'glasses',
    tipo: 'variante',
    opcoes: [
      { id: 'oculos-nenhum', valor: 'nenhum', nome: 'Nenhum' },
      { id: 'oculos-01', valor: 'variant01', nome: 'Estilo 1' },
      { id: 'oculos-02', valor: 'variant02', nome: 'Estilo 2' },
      { id: 'oculos-03', valor: 'variant03', nome: 'Estilo 3' },
      { id: 'oculos-04', valor: 'variant04', nome: 'Estilo 4' },
      { id: 'oculos-05', valor: 'variant05', nome: 'Estilo 5' },
    ],
  },
  {
    id: 'brincos',
    nome: 'Brincos',
    icone: '💎',
    propriedadeDiceBear: 'earrings',
    tipo: 'variante',
    opcoes: [
      { id: 'brincos-nenhum', valor: 'nenhum', nome: 'Nenhum' },
      { id: 'brincos-01', valor: 'variant01', nome: 'Estilo 1' },
      { id: 'brincos-02', valor: 'variant02', nome: 'Estilo 2' },
      { id: 'brincos-03', valor: 'variant03', nome: 'Estilo 3' },
      { id: 'brincos-04', valor: 'variant04', nome: 'Estilo 4' },
      { id: 'brincos-05', valor: 'variant05', nome: 'Estilo 5' },
      { id: 'brincos-06', valor: 'variant06', nome: 'Estilo 6' },
    ],
  },
  {
    id: 'detalhes',
    nome: 'Detalhes',
    icone: '✨',
    propriedadeDiceBear: 'features',
    tipo: 'variante',
    opcoes: [
      { id: 'feat-nenhum', valor: 'nenhum', nome: 'Nenhum' },
      { id: 'feat-blush', valor: 'blush', nome: 'Bochechas' },
      { id: 'feat-freckles', valor: 'freckles', nome: 'Sardas' },
      { id: 'feat-birthmark', valor: 'birthmark', nome: 'Pintinha' },
    ],
  },
  {
    id: 'corFundo',
    nome: 'Fundo',
    icone: '🖼️',
    propriedadeDiceBear: 'backgroundColor',
    tipo: 'cor',
    opcoes: [
      { id: 'bg-azul', valor: 'b6e3f4', nome: 'Azul' },
      { id: 'bg-rosa', valor: 'ffd5dc', nome: 'Rosa' },
      { id: 'bg-lilas', valor: 'c0aede', nome: 'Lilás' },
      { id: 'bg-amarelo', valor: 'ffdfbf', nome: 'Amarelo' },
      { id: 'bg-lavanda', valor: 'd1d4f9', nome: 'Lavanda' },
      { id: 'bg-transparente', valor: 'transparent', nome: 'Nenhum' },
    ],
  },
]

// Gera opções padrão (primeira opção de cada categoria)
export function opcoesIniciais(): Record<string, string> {
  const opcoes: Record<string, string> = {}
  categoriasAvatar.forEach(cat => {
    opcoes[cat.id] = cat.opcoes[0].valor
  })
  return opcoes
}

// Converte as opções selecionadas para o formato DiceBear
function montarOpcoesDiceBear(opcoes: Record<string, string>) {
  const config: Record<string, unknown> = {
    randomizeIds: true,
  }

  categoriasAvatar.forEach(cat => {
    const valor = opcoes[cat.id]
    if (!valor || valor === 'nenhum') {
      // Para itens opcionais, definir probabilidade zero
      if (cat.propriedadeDiceBear === 'glasses') {
        config['glassesProbability'] = 0
      } else if (cat.propriedadeDiceBear === 'earrings') {
        config['earringsProbability'] = 0
      } else if (cat.propriedadeDiceBear === 'features') {
        config['featuresProbability'] = 0
      }
      return
    }

    if (cat.propriedadeDiceBear === 'glasses') {
      config['glassesProbability'] = 100
      config['glasses'] = [valor]
    } else if (cat.propriedadeDiceBear === 'earrings') {
      config['earringsProbability'] = 100
      config['earrings'] = [valor]
    } else if (cat.propriedadeDiceBear === 'features') {
      config['featuresProbability'] = 100
      config['features'] = [valor]
    } else if (cat.tipo === 'cor') {
      config[cat.propriedadeDiceBear] = [valor]
    } else {
      config[cat.propriedadeDiceBear] = [valor]
    }
  })

  return config
}

// Gera o SVG do avatar com as opções selecionadas
export function gerarAvatarSvg(opcoes: Record<string, string>): string {
  const config = montarOpcoesDiceBear(opcoes)
  const avatar = createAvatar(adventurer, config as Parameters<typeof createAvatar>[1])
  return avatar.toString()
}

// Gera data URI para usar em <img src>
export function gerarAvatarDataUri(opcoes: Record<string, string>): string {
  const config = montarOpcoesDiceBear(opcoes)
  const avatar = createAvatar(adventurer, config as Parameters<typeof createAvatar>[1])
  return avatar.toDataUri()
}
