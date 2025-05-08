<!-- src/components/SplashScreen.vue -->
<template>
    <div class="splash-container">
      <img
        src="https://i.ibb.co/Tq7v2SD/path1584.png"
        alt="Logo Casitas"
        class="splash-logo"
      />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  onMounted(() => {
    setTimeout(() => {
      router.push('/home')
    }, 5000) 
  })
  </script>
  
  <style scoped>
  .splash-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: white;
  }
  
  .splash-logo {
    width: 200px;
    height: auto;
    animation: float 2s ease-in-out infinite;
  }
  
  @keyframes float {
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  </style>
  