<!-- src/components/LoginModal.vue -->
<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-white bg-dark">
        <div class="modal-header">
          <h5 class="modal-title">{{ isRegistering ? 'Registrarse' : 'Inicia Sesión' }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <form :action="formAction" method="POST">
            <input type="hidden" name="_token" :value="csrfToken" />

            <!-- Registro -->
            <template v-if="isRegistering">
              <div class="mb-3">
                <label for="first_name" class="form-label">Nombre</label>
                <input type="text" name="first_name" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="last_name" class="form-label">Apellido</label>
                <input type="text" name="last_name" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" name="password" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="password_confirmation" class="form-label">Confirmar Contraseña</label>
                <input type="password" name="password_confirmation" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-warning w-100">Registrarse</button>
              <p class="message text-center mt-2">¿Ya tienes cuenta? <a href="#" @click.prevent="toggleForm">Inicia sesión aquí</a></p>
            </template>

            <!-- Login -->
            <template v-else>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" name="password" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
              <p class="message text-center mt-2">¿No tienes cuenta? <a href="#" @click.prevent="toggleForm">Regístrate aquí</a></p>
            </template>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isRegistering = ref(false)
const toggleForm = () => (isRegistering.value = !isRegistering.value)

// Estas rutas deben coincidir con las de Laravel
const formAction = computed(() =>
  isRegistering.value ? '/users/store' : '/handleLogin'
)
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
</script>

<style scoped>
.modal-content {
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
}
</style>
