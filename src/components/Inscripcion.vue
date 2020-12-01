<template>
    <div class="container p-0">
      <div class="row px-5">
        <div class="col-12 col-lg-4 offset-lg-8">
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-end align-items-end">
                <div id="FrmInscripcion" class="aero p-5 mb-5"> 
                    <div class="pt-4 px-4 text-center font-weight-bold mt-2">
                        Postula y obtén un 10% de descuento en el programa
                    </div>
                    <div class="px-4 pt-2 mx-1">
                        <form @submit.prevent='inscribir({nombres: nombres, email: email, celular: celular, curso_id: curso_id, terminos: terminos})'>
                            <div class="form-group my-2">
                                <input type="text" class="form-control rounded py-4" id="nombre" v-model="nombre" placeholder="NOMBRE">
                            </div>        
                            <div class="form-group my-2">
                                <input type="text" class="form-control rounded py-4" id="celular" v-model="celular" placeholder="CELULAR">
                            </div>      
                            <div class="form-group my-2">
                                <input type="email" class="form-control rounded py-4" id="email" v-model="email" placeholder="CORREO ELECTRÓNICO">
                            </div>        
                            <div class="form-group">
                                <select  v-if='cursos !== undefined' class="form-control rounded" id="curso_id" style="height: 50px" v-model='curso_id' >
                                    <option key='' value=''>PROGRAMAS</option>
                                    <option v-for='curso in cursos' :key="curso.id" :value="curso.id">{{curso.nombre}}</option>
                                </select>
                            </div>
                            <div class="form-group form-check">
                                <input class="form-check-input" type="checkbox" id="terminos" v-model='terminos'>
                                <label class="form-check-label text-left" for="defaultCheck1">
                                    Acepto las <a href="#" target="_blank">politicas de privacidad</a> y los <a href="#" target="_blank">términos y condiciones</a>
                                </label>
                            </div>
                            <div class="form-group mt-3 pt-3">
                                <button type='submit' class="btn btn-block btn-primary py-2">Quiero Postular</button>
                            </div>
                        </form>
                    </div>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Inscripcion', 
  data() {
    return {
        nombres: '',
        email: '',
        celular: '',
        curso_id: '',
        terminos: false,
    }
  },
  computed: {
      ...mapState(['cursos'])
  },
  methods: {
    ...mapActions(['createInscripcionAction']),
    inscribir(inscripcion) {
      
      let validaciones = '';
      if (inscripcion.nombres.trim() === '') {
        validaciones += '> Ingresar sus nombres<br>';
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
      this.email = '';
      this.celular = '';
      this.curso_id = '';
      this.terminos = false;          
    }
  }
}
</script>

<style>
.aero {
    position: fixed;
    max-width: 370px;
    top: 100px;    
    background-image: url('/assets/FormMovil.svg');
}

@media screen and (max-width: 992px) {
    .aero{
        background-image: none;
        position: relative;
        max-width: none;
        width: 100%;
        top: 0;
    }
};
</style>