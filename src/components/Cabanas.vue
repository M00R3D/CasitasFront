<template>
    <h2 class="text-center fw-bold mb-5">Cabañas Disponibles</h2>
  <section class="container my-5">
    <div class="row">
      <!-- Sección de comentarios (izquierda) -->
      <div class="col-lg-4 mb-4 mb-lg-0">
        <h4 class="fw-bold">Comentarios</h4>
        <div v-for="(comentario, index) in comentarios" :key="index" class="d-flex align-items-start mb-4 border-bottom pb-3">
          <img :src="comentario.foto" class="rounded-circle me-3" alt="Foto usuario" width="50" height="50" />
          <div>
            <strong>{{ comentario.nombre }}</strong>
            <div class="text-warning">
              <i v-for="n in 5" :key="n" class="bi" :class="n <= comentario.estrellas ? 'bi-star-fill' : 'bi-star'"></i>
            </div>
            <p class="mb-0"><small><em>Sobre: {{ comentario.cabana }}</em></small></p>
            <p class="mb-0">{{ comentario.mensaje }}</p>
          </div>
        </div>
      </div>

      <!-- Sección de cabañas -->
      <div class="col-lg-8">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col" v-for="(cabana, index) in cabanas" :key="index">
            <a
              :href="'https://www.google.com'"
              target="_blank"
              rel="noopener noreferrer"
              class="card h-100 shadow-sm border-0 cabana-card text-decoration-none"
            >
              <div class="img-container position-relative">
                <img :src="cabana.img" class="card-img-top" :alt="'Imagen de ' + cabana.nombre" />
                <div class="overlay-text">
                  <span>Clic para reservar ya</span>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold text-dark">{{ cabana.nombre }}</h5>
                <p class="card-text text-muted">{{ cabana.descripcion }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cabanas = [
  {
    nombre: 'Cabaña 1',
    descripcion: 'Una cabaña con vistas espectaculares.',
    img: 'https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg',
  },
  {
    nombre: 'Cabaña 2',
    descripcion: 'Relájate con el sonido del mar cercano.',
    img: 'https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg',
  },
  {
    nombre: 'Cabaña 3',
    descripcion: 'Perfecta para una escapada romántica.',
    img: 'https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg',
  },
  // Puedes agregar más cabañas para completar 12 elementos
]
const comentarios = [
  {
    nombre: 'Laura Gómez',
    cabana: 'Cabaña 1',
    estrellas: 5,
    mensaje: 'Hermosa experiencia, muy recomendada.',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    nombre: 'Carlos Díaz',
    cabana: 'Cabaña 2',
    estrellas: 4,
    mensaje: 'Todo muy bien, solo faltó café.',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    nombre: 'Ana Torres',
    cabana: 'Cabaña 3',
    estrellas: 3,
    mensaje: 'Cómoda pero un poco calurosa.',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]
</script>

<style scoped>
.img-container {
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
  cursor: pointer;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 0.5rem 0.5rem 0 0;
}

/* Overlay para texto "Clic para reservar ya" */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.4rem 1rem;
  border-radius: 1.2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.05em;
}

/* Hover - agrandar imagen y mostrar texto */
.cabana-card:hover .card-img-top {
  transform: scale(1.35);
  filter: brightness(0.8);
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease;
}

.cabana-card:hover .overlay-text {
  opacity: 1;
}

/* Estrellas con Bootstrap Icons */
.bi-star-fill {
  color: #ffc107;
}

.bi-star {
  color: #e4e5e9;
}
</style>
