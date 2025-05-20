<template>
  <nav :class="['navbar-wrapper', 'border-bottom', isVisible ? 'show-navbar' : 'hide-navbar']">
    <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap py-2">
      
      <!-- Marca / Logo -->
      <div class="d-flex align-items-center gap-2">
        <a href="/home">
          <img src="https://i.ibb.co/Tq7v2SD/path1584.png" alt="Logo" class="logo" />
        </a>
        <div class="logo-text">
          Casitas El Salitral<br />
          <small>Escápate a la naturaleza</small>
        </div>
      </div>

      <!-- Botón de menú para móvil -->
      <button class="menu-button d-md-none" @click="toggleMenu">☰</button>

      <!-- Menú de navegación -->
      <div :class="['menu', isOpen ? 'd-flex flex-column' : 'd-none d-md-flex']">
        <a href="#">Inicio</a>
        <a href="#">Sobre Nosotros</a>
        <a href="#">¿Cómo llegar?</a>
        <a href="#">Temas</a>
      </div>

      <!-- Botón agendar -->
      <button class="btn btn-agendar ms-md-3 mt-2 mt-md-0" @click="goToAgendarCita()">
        Agendar Estancia
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const isVisible = ref(true)
let lastScrollTop = 0

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function goToAgendarCita() {
  // router.push o emitir evento
}

function handleScroll() {
  const currentScroll = window.scrollY

  if (currentScroll < lastScrollTop) {
    // scrolleando hacia arriba
    isVisible.value = true
  } else {
    // scrolleando hacia abajo
    isVisible.value = false
  }

  lastScrollTop = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style src="src/components/Navbar.css"></style>
<style scoped>
/* Fondo blanco y ancho completo */
.navbar-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1030; /* mayor que otros elementos */
  transition: transform 0.3s ease;
  background-color: #ffffff;
}

/* Visible (default) */
.show-navbar {
  transform: translateY(0%);
}

/* Oculta hacia arriba */
.hide-navbar {
  transform: translateY(-100%);
}

/* Eliminar padding lateral del container-fluid */
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

/* Imagen responsiva */
img {
  max-width: 100%;
  height: auto;
}

/* Logo */
.logo {
  width: 60px;
  height: auto;
}

/* Texto del logo */
.logo-text {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
}

/* Enlaces del menú */
.menu a {
  margin-right: 20px;
  text-decoration: none;
  color: #444;
  font-weight: 500;
}

/* Botón menú hamburguesa */
.menu-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Botón agendar */
.btn-agendar {
  background-color: #f4a261;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .menu {
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
  }
}
</style>
