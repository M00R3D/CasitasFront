<template>
  <div class="container my-5">
    <!-- Título principal -->
    <div class="text-center mb-5">
      <h3 class="fw-bold">CASITAS EL SALITRAL</h3>
      <p class="text-muted">
        A las afueras de La Paz, Baja California Sur ·
        <a href="#opiniones" class="text-decoration-underline">Escribir una opinión</a>
      </p>
    </div>

    <div class="row g-4">
      <!-- Columna 1: Preguntas Frecuentes -->
      <div class="col-lg-4">
        <h5 class="fw-semibold mb-3">Preguntas Frecuentes</h5>
        <div class="accordion" id="faqAccordion">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="accordion-item"
          >
            <h2 class="accordion-header" :id="'heading' + index">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + index"
                aria-expanded="false"
                :aria-controls="'collapse' + index"
              >
                {{ faq.pregunta }}
              </button>
            </h2>
            <div
              :id="'collapse' + index"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + index"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">{{ faq.respuesta }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Columna 2: Sobre Nosotros -->
      <div class="col-lg-4">
        <h5 class="fw-semibold mb-3">Sobre Casitas El Salitral</h5>
        <p>Casitas El Salitral by Rotamundos ofrece experiencias auténticas en contacto con la naturaleza.</p>
        <p>Ubicados cerca de La Paz, nuestras casitas combinan confort y belleza natural. Queremos brindarte descanso, aventura y conexión en un entorno acogedor.</p>
        <p>Disfruta caminatas, observación de aves y noches estrelladas. Nuestro equipo está comprometido a ofrecerte un servicio cálido y personalizado.</p>
        <p class="fw-bold">¡Bienvenido a tu hogar en la naturaleza!</p>
      </div>

      <!-- Columna 3: Galería -->
      <div class="col-lg-4 d-flex flex-column gap-3">
        <img
          src="https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg"
          class="img-fluid rounded shadow"
          alt="Casita El Salitral"
        />
        <img
          src="https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg"
          class="img-fluid rounded shadow"
          alt="Naturaleza El Salitral"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Lista de preguntas frecuentes como arreglo de objetos
const faqs = [
  {
    pregunta: '¿Dónde se encuentra Casitas El Salitral?',
    respuesta: 'Estamos a las afueras de La Paz, Baja California Sur. Puedes encontrar la dirección exacta en la sección "¿Cómo llegar?".'
  },
  {
    pregunta: '¿Necesito reservar con anticipación?',
    respuesta: 'Sí, es recomendable reservar antes para asegurar disponibilidad, especialmente en temporada alta.'
  },
  {
    pregunta: '¿Se aceptan mascotas?',
    respuesta: '¡Sí! Somos pet-friendly. Solo pedimos seguir las reglas básicas de convivencia.'
  },
  {
    pregunta: '¿Qué servicios incluyen las casitas?',
    respuesta: 'Cama cómoda, baño privado, áreas de descanso y acceso a zonas comunes. Algunas casitas tienen cocina o terraza.'
  },
  {
    pregunta: '¿Hay señal de internet o teléfono?',
    respuesta: 'Sí, en áreas comunes. Pero te invitamos a desconectarte y disfrutar del entorno.'
  },
  {
    pregunta: '¿Cómo puedo modificar o cancelar una reservación?',
    respuesta: 'Desde tu cuenta en el sitio web o por WhatsApp/correo electrónico.'
  },
  {
    pregunta: '¿Qué actividades puedo realizar en El Salitral?',
    respuesta: 'Senderismo, observación de aves, fotografía, noches estrelladas y más. Consulta la sección de actividades.'
  }
];
</script>

<style scoped>
.accordion-button {
  font-weight: 500;
}
</style>
