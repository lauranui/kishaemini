export interface TemplateCartinha {
  id: string
  nome: string
  corFundo: string
  corTexto: string
  emoji: string
}

export const templatesCartinha: TemplateCartinha[] = [
  {
    id: 'amor',
    nome: 'Amor',
    corFundo: '#FFE4E9',
    corTexto: '#D1476B',
    emoji: '💕',
  },
  {
    id: 'amizade',
    nome: 'Amizade',
    corFundo: '#E4F0FF',
    corTexto: '#4A7AB5',
    emoji: '🌟',
  },
  {
    id: 'aniversario',
    nome: 'Aniversário',
    corFundo: '#FFF4E0',
    corTexto: '#B8860B',
    emoji: '🎂',
  },
  {
    id: 'obrigado',
    nome: 'Obrigado',
    corFundo: '#E8F5E9',
    corTexto: '#2E7D32',
    emoji: '🌸',
  },
  {
    id: 'magico',
    nome: 'Mágico',
    corFundo: '#F3E5F5',
    corTexto: '#7B1FA2',
    emoji: '✨',
  },
]

export interface AdesivoCatalogo {
  id: string
  emoji: string
  nome: string
}

export const adesivosCatalogo: AdesivoCatalogo[] = [
  { id: 'a1', emoji: '🐰', nome: 'Coelhinho' },
  { id: 'a2', emoji: '🐇', nome: 'Coelho' },
  { id: 'a3', emoji: '💖', nome: 'Coração' },
  { id: 'a4', emoji: '💕', nome: 'Corações' },
  { id: 'a5', emoji: '❤️', nome: 'Coração vermelho' },
  { id: 'a6', emoji: '⭐', nome: 'Estrela' },
  { id: 'a7', emoji: '🌟', nome: 'Brilho' },
  { id: 'a8', emoji: '✨', nome: 'Faíscas' },
  { id: 'a9', emoji: '🌸', nome: 'Flor' },
  { id: 'a10', emoji: '🌈', nome: 'Arco-íris' },
  { id: 'a11', emoji: '🦋', nome: 'Borboleta' },
  { id: 'a12', emoji: '🎀', nome: 'Laço' },
  { id: 'a13', emoji: '👑', nome: 'Coroa' },
  { id: 'a14', emoji: '🍭', nome: 'Pirulito' },
  { id: 'a15', emoji: '🧁', nome: 'Cupcake' },
  { id: 'a16', emoji: '🎈', nome: 'Balão' },
]
