<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
    <nav><Navbar /></nav>
    <router-view />
    <footer><Footer /></footer>
</template>

<style scoped>
/* Scoped solo afecta este componente */
.w-100 {
    width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<style >
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
  
 html, body, #app {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav{width: 100%;}

</style>
