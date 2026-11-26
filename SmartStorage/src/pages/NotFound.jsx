import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="info-page not-found-page">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>
        La ruta que intentaste abrir no existe dentro del sistema de control de
        laboratorio.
      </p>
      <p>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </main>
  );
}