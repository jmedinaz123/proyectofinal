<template>
  <div>   
    <Header />
    <div class="row px-5">
      <div class="col-12 col-lg-7">
        <div class="row">
          <div class="col-12 pt-3 text-left font-weight-bold">
            <span>Conoce nuestros Programas de Especialización</span>
          </div>
        </div>
        <div class="row">
          <div v-for='curso in cursos' :key="curso.id" class="col-12 col-sm-6">
            <Card :curso='curso'></Card>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="">
          <div class="d-flex justify-content-end align-items-end">
            <div class="card m-1 border-primary shadow  rounded-0" style="max-width: 450px;">
              <div class="card-header bg-primary text-white rounded-0">
                Postula y obtén un 10% de descuento en el programa
                </div>
              <div class="card-body pb-1">
                <form @submit.prevent='inscribir({nombres: nombres, apellidos: apellidos, email: email, telefonocelular: telefonocelular, curso_id: curso_id, terminos: terminos})'>
                  <div class="form-group">
                    <input type="text" class="form-control border-primary rounded-0" id="nombres" v-model="nombres" placeholder="Nombres">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control border-primary rounded-0" id="apellidos" v-model="apellidos" placeholder="Apellidos">
                  </div>        
                  <div class="form-group">
                    <input type="email" class="form-control border-primary rounded-0" id="email" v-model="email" placeholder="Correo electrónico">
                  </div>        
                  <div class="form-group">
                    <input type="text" class="form-control border-primary rounded-0" id="telfonocelular" v-model="telefonocelular" placeholder="Teléfono / celular">
                  </div>        
                  <div class="form-group">
                    <select class="form-control border-primary rounded-0" id="curso_id" v-model='curso_id' >
                      <option key='' value=''>Programas</option>
                      <option v-for='curso in cursos' :key="curso.id" :value="curso.id">{{curso.nombre}}</option>
                    </select>
                  </div>
                  <div class="form-group form-check">
                    <input class="form-check-input" type="checkbox" id="terminos" v-model='terminos'>
                    <label class="form-check-label text-left" for="defaultCheck1">
                      Acepto las <a href="#" target="_blank">politicas de privacidad</a> y los <a href="#" target="_blank">términos y condiciones</a>
                    </label>
                  </div>
                  <div class="form-group">
                    <button type='submit' class="btn btn-block btn-primary rounded-0">Postular</button>
                  </div>
                </form>
              </div>
            </div>

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
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Header from './../components/Header.vue';
import Card from './../components/Card.vue';
import Swal from 'sweetalert2'

export default {
  name: 'Home',
  components: {
    Header,
    Card
  },
  data() {
        return {
            nombres: '',
            apellidos: '',
            email: '',
            telefonocelular: '',
            curso_id: '',
            terminos: false,
        }
  },
  methods: {
    ...mapActions(['createInscripcionAction','getCursosAction']),
    inscribir(inscripcion) {
      
      let validaciones = '';
      if (inscripcion.nombres.trim() === '') {
        validaciones += '> Ingresar sus nombres<br>';
      }
      if (inscripcion.apellidos.trim() === '') {
        validaciones += '> Ingresar sus apellidos<br>';
      }
      if (inscripcion.email.trim() === '') {
        validaciones += '> Ingresar su correo electrónico<br>';
      }
      if (inscripcion.curso_id.trim() === '') {
        validaciones += '> Seleccionar un programa<br>';
      }
      if (!inscripcion.terminos) {
        validaciones += '> Aceptar las políticas de privacidad, términos y condiciones<br>';
      }

      if (validaciones !== '') {
        Swal.fire({
          icon: 'warning',
          title: 'Para realizar la inscripción debe:',
          html: `<div class='text-left'>${validaciones}</div>`,
        })

        return;
      }


      this.createInscripcionAction(inscripcion);
      this.nombres = '';
      this.apellidos = '';
      this.email = '';
      this.telefonocelular = '';
      this.curso_id = '';
      this.terminos = false;          
    }
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
