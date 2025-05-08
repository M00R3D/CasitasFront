<!-- src/components/InitialHome.vue -->
<style scoped src="src/components/styles.css"></style>
<template>
  <Navbar />

  <div class="spacer"></div>

  <section class="galeria">
    <div class="imagen-grande">
      <img src="https://i.ibb.co/9kYy8JcB/Whats-App-Image-2024-10-24-at-8-53-21-PM.jpg" alt="Casita 1" class="img img-destacada" />
    </div>
    <div class="imagen-chica">
      <img src="https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg" alt="Casita 2" class="img" />
    </div>
    <div class="imagen-chica">
      <img src="https://i.ibb.co/F4nP9p09/Whats-App-Image-2024-10-24-at-8-53-23-PM.jpg" alt="Casita 2" class="img" />
    </div>
    <div class="imagen-chica">
      <img src="https://i.ibb.co/gbSzPjQm/Whats-App-Image-2024-10-24-at-8-53-25-PM.jpg" alt="Casita 5" class="img" />
    </div>
  </section>

  <div class="spacer"></div>

  <Footer />
</template>

<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>


<!-- <template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="https://i.ibb.co/Tq7v2SD/path1584.png" alt="Logo" class="logo me-2" />
            <span class="logo-text">Casitas El Salitral<br><small>Escápate a la naturaleza</small></span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">Sobre Nosotros</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Quiénes Somos</a></li>
                  <li><a class="dropdown-item" href="#">Dónde Nos Encontramos</a></li>
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="siteDropdown" role="button" data-bs-toggle="dropdown">El Sitio</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Galería</a></li>
                  <li><a class="dropdown-item" href="#">Ver Todas las Casitas</a></li>
                  <li><a class="dropdown-item" href="#">Próximos Eventos</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="contactDropdown" role="button" data-bs-toggle="dropdown">Contáctanos</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Medios de Contacto</a></li>
                  <li><a class="dropdown-item" href="#">Envíanos un Email</a></li>
                </ul>
              </li>
            </ul>
            <button class="btn-warning btn-primary btn-agendar ms-lg-3" @click="goToAgendarCita()">
              Agendar Cita
            </button>
          </div>
        </div>
      </nav>
  
      <div class="banner position-relative">
        <img :src="currentBanner" alt="Banner" class="banner-image" />
        <div class="banner-overlay d-flex align-items-center justify-content-center">
          <h1 class="text-white text-center px-4">Descubre tu refugio ideal en nuestras cabañas rusticas a solo unos minutos de la playa.
            Sumergete en un ambiente relajante y autentico, disfruta de atardeceres unicos, el sonido del mar y la calidez de un hogar lejos de casa.</h1>
        </div>
      </div>
  
      <section class="container my-5">
        <h2 class="text-center mb-4">Nuestras Cabañas</h2>
        <div class="row gy-4">
          <div class="col-md-4" v-for="(cabin, index) in cabins" :key="index">
            <div class="card shadow-sm h-100">
              <img :src="cabin.image" class="card-img-top" alt="Cabaña" />
              <div class="card-body">
                <h5 class="card-title">{{ cabin.title }}</h5>
                <p class="card-text">{{ cabin.description }}</p>
                <button class="btn btn-outline-primary btn-sm w-100">Ver Más</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="bg-light py-5">
        <div class="container text-center">
          <h3>Contáctanos</h3>
          <p>Teléfono: (555) 555-5555</p>
          <p>Email: contacto@cabanas.com</p>
        </div>
      </section>
  
      <footer class="bg-dark text-white py-3 text-center">
        <p class="mb-0">&copy; 2024 Casitas El Salitral. Todos los derechos reservados.</p>
      </footer>
  
      <AgendarCita v-if="showModal" @close="showModal = false" />
    </div>
  </template> -->
  
  <!-- <script>
  import AgendarCita from './AgendarCita.vue';
  
  export default {
    name: 'InitialHome',
    components: {
      AgendarCita,
    },
    data() {
      return {
        showModal: false,
        cabins: [
          { image: 'https://i.ibb.co/c3rTJvn/path359-8235235.jpg', title: 'Cabaña 1', description: 'Una cabaña con vistas espectaculares.' },
          { image: 'https://i.ibb.co/TRGMHPY/path123058912958125.jpg', title: 'Cabaña 2', description: 'Relájate con el sonido del mar cercano.' },
          { image: 'https://i.ibb.co/kqzpsHj/banner2.jpg', title: 'Cabaña 3', description: 'Perfecta para familias y amigos.' },
        ],
        banners: [
          'https://i.ibb.co/C6Gq0xS/BANNER-TOP-FOTO-CARIBE.jpg',
          'https://i.ibb.co/kqzpsHj/banner2.jpg',
        ],
        currentBanner: '',
      };
    },
    mounted() {
      let index = 0;
      this.currentBanner = this.banners[index];
      setInterval(() => {
        index = (index + 1) % this.banners.length;
        this.currentBanner = this.banners[index];
      }, 5000);
    },
    methods: {
      goToAgendarCita() {
        this.$router.push('/agendar-cita');
      },
    },
  };
  </script>
  
  <style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
  
  .logo {
    width: 50px;
  }
  
  .logo-text {
    font-size: 0.9rem;
    font-weight: bold;
  }
  
  .nav-link:hover {
    color: #007bff !important;
  }
  
  .banner {
    height: 70vh;
    overflow: hidden;
  }
  
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }
  
  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  
  .card:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  
  .btn-agendar {
    background-color: #007bff;
    border-radius: 30px;
    width:20%;
  }
  
  .btn-agendar:hover {
    background-color: #0056b3;
  }
  </style> -->