<!-- src/components/Footer.vue -->
<template>
  <footer class="footer-wrapper border-top py-3">
    <div class="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">

      <!-- Enlaces y contacto -->
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3 mb-md-0">
        <a href="#" class="text-secondary text-decoration-none small">Contáctanos</a>
        <a href="#"><img src="https://i.ibb.co/2YRBG2kk/igicon.png" alt="Instagram" class="small-icon" /></a>
        <a href="#"><img src="https://i.ibb.co/FLbvPqPH/fbicon.png" alt="Facebook" class="small-icon" /></a>
        <a href="#"><img src="https://i.ibb.co/rRDFsCTK/wpicon.png" alt="WhatsApp" class="small-icon" /></a>
        <span class="text-secondary small ms-2">Email: contacto@cabanas.com</span>
        <span class="text-secondary small ms-2">Tel: (555) 555-5555</span>
      </div>

      <!-- Logo y derechos -->
      <div class="d-flex flex-column align-items-md-end align-items-start text-secondary small">
        <a href="#"><img src="https://i.ibb.co/Tq7v2SD/path1584.png" alt="Logo" style="height: 30px;" /></a>
        <div>© 2024 Casitas El Salitral</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background-color: #ffffff;
}
img {
  max-width: 100%;
  height: auto;
}

.small-icon {
  width: 14px;
  height: 14px;
}
</style>
