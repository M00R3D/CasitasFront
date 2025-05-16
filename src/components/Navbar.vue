<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar-wrapper border-bottom">
    <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap py-2">
      
      <!-- Marca / Logo -->
      <div class="d-flex align-items-center gap-2">
        <a href="#">
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
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function goToAgendarCita() {
  // Aquí puedes emitir evento o usar router.push si usas Vue Router
}
</script>

<style scoped>
.navbar-wrapper {
  background-color: #ffffff;
  width: 100%;
}
img {
  max-width: 100%;
  height: auto;
}

.logo {
  width: 60px;
  height: auto;
}

.logo-text {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
}

.menu a {
  margin-right: 20px;
  text-decoration: none;
  color: #444;
  font-weight: 500;
}

.menu-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.btn-agendar {
  background-color: #f4a261;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu {
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
  }
}
</style>
