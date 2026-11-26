import { Link } from "react-router";

export default function Condiciones() {
  return (
    <main className="info-page">
      <h1>Condiciones del Servicio y Privacidad</h1>
      <p>
        Las presentes condiciones regulan la operación de{" "}
        <strong>SmartStorage</strong> y el resguardo de los datos personales
        vinculados al control de préstamos y devoluciones conforme a la{" "}
        <strong>
          Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)
        </strong>{" "}
        y la{" "}
        <strong>
          Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO)
        </strong>
        .
      </p>

      <section>
        <h2>1. Operación y Responsabilidad sobre el Material</h2>
        <ul>
          <li>
            Cada préstamo registrado asocia el material o libro entregado con el
            identificador del solicitante para mantener trazabilidad y evitar
            extravíos o confusiones.
          </li>
          <li>
            El equipo o material debe devolverse en condiciones adecuadas y
            reportar de inmediato cualquier falla o daño para facilitar su
            mantenimiento preventivo.
          </li>
          <li>
            La disponibilidad mostrada en tiempo real (semáforo de estado) está
            sujeta a la validación física y control del almacén o biblioteca.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Resguardo de Datos y Notificaciones</h2>
        <ul>
          <li>
            Los datos de registro (nombre, matrícula o número de control,
            grupo/área y correo) se emplean únicamente para gestionar préstamos,
            validar devoluciones y enviar recordatorios o avisos relacionados con
            el servicio.
          </li>
          <li>
            No se venden, transfieren ni comparten datos personales con terceros
            ajenos a la gestión interna o al respaldo técnico del sistema.
          </li>
          <li>
            Puedes solicitar la corrección o baja de tus datos conforme a los
            derechos ARCO a través de los canales establecidos por la
            administración o el equipo desarrollador.
          </li>
        </ul>
      </section>

      <p>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </main>
  );
}