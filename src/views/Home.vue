<template>
  <div>   
    <Header />
    <Patrocinadores />
    <Cursos />
    <Beneficios />
    <Inscripcion />
    <Patrocinadores dark=true />
  </div>
</template>

<script>
import Header from './../components/Header.vue';
import Patrocinadores from './../components/Patrocinadores.vue';
import Cursos from './../components/Cursos.vue';
import Beneficios from './../components/Beneficios.vue';
import Inscripcion from './../components/Inscripcion.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Cursos,
    Beneficios,
    Inscripcion,
    Patrocinadores
  }
}
</script>

<style>

</style>
