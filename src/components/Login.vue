<template>
  <div class="login-container position-relative">
    <!-- Botón de cerrar -->
    <button class="btn btn-danger btn-close-modal" @click="emit('cerrar')">
      &times;
    </button>

    <div class="card shadow p-4">
      <!-- Título dinámico -->
      <h2 class="text-center mb-4">
        {{
          currentView === 'login'
            ? 'Iniciar Sesión'
            : currentView === 'registro'
            ? 'Registro'
            : 'Recuperar Contraseña'
        }}
      </h2>

      <form v-if="currentView === 'login'" @submit.prevent="handleLogin">
        <!-- Login -->
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" id="password" class="form-control" v-model="password" required />
        </div>

        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </div>
      </form>

      <form v-else-if="currentView === 'registro'" @submit.prevent="handleRegistro">
        <!-- Registro -->
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre completo</label>
          <input type="text" id="nombre" class="form-control" v-model="nombre" required />
        </div>

        <div class="mb-3">
          <label for="emailRegistro" class="form-label">Correo electrónico</label>
          <input type="email" id="emailRegistro" class="form-control" v-model="email" required />
        </div>

        <div class="mb-3">
          <label for="passwordRegistro" class="form-label">Contraseña</label>
          <input type="password" id="passwordRegistro" class="form-control" v-model="password" required />
        </div>

        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-success">Registrarse</button>
        </div>
      </form>

      <form v-else @submit.prevent="handleRecuperar">
        <!-- Recuperar contraseña -->
        <div class="mb-3">
          <label for="emailRecuperar" class="form-label">Correo electrónico</label>
          <input type="email" id="emailRecuperar" class="form-control" v-model="email" required />
        </div>

        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-warning">Enviar enlace de recuperación</button>
        </div>
      </form>

      <!-- Links de navegación -->
      <div class="text-center">
        <template v-if="currentView === 'login'">
          <p class="mb-1">
            ¿No tienes cuenta?
            <a href="#" @click.prevent="currentView = 'registro'">Regístrate aquí</a>
          </p>
          <p>
            ¿Olvidaste tu contraseña?
            <a href="#" @click.prevent="currentView = 'recuperar'">Recupérala aquí</a>
          </p>
        </template>
        <template v-else>
          <p>
            <a href="#" @click.prevent="currentView = 'login'">Volver al inicio de sesión</a>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['cerrar'])

const currentView = ref('login') // 'login', 'registro' o 'recuperar'
const email = ref('')
const password = ref('')
const nombre = ref('')
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

function handleRegistro() {
  if (!nombre.value || !email.value || !password.value) {
    alert('Por favor, completa todos los campos de registro.')
    return
  }
  alert('¡Registro exitoso! Ahora puedes iniciar sesión.')
  currentView.value = 'login'
}

function handleRecuperar() {
  if (!email.value) {
    alert('Ingresa tu correo para recuperar la contraseña.')
    return
  }
  alert(`Se ha enviado un enlace de recuperación a ${email.value}`)
  currentView.value = 'login'
}
</script>

<style scoped>
.login-container {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}

.card {
  border-radius: 15px;
  max-width: 80vh;
  width: 100%;
  position: relative;
}

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

a {
  cursor: pointer;
}
</style>
