<template>
    <div class="container p-0">
      <div class="row px-5">
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-12 pt-5 text-left font-weight-bold">
              <span>Conoce nuestros Programas de Especialización</span>
              <a href='#FrmInscripcion' class="d-inlin-block d-lg-none btn btn-danger bg-red rounded-pill">
                <i class="fas fa-shopping-cart"></i> Inscribete
              </a>
              <a href="https://wa.link/tvf2t0" target="_blank">
                <button 
                  class="btn d-flex justify-content-center align-items-center m-1 rounded-circle bg-success text-white shadow" 
                  style="width: 40px; height: 40px;">
                    <i class="fab fa-whatsapp m-0 h3"></i>
                </button>
              </a>
            </div>
          </div>
          <div class="row mb-5">
            <div v-for='curso in cursos' :key="curso.id" class="col-12 col-sm-6">
              <Card :curso='curso'></Card>
            </div>
          </div>
        </div> 
      </div>
    </div>     
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Swal from 'sweetalert2';
import Card from './../components/Card.vue';

export default {
    name: 'Cursos',
    components: {
        Card
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