<template>
    <div class="aero">  
        <div class="card m-1 border-primary shadow rounded-0" >
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
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Inscripcion',       
    props: {
        cursos: []
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
    ...mapActions(['createInscripcionAction']),
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
  }
}
</script>

<style>
.aero {
    position: fixed;
    max-width: 400px;
    top: 150px;
}
@media screen and (max-width: 1200px) {
    .aero{
        max-width: 320px;
    }
};

@media screen and (max-width: 992px) {
    .aero{
        position: relative;
        max-width: none;
        width: 100%;
        top: 0;
    }
};
</style>