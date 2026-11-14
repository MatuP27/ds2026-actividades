import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout';
// import Inicio from "./pages/Inicio"
import Catalogo from "./pages/Catalogo"
import Contacto from "./pages/Contacto"
import './App.css'
import LibroNuevo from "./pages/LibroNuevo";
import Login from "./pages/Login";
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { SinPermiso } from './pages/SinPermiso';
// import Libro from "./pages/Libro";


function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* públicas */}
          <Route path="/sin-permiso" element={<SinPermiso />} />

          {/* <Route path="/" element={<Inicio />} /> */}
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="/libro/:id" element={<Libro />} />*/}
          <Route element={<PrivateRoute rol="ADMIN" />}>
            <Route path="/libros/crear" element={<LibroNuevo />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
      </AuthProvider>
  )
}

export default App