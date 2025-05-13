<!-- CasitasFront\src\components\GaleriaCasita.vue -->
<template>
  <section class="gallery-container">
    <div class="photos-grid-container">
      <!-- Imagen principal -->
      <div class="main-photo img-box">
        <a :href="fotos[0]" class="glightbox" data-glightbox="type: image">
          <img :src="fotos[0]" alt="Imagen principal" />
        </a>
      </div>

      <!-- Imágenes secundarias -->
      <div class="sub">
        <div
          v-for="(foto, index) in fotos.slice(1, 4)"
          :key="index"
          class="img-box"
        >
          <a :href="foto" class="glightbox" data-glightbox="type: image">
            <img :src="foto" alt="Foto casita" />
          </a>
        </div>

        <!-- Imagen con overlay "+x" -->
        <div v-if="fotos.length > 5" class="img-box" @click="mostrarGaleriaExtra">
          <a :href="fotos[4]" class="glightbox" data-glightbox="type: image">
            <img :src="fotos[4]" alt="Foto extra" />
            <div class="transparent-box">
              <div class="caption">+{{ fotos.length - 5 }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Galería oculta -->
    <div v-show="mostrarExtra" class="extra-images-container">
      <a
        v-for="(foto, index) in fotos.slice(5)"
        :key="'extra-' + index"
        :href="foto"
        class="glightbox"
        data-glightbox="type: image"
      >
        <img :src="foto" alt="Imagen extra" />
      </a>
    </div>
  </section>
</template>

<script>
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'

export default {
  name: 'GaleriaCasita',
  props: {
    fotos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mostrarExtra: false,
      lightbox: null,
    }
  },
  mounted() {
    this.lightbox = GLightbox({
      selector: '.glightbox',
    })
  },
  methods: {
    mostrarGaleriaExtra() {
      this.mostrarExtra = true
      // Reinicializa el lightbox al mostrar más fotos
      this.$nextTick(() => {
        this.lightbox.reload()
      })
    },
  },
}
</script>

<style scoped>
.gallery-container {
  padding: 1rem;
}

.photos-grid-container {
  display: grid;
  gap: 10px;
}

.main-photo img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.sub {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}

.img-box {
  position: relative;
}

.img-box img {
  width: 100%;
  border-radius: 6px;
}

.transparent-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  border-radius: 6px;
}

.extra-images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.extra-images-container img {
  width: 100px;
  border-radius: 6px;
}
</style>
