import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="logo">
          <strong>Chaneques</strong> | SmartStorage
        </div>
        <nav className="landing-nav">
          <Link to="/quienes-somos">Quiénes Somos</Link>
          <Link to="/login" className="btn-login">
            Iniciar Sesión
          </Link>
        </nav>
      </header>

      <main className="landing-hero">
        <h1>Sistema de Control e Inventario de Laboratorio</h1>
        <p>
          Modernizando el registro de préstamos y devoluciones de herramientas e
          insumos escolares en tiempo real (ODS 9).
        </p>
        <Link to="/login" className="btn-primary">
          Acceder al Sistema
        </Link>
      </main>

      <footer className="landing-footer">
        <p>© 2026 Chaneques — SmartStorage</p>
        <div className="footer-links">
          <Link to="/terminos">Términos</Link>
          <Link to="/condiciones">Condiciones</Link>
        </div>
      </footer>
    </div>
  );
}