<template>
  <div>  
    <Navbar :backgroundTranslate="true" />
    <Header />
    <Patrocinadores />
    <Cursos />
    <BannerComunidad />
    <Beneficios />
    <Inscripcion />
    <Patrocinadores :dark='true' />
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue';
import Header from './../components/Header.vue';
import Patrocinadores from './../components/Patrocinadores.vue';
import Cursos from './../components/Cursos.vue';
import BannerComunidad from './../components/BannerComunidad.vue';
import Beneficios from './../components/Beneficios.vue';
import Inscripcion from './../components/Inscripcion.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Cursos,
    BannerComunidad,
    Beneficios,
    Inscripcion,
    Patrocinadores
  }
}
</script>

<style>

</style>
