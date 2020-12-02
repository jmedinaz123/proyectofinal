<template>
    <div class="container p-0">
      <div class="row px-5">
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-12 pt-5 text-left font-weight-bold d-flex justify-content-between">
              <span>Conoce nuestros Programas de Especialización</span>
              <div class="d-flex flex-column-reverse align-items-end d-lg-none" style="min-width:125px" >
                <a href='#FrmInscripcion' class="d-inlin-block d-lg-none btn btn-danger bg-red rounded-pill">
                  <i class="fas fa-pen"></i> Inscribete
                </a>
                <ButtonWhatsapp />
              </div>
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
import ButtonWhatsapp from './../components/ButtonWhatsapp.vue';

export default {
    name: 'Cursos',
    components: {
        Card,
        ButtonWhatsapp
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