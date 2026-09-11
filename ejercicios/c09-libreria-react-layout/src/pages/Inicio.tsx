import NavBar from '../components/Layout/Header.tsx'
import LibrosSection from '../components/LibrosSection.tsx'
import Footer from '../components/Layout/Footer.tsx'
import { NavLink } from 'react-router-dom';

const librosDefault = [
  {
    "key": "/works/OL21164754W",
    "title": "You Had Me at Hola",
    "author_name": "Alexis Daria",
    "cover_i": 10331362
  },
  {
    "key": "/works/OL19736941W",
    "title": "Hello lighthouse",
    "author_name": "Sophie Blackall",
    "cover_i": 12587830
  },
  {
    "key": "/works/OL784063W",
    "title": "Hello ocean",
    "author_name": "Pam Muñoz Ryan",
    "cover_i": 677818
  },
  {
    "key": "/works/OL15716769W",
    "title": "Qué dice usted después de decir \"hola\"?",
    "author_name": "Eric Berne",
    "cover_i": 6873538
  },
  {
    "key": "/works/OL16262992W",
    "title": "Hello ((hello))",
    "author_name": "Matthew Cordell",
    "cover_i": 7240907
  },
  {
    "key": "/works/OL530870W",
    "title": "Hola, amigos!",
    "author_name": "Ana C. Jarvis",
    "cover_i": 4531670
  },
  {
    "key": "/works/OL24144939W",
    "title": "Hola Papi",
    "author_name": "John Paul Brammer",
    "cover_i": 10543295
  },
  {
    "key": "/works/OL16926004W",
    "title": "Hola, amigos!",
    "author_name": "Ana C. Jarvis",
    "cover_i": 1325474
  },
  {
    "key": "/works/OL25046693W",
    "title": "Di hola",
    "author_name": "Germán Garmendia",
    "cover_i": 11949667
  },
  {
    "key": "/works/OL9416679M",
    "title": "Hola Amigos!",
    "author_name": "Ana C. Jarvis"
  },
  {
    "key": "/works/OL6034758W",
    "title": "Hello Tilly",
    "author_name": "Polly Dunbar",
    "cover_i": 10305191
  },
  {
    "key": "/works/OL20555771W",
    "title": "Hola, amigos!",
    "author_name": "Ana C. Jarvis",
    "cover_i": 11645567
  }
];

function BienvenidaSection() {
  return (
    <section className="container-fluid py-5 bg-primary text-white" id="bienvenida-section">

      <div className="container-lg py-5">
        <h1 className="display-3 fst-italic">
            ¡Bienvenido a <span className="fw-bold fst-normal">Tinta & Papel</span>!
        </h1>

        <p className="lead mb-4">
            Encontrá los mejores libros al mejor precio.
        </p>

        <NavLink to="/catalogo" className="btn btn-light btn-lg">
            Ver catálogo
        </NavLink>
      </div>
    </section>    
  )
}

function MasVendidosSection() {
  return (
    <>
      <section className="mb-5">

        <h2 className="fw-bold border-bottom pb-2">
            Más vendidos...
        </h2>

        <p className="text-secondary">
            Los libros más elegidos por nuestros lectores.
        </p>

      </section>

      <section className="mt-5">
        <LibrosSection libros={ librosDefault } />
      </section>
    </>
  )
}

function Inicio() {
  return (
    <>
      <BienvenidaSection />

      <MasVendidosSection />
    </>
  )
}

export default Inicio