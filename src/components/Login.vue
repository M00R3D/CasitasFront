<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['cerrar']) // ✅

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
    emit('cerrar') // ✅ Ocultar login
  } else {
    error.value = 'Correo o contraseña incorrectos.'
  }
}
</script>


<style scoped>
.card {
  border-radius: 15px;
}
</style>
