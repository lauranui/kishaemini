import { HashRouter, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Videos from './paginas/Videos'
import Musicas from './paginas/Musicas'
import CriarPersonagem from './paginas/CriarPersonagem'
import CriarCartinha from './paginas/CriarCartinha'
import MinhasCriacoes from './paginas/MinhasCriacoes'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/criar-personagem" element={<CriarPersonagem />} />
        <Route path="/criar-cartinha" element={<CriarCartinha />} />
        <Route path="/minhas-criacoes" element={<MinhasCriacoes />} />
      </Routes>
    </HashRouter>
  )
}
