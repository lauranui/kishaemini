# Kisha e Mine Fan App

App infantil (6-8 anos) com React + Vite + CapacitorJS.

## Idioma

Todo o código é em **português**: nomes de pastas, componentes, variáveis, funções, interfaces, classes CSS e rotas. Comentários também em português.

```
✅ const navegar = useNavigate()
✅ function salvarPersonagem(p: PersonagemSalvo)
✅ interface CartinhaSalva { ... }
✅ .botao-grande { ... }

❌ const navigate = useNavigate()
❌ function saveCharacter(c: SavedCharacter)
```

## Estrutura de Pastas

```
src/
├── componentes/   # Componentes reutilizáveis (PascalCase: BotaoGrande.tsx)
├── paginas/       # Telas/páginas do app (PascalCase: CriarPersonagem.tsx)
├── dados/         # Dados estáticos e catálogos (camelCase: pecasAvatar.ts)
├── servicos/      # Lógica de negócio e storage (camelCase: armazenamento.ts)
├── estilos/       # CSS global (global.css)
└── ativos/        # Imagens, SVGs, ícones (futuro)
```

## Convenções de Código

- **Componentes**: PascalCase em português (`BotaoGrande`, `LayoutPagina`). Exportar como `export default function`.
- **Variáveis e funções**: camelCase em português (`pecasSelecionadas`, `listarPersonagens`).
- **Interfaces/tipos**: PascalCase em português (`PersonagemSalvo`, `AdesivoPosicionado`). Usar `import type` para imports de tipo.
- **Classes CSS**: kebab-case em português (`botao-grande`, `personagem-preview`).
- **Rotas**: kebab-case em português (`/criar-personagem`, `/minhas-criacoes`).

## Estilização

- CSS puro colocado junto ao componente (`BotaoGrande.tsx` + `BotaoGrande.css`).
- Não usar CSS Modules, Tailwind, nem styled-components.
- Tokens de design (cores, sombras, bordas) definidos como variáveis CSS em `src/estilos/global.css`.
- Paleta: azul claro (`--cor-azul`), rosa claro (`--cor-rosa`), lilás (`--cor-lilas`), com variantes escuras.

## Estado e Dados

- Estado local com `useState` e `useEffect`. Sem Redux, Zustand ou Context API externo.
- Persistência via `localStorage` centralizada em `src/servicos/armazenamento.ts`.
- Dados estáticos (vídeos, músicas, peças de avatar, templates) ficam em `src/dados/`.
- Cada catálogo de dados exporta uma interface TypeScript + array tipado.

## Roteamento

- `HashRouter` do react-router-dom (compatibilidade com Capacitor).
- Rotas definidas em `src/App.tsx`.
- Navegação via hook `useNavigate()`.

## Design

- App infantil: botões grandes, emojis, cores vibrantes, fonte `Bubblegum Sans`.
- Sem menus complexos — navegação por botões coloridos.
- Adesivos decorativos de coelhinhos e corações nas telas.

## Build e Teste

- `npm run dev` — dev server local
- `npm run build` — build de produção em `dist/`
- `npx cap sync` — sincronizar com plataformas nativas
- `npx cap run android` — rodar no emulador/dispositivo Android
- Vite configurado com `base: './'` para Capacitor.
