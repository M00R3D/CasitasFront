<script setup>
import Dashboard from './Dashboard.vue';
import Cabanas from './Cabanas.vue'
import Login from './Login.vue'
import { ref } from 'vue'
const showLogin = ref(true)

function cerrarLogin() {
  showLogin.value = false
}

</script>

<!-- src/components/InitialHome.vue -->
<style scoped src="src/components/styles.css">
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
  .login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

</style>
<template>
  <!-- Modal de login -->
  <div v-if="showLogin" class="login-overlay">
    <Login @cerrar="cerrarLogin" />
  </div>

  <div class="spacer"></div>
  <div class="container-fluid">
    <Dashboard />
  </div>
<div class="container-fluid ">
  <div class="row g-3">
    <div class="col-12 col-md-8">
      <img src="https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg" alt="Principal" class="img-fluid rounded">
    </div>
    <div class="col-6 col-md-4">
      <img src="https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg" class="img-fluid rounded">
    </div>
    <div class="col-6 col-md-4">
      <img src="https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg" class="img-fluid rounded">
    </div>
    <div class="col-6 col-md-4">
      <img src="https://i.ibb.co/gbSzPjQm/Whats-App-Image-2024-10-24-at-8-53-25-PM.jpg" class="img-fluid rounded">
    </div>
  </div>
</div>

<div class="spacer"></div>

<div class="container-fluid ">
    <Cabanas />
</div>

</template>


