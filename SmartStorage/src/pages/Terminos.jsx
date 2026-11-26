import { Link } from "react-router";

export default function Terminos() {
  return (
    <main className="info-page">
      <h1>Términos y Condiciones de Uso</h1>
      <p>
        Al acceder y utilizar <strong>SmartStorage</strong>, aceptas cumplir con las
        presentes disposiciones de uso responsable y el tratamiento de datos
        personales conforme a la{" "}
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
        <h2>1. Uso del Sistema y Responsabilidad del Usuario</h2>
        <ul>
          <li>
            El acceso está destinado exclusivamente a usuarios autorizados para la
            gestión de préstamos y devoluciones de laboratorio, almacén o biblioteca.
          </li>
          <li>
            Las solicitudes deben registrarse con información veraz y completa
            (identificador o número de control, material solicitado, cantidad, fecha y
            hora de entrega).
          </li>
          <li>
            Queda estrictamente prohibido suplantar identidades, alterar registros o
            manipular el estado de disponibilidad del inventario.
          </li>
          <li>
            El solicitante es responsable del cuidado e integridad del equipo o
            material durante el tiempo que permanezca bajo su resguardo.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Protección y Tratamiento de Datos Personales</h2>
        <ul>
          <li>
            <strong>Datos recabados:</strong> Para operar el control de préstamos, el
            sistema recaba únicamente datos de identificación básica (nombre
            completo, matrícula o número de control, área o grupo y correo
            electrónico). No se solicitan datos personales sensibles.
          </li>
          <li>
            <strong>Finalidad del tratamiento:</strong> Tus datos se utilizan de forma
            exclusiva para validar tu identidad, vincular el historial de préstamos y
            devoluciones, emitir notificaciones sobre fechas de entrega y generar
            estadísticas internas del servicio.
          </li>
          <li>
            <strong>Confidencialidad y resguardo:</strong> La información se almacena
            bajo medidas de seguridad administrativas y técnicas para evitar su
            pérdida, alteración, acceso no autorizado o divulgación a terceros
            ajenos al servicio.
          </li>
          <li>
            <strong>Derechos ARCO:</strong> Como titular de tus datos personales,
            tienes derecho a <strong>Acceder, Rectificar, Cancelar u Oponerte</strong>{" "}
            (Derechos ARCO) al tratamiento de tu información mediante solicitud directa
            ante la coordinación del proyecto o el área administrativa correspondiente.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Condiciones del Servicio y Actualizaciones</h2>
        <ul>
          <li>
            Al encontrarse en evolución y mejora continua, las funciones de la
            plataforma pueden recibir actualizaciones periódicas, manteniendo siempre
            la integridad y privacidad de los registros.
          </li>
        </ul>
      </section>

      <p>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </main>
  );
}