import { Link } from "react-router";

export default function QuienesSomos() {
  return (
    <main className="info-page">
      <h1>Quiénes Somos</h1>
      <p>
        <strong>SmartStorage</strong> es un sistema de gestión de inventario,
        préstamos y devoluciones desarrollado por la escuadra{" "}
        <strong>Chaneques</strong>, orientado a optimizar el control de
        materiales, equipos y recursos de laboratorio y biblioteca en alineación
        con el <strong>ODS 9</strong> (Industria, Innovación e Infraestructura).
      </p>

      <section>
        <h2>¿Qué Buscamos Resolver?</h2>
        <p>
          Los registros manuales en bitácoras físicas suelen generar retrasos en
          la atención, falta de visibilidad sobre la disponibilidad real del
          material y dificultades para dar seguimiento oportuno a los préstamos.
          Nuestra plataforma centraliza esta información para ofrecer:
        </p>
        <ul>
          <li>
            <strong>Control en tiempo real:</strong> Consulta inmediata de la
            disponibilidad de herramientas, insumos y ejemplares.
          </li>
          <li>
            <strong>Trazabilidad de préstamos:</strong> Registro claro de
            entregas, responsables, fechas límite y devoluciones.
          </li>
          <li>
            <strong>Prevención y mantenimiento:</strong> Identificación oportuna
            de equipos en revisión o con incidencias para prolongar su vida útil.
          </li>
        </ul>
      </section>

      <section>
        <h2>Nuestro Equipo</h2>
        <p>
          Proyecto desarrollado de manera colaborativa por la escuadra{" "}
          <strong>Chaneques</strong>:
        </p>
        <ul>
          <li>
            <strong>Gael</strong>
          </li>
          <li>
            <strong>Alonso</strong>
          </li>
          <li>
            <strong>Kelly</strong>
          </li>
          <li>
            <strong>July</strong>
          </li>
        </ul>
      </section>

      <p>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </main>
  );
}