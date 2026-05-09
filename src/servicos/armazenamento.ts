// Tipos para dados salvos

export interface PersonagemSalvo {
  id: string
  nome: string
  pecas: Record<string, string> // categoriaId -> opcaoId
  criadoEm: number
}

export interface AdesivoPosicionado {
  id: string
  emoji: string
  x: number // porcentagem 0-100
  y: number // porcentagem 0-100
}

export interface CartinhaSalva {
  id: string
  templateId: string
  texto: string
  adesivos: AdesivoPosicionado[]
  criadoEm: number
}

const CHAVE_PERSONAGENS = 'kisha-mine-personagens'
const CHAVE_CARTINHAS = 'kisha-mine-cartinhas'

// --- Personagens ---

export function listarPersonagens(): PersonagemSalvo[] {
  const dados = localStorage.getItem(CHAVE_PERSONAGENS)
  if (!dados) return []
  try {
    return JSON.parse(dados)
  } catch {
    return []
  }
}

export function salvarPersonagem(personagem: PersonagemSalvo): void {
  const lista = listarPersonagens()
  const indice = lista.findIndex(p => p.id === personagem.id)
  if (indice >= 0) {
    lista[indice] = personagem
  } else {
    lista.push(personagem)
  }
  localStorage.setItem(CHAVE_PERSONAGENS, JSON.stringify(lista))
}

export function excluirPersonagem(id: string): void {
  const lista = listarPersonagens().filter(p => p.id !== id)
  localStorage.setItem(CHAVE_PERSONAGENS, JSON.stringify(lista))
}

// --- Cartinhas ---

export function listarCartinhas(): CartinhaSalva[] {
  const dados = localStorage.getItem(CHAVE_CARTINHAS)
  if (!dados) return []
  try {
    return JSON.parse(dados)
  } catch {
    return []
  }
}

export function salvarCartinha(cartinha: CartinhaSalva): void {
  const lista = listarCartinhas()
  const indice = lista.findIndex(c => c.id === cartinha.id)
  if (indice >= 0) {
    lista[indice] = cartinha
  } else {
    lista.push(cartinha)
  }
  localStorage.setItem(CHAVE_CARTINHAS, JSON.stringify(lista))
}

export function excluirCartinha(id: string): void {
  const lista = listarCartinhas().filter(c => c.id !== id)
  localStorage.setItem(CHAVE_CARTINHAS, JSON.stringify(lista))
}

// Gera ID único simples
export function gerarId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8)
}
