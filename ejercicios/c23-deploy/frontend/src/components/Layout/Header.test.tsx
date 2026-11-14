import { it, expect, vi } from 'vitest';
import type { Rol, Usuario } from '../../types/sesionType';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Header from './Header';
import { screen } from '@testing-library/react';

function renderHeader(usuario: Usuario | null) {
  const auth = { usuario, cargando: false, estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol, login: vi.fn(), logout: vi.fn() };
  return render(
    <MemoryRouter>
    <AuthContext.Provider value={auth}>
        <Header />
    </AuthContext.Provider>
    </MemoryRouter>,
  );
}

it('CLIENTE: saluda por nombre y NO ve "Nuevo libro"', () => {
  renderHeader({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' });
  expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
});