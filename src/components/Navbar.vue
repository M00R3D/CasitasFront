<!-- src/components/Navbar.vue -->
<style scoped src="src/components/styles.css"></style>
<template>
    <nav class="navStyle">
      <span class="actual-page"><small>| Página de Inicio |</small></span>
      <div class="container">
        <div class="brand">
          <a href="#"><img src="https://i.ibb.co/Tq7v2SD/path1584.png" alt="Logo" class="logo" /></a>
          <span class="logo-text">
            Casitas El Salitral<br />
            <small>Escápate a la naturaleza</small>
          </span>
        </div>
        <button class="menu-button" @click="toggleMenu">☰</button>
        <div class="menu" :class="{ open: isOpen }">
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">¿Cómo llegar?</a>
          <a href="#">Temas</a>
        </div>
        <button class="btn-agendar" @click="goToAgendarCita()">Agendar Estancia</button>
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
    // Aquí puedes emitir evento o navegar
  }
  </script>
  