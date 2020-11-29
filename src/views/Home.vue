<template>
  <div>   
    <Header />
    <div class="container p-0">
      <div class="row px-5">
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-12 pt-5 text-left">
              <Patrocinadores />
            </div>
          </div>
          <div class="row">
            <div class="col-12 pt-5 mt-5 text-left font-weight-bold">
              <span>Conoce nuestros Programas de Especialización</span>
            </div>
          </div>
          <div class="row mb-5">
            <div v-for='curso in cursos' :key="curso.id" class="col-12 col-sm-6">
              <Card :curso='curso'></Card>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-end align-items-end">
                <inscripcion :cursos='cursos' />

                <a href="https://wa.link/tvf2t0" target="_blank">
                  <button 
                    class="btn d-flex justify-content-center align-items-center m-1 rounded-circle bg-primary text-white  shadow" 
                    style="width: 40px; height: 40px;">
                      <i class="fab fa-whatsapp m-0 h3"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Header from './../components/Header.vue';
import Patrocinadores from './../components/Patrocinadores.vue';
import Card from './../components/Card.vue';
import Inscrpcion from './../components/Inscripcion.vue';
import Footer from './../components/Footer.vue';
import Swal from 'sweetalert2';
import Inscripcion from './../components/Inscripcion.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Inscripcion,
    Patrocinadores,
    Card,
    Footer
  },
  methods: {
    ...mapActions(['getCursosAction']),
  },
  computed: {
    ...mapState(['cursos'])
  },
  created() {
    this.getCursosAction();
  }
}
</script>

<style>

</style>
