<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>


<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
  
</style>
