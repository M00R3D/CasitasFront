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
          <td :class="estadoClase(reserva)">
            {{ calcularEstado(reserva.llegada, reserva.salida, reserva.cancelada) }}
          </td>
          <td>{{ reserva.casita }}</td>
          <td>${{ reserva.costo.toLocaleString('es-MX') }}</td>
          <td>{{ formatFecha(reserva.llegada) }}</td>
          <td>{{ formatFecha(reserva.salida) }}</td>
          <td>
            <button @click="verDetalle(reserva)" class="btn-ver">
              <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt="Ver Detalles" class="icono-ojo" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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

function formatFecha(fecha) {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function verDetalle(reserva) {
  alert(`Detalle de la reservación:\nCasita: ${reserva.casita}\nLlegada: ${reserva.llegada}\nSalida: ${reserva.salida}`)
}

function estadoClase(reserva) {
  if (reserva.cancelada) return 'estado-cancelado'

  const hoy = new Date()
  const fLlegada = new Date(reserva.llegada)
  const fSalida = new Date(reserva.salida)

  if (hoy >= fLlegada && hoy <= fSalida) return 'estado-en-curso'
  if (hoy < fLlegada) return 'estado-proxima'

  return 'estado-finalizada'
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  background: #f9f9f9;
}

.reservations-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0.95rem;
}

.reservations-table th,
.reservations-table td {
  padding: 14px 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.reservations-table th {
  background-color: #fafafa;
  font-weight: 600;
  color: #444;
}

/* Eliminar la última línea del borde */
.reservations-table tr:last-child td {
  border-bottom: none;
}

/* Botón con ícono */
.btn-ver {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.icono-ojo
{
width:33px;
height: auto;
}
.btn-ver:hover {
  transform: scale(1.2);
}

/* Colores de estado */
.estado-en-curso {
  color: #007bff;
  font-weight: bold;
}

.estado-proxima {
  color: #28a745;
  font-weight: bold;
}

.estado-finalizada {
  color: #6c757d;
  font-weight: bold;
}

.estado-cancelado {
  color: #dc3545;
  font-weight: bold;
}
</style>
