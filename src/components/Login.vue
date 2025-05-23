<template>
  <div class="login-container position-relative">
    <!-- Botón de cerrar -->
    <button class="btn btn-danger btn-close-modal" @click="emit('cerrar')">
      &times;
    </button>

    <div class="card shadow p-4">
      <h2 class="text-center mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <!-- Correo -->
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            required
          />
        </div>

        <!-- Contraseña -->
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>

        <!-- Error -->
        <div v-if="error" class="alert alert-danger">
          {{ error }}
        </div>

        <!-- Botón -->
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['cerrar'])

const email = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Por favor, completa todos los campos.'
    return
  }

  if (email.value === 'admin@example.com' && password.value === '1234') {
    alert('Inicio de sesión exitoso')
    emit('cerrar')
  } else {
    error.value = 'Correo o contraseña incorrectos.'
  }
}
</script>

<style scoped>
/* Contenedor que centra el formulario */
.login-container {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}

/* Tarjeta del login */
.card {
  border-radius: 15px;
  max-width: 80vh;
  width: 100%;
  position: relative;
}

/* Botón rojo para cerrar el modal */
.btn-close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #dc3545;
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0 12px;
  border: none;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
}

.btn-close-modal:hover {
  background-color: #c82333;
}
</style>
