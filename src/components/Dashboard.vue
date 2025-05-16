<!-- src/components/Dashboard.vue -->
<template>
  <section class="dashboard">
    <h2>Tus Reservaciones</h2>

    <table class="reservations-table">
      <thead>
        <tr>
          <th>Estado</th>
          <th>Nombre de Casita</th>
          <th>Costo (MXN)</th>
          <th>Llegada</th>
          <th>Salida</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reserva, index) in reservaciones" :key="index">
          <td>{{ calcularEstado(reserva.llegada, reserva.salida, reserva.cancelada) }}</td>
          <td>{{ reserva.casita }}</td>
          <td>${{ reserva.costo.toLocaleString('es-MX') }}</td>
          <td>{{ formatFecha(reserva.llegada) }}</td>
          <td>{{ formatFecha(reserva.salida) }}</td>
          <td>
            <button @click="verDetalle(reserva)">Ver Detalle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Datos simulados (puedes cargarlos desde props o API)
const reservaciones = ref([
  {
    casita: 'Casita del Mar',
    costo: 3500,
    llegada: '2025-06-01',
    salida: '2025-06-03',
    cancelada: false,
  },
  {
    casita: 'Nido Naranja',
    costo: 4200,
    llegada: '2025-05-10',
    salida: '2025-05-12',
    cancelada: false,
  },
  {
    casita: 'Casa Sol',
    costo: 2800,
    llegada: '2025-04-15',
    salida: '2025-04-17',
    cancelada: true,
  },
])

// Función para calcular el estado de la reservación
function calcularEstado(llegada, salida, cancelada) {
  if (cancelada) return 'Cancelada'

  const hoy = new Date()
  const fLlegada = new Date(llegada)
  const fSalida = new Date(salida)

  if (hoy >= fLlegada && hoy <= fSalida) return 'En curso'
  if (hoy < fLlegada) {
    const dias = Math.ceil((fLlegada - hoy) / (1000 * 60 * 60 * 24))
    return `Dentro de ${dias} día(s)`
  }

  return 'Finalizada'
}

// Función para mostrar fechas en formato legible
function formatFecha(fecha) {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Acción del botón
function verDetalle(reserva) {
  alert(`Detalle de la reservación:\nCasita: ${reserva.casita}\nLlegada: ${reserva.llegada}\nSalida: ${reserva.salida}`)
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  background: #f8f9fa;
}

.reservations-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

.reservations-table th,
.reservations-table td {
  padding: 12px 16px;
  border: 1px solid #ddd;
  text-align: center;
}

.reservations-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
