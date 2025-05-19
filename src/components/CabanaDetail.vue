<template>
  <div class="container my-4">
    <div class="row">
      <!-- Imagen grande y miniaturas -->
      <div class="col-lg-6">
        <div class="d-flex gap-3">
          <img :src="cabana.imagenPrincipal" alt="Imagen principal" class="img-fluid rounded" style="width: 70%; height: auto; object-fit: cover;" />
          <div class="d-flex flex-column gap-2" style="width: 30%;">
            <img
              v-for="(img, index) in cabana.imagenesPequenas"
              :key="index"
              :src="img"
              alt="Miniatura"
              class="img-fluid rounded small-thumb"
              @click="cambiarImagenPrincipal(img)"
              style="cursor: pointer; object-fit: cover; height: 80px;"
            />
            <button class="btn btn-outline-primary btn-sm mt-auto" @click="verMasImagenes">+ Ver más imágenes</button>
          </div>
        </div>
      </div>

      <!-- Precio y botón reservar -->
      <div class="col-lg-6 d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h1 class="fw-bold text-primary" style="font-size: 3rem;">${{ cabana.precio.toFixed(2) }}</h1>
            <p class="mb-0 text-muted small">precio por noche</p>
            <p class="mb-0 text-muted small">Max {{ cabana.maxHuespedes }} huéspedes</p>
          </div>
          <button class="btn btn-primary btn-lg" @click="reservar">Reservar</button>
        </div>

        <!-- Calendarios llegada y salida -->
        <div class="d-flex gap-4 mb-4">
          <div class="calendar-container">
            <label class="form-label fw-semibold">Llegada</label>
            <input type="date" v-model="fechaLlegada" :min="fechaMinima" class="form-control" />
          </div>
          <div class="calendar-container">
            <label class="form-label fw-semibold">Salida</label>
            <input type="date" v-model="fechaSalida" :min="fechaLlegada || fechaMinima" class="form-control" />
          </div>
        </div>

        <!-- Comentarios -->
        <div>
          <h5>Comentarios</h5>
          <div v-for="(comentario, i) in comentarios" :key="i" class="d-flex mb-3 border-bottom pb-2">
            <img :src="comentario.foto" alt="avatar" class="rounded-circle me-3" width="40" height="40" />
            <div>
              <strong>{{ comentario.nombre }}</strong>
              <div class="text-warning">
                <i v-for="n in 5" :key="n" class="bi" :class="n <= comentario.estrellas ? 'bi-star-fill' : 'bi-star'"></i>
              </div>
              <small class="text-muted">{{ comentario.fecha }}</small>
              <p class="mb-0">{{ comentario.mensaje }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cabana = ref({
  nombre: 'La Casita Color Menta',
  precio: 1795.99,
  maxHuespedes: 2,
  imagenPrincipal: 'https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg',
  imagenesPequenas: [
    'https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg',
    'https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg',
    'https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg',
  ],
})

const comentarios = ref([
  {
    nombre: 'Alexis',
    estrellas: 5,
    mensaje: 'Estancia de varias noches, lugar perfecto y tranquilo.',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    fecha: 'Hace 2 semanas',
  },
  {
    nombre: 'Caleb',
    estrellas: 4,
    mensaje: 'Muy buena experiencia, recomendable.',
    foto: 'https://randomuser.me/api/portraits/men/44.jpg',
    fecha: 'Hace 3 semanas',
  },
  {
    nombre: 'Sucharitha',
    estrellas: 5,
    mensaje: 'Perfecto para familias, espacio amplio y limpio.',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
    fecha: 'Marzo 2025',
  },
])

const fechaLlegada = ref('')
const fechaSalida = ref('')
const fechaMinima = new Date().toISOString().split('T')[0]

function cambiarImagenPrincipal(nuevaImg) {
  cabana.value.imagenPrincipal = nuevaImg
}

function verMasImagenes() {
  alert('Aquí puedes implementar la galería completa de imágenes')
}

function reservar() {
  alert(`Reservando la cabaña ${cabana.value.nombre} del ${fechaLlegada.value} al ${fechaSalida.value}`)
}
</script>

<style scoped>
.small-thumb {
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.small-thumb:hover {
  border-color: #0d6efd;
}

.bi-star-fill {
  color: #ffc107;
}

.bi-star {
  color: #e4e5e9;
}
</style>
