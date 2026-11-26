import { Link } from "react-router";

const prestamosEjemplo = [
  {
    id: "PRT-01",
    material: "Osciloscopio digital",
    estudiante: "24308051220418",
    especialidad: "Programación",
    estado: "Prestado",
    fechaPrestamo: "25/11/2026",
    fechaDevolucion: "27/11/2026",
  },
  {
    id: "PRT-02",
    material: "Multímetro Fluke",
    estudiante: "24308051221093",
    especialidad: "Mecatrónica",
    estado: "Prestado",
    fechaPrestamo: "24/11/2026",
    fechaDevolucion: "26/11/2026",
  },
  {
    id: "PRT-03",
    material: "Kit de protoboards y cables",
    estudiante: "24308051227742",
    especialidad: "Electromecánica",
    estado: "Pendiente devolución",
    fechaPrestamo: "22/11/2026",
    fechaDevolucion: "24/11/2026",
  },
  {
    id: "PRT-04",
    material: "Fuente de alimentación DC",
    estudiante: "24308051223185",
    especialidad: "Electromecánica",
    estado: "Prestado",
    fechaPrestamo: "25/11/2026",
    fechaDevolucion: "28/11/2026",
  },
  {
    id: "PRT-05",
    material: "Cautín de estación y soldadura",
    estudiante: "24308051225629",
    especialidad: "Mecatrónica",
    estado: "Prestado",
    fechaPrestamo: "24/11/2026",
    fechaDevolucion: "26/11/2026",
  },
  {
    id: "PRT-06",
    material: "Sensor ultrasónico y Arduino Uno",
    estudiante: "24308051228914",
    especialidad: "Programación",
    estado: "Prestado",
    fechaPrestamo: "25/11/2026",
    fechaDevolucion: "27/11/2026",
  },
  {
    id: "PRT-07",
    material: "Analizador lógico USB",
    estudiante: "24308051224307",
    especialidad: "Programación",
    estado: "Pendiente devolución",
    fechaPrestamo: "23/11/2026",
    fechaDevolucion: "25/11/2026",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <h2>Daashboard SmartStorage</h2>
          <span>Control de inventario y préstamos de Laboratorio</span>
        </div>
        <nav>
          <Link to="/">Cerrar sesión</Link>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="stats-grid">
          <div className="stat-card">
            <h3>Materiales registrados</h3>
            <p>48</p>
          </div>
          <div className="stat-card">
            <h3>Préstamos activos</h3>
            <p>7</p>
          </div>
          <div className="stat-card">
            <h3>Disponibles en almacén</h3>
            <p>41</p>
          </div>
        </section>

        <section className="table-section">
          <h2>Registro reciente de préstamos (Estudiantes)</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Material</th>
                <th>Número de control</th>
                <th>Especialidad</th>
                <th>Estado</th>
                <th>Fecha préstamo</th>
                <th>Fecha devolución</th>
              </tr>
            </thead>
            <tbody>
              {prestamosEjemplo.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.material}</td>
                  <td>{item.estudiante}</td>
                  <td>{item.especialidad}</td>
                  <td>{item.estado}</td>
                  <td>{item.fechaPrestamo}</td>
                  <td>{item.fechaDevolucion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}