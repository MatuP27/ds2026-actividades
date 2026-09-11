import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Inicio from "./pages/Inicio"
import Catalogo from "./pages/Catalogo"
import Contacto from "./pages/Contacto"
import Libro from "./pages/LIbro"
import './App.css'


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/libro/:libroKey" element={<Libro />} />
      </Routes>
    </Layout>
      // <Routes>
      //   <Route path="/" element={<Inicio />} />
      //   <Route path="/catalogo" element={<Catalogo />} />
      //   <Route path="/contacto" element={<Contacto />} />
      //   <Route path="/libro/:libroKey" element={<Libro />} />
      // </Routes>
  )
}

export default App