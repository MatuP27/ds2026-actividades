import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout';
// import Inicio from "./pages/Inicio"
import Catalogo from "./pages/Catalogo"
import Contacto from "./pages/Contacto"
import './App.css'
import LibroNuevo from "./pages/LibroNuevo";
import Login from "./pages/Login";
// import Libro from "./pages/Libro";


function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Inicio />} /> */}
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* <Route path="/libro/:id" element={<Libro />} />*/}
        <Route path="/libros/crear" element={<LibroNuevo />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}

export default App