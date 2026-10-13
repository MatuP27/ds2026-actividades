import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
// import '../../styles/Layout.css';
interface LayoutProps { children: ReactNode };
function Layout({ children }: LayoutProps) {
 return (
 <div className="layout">
 <Header />
 <Container className="container-lg py-5">{children}</Container>
 <Footer />
 </div>
 );
}
export default Layout;