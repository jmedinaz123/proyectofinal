<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-7">
        <div class="row">
          <div v-for='curso in cursos' :key="curso.id" class="col-12 col-sm-6">
            <Card :curso='curso'></Card>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="">
          <div class="d-flex justify-content-end align-items-end">
            <div class="card m-1 border-primary shadow" style="max-width: 450px;">
              <div class="card-header bg-primary text-white">
                Postula y obtén un 10% de descuento en el programa
                </div>
              <div class="card-body pb-1">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control border-primary" id="nombre" placeholder="Nombres">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control border-primary" id="apellidos" placeholder="Apellidos">
                  </div>        
                  <div class="form-group">
                    <input type="email" class="form-control border-primary" id="email" placeholder="Correo electrónico">
                  </div>        
                  <div class="form-group">
                    <input type="text" class="form-control border-primary" id="celular" placeholder="Teléfono / celular">
                  </div>        
                  <div class="form-group">
                    <select class="form-control border-primary" id="curso">
                      <option selected>Cursos</option>
                      <option v-for='curso in cursos' :key="curso.id">{{curso.nombre}}</option>
                    </select>
                  </div>
                  <div class="form-group form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label text-left" for="defaultCheck1">
                      Acepto las <a href="#" target="_blank">politicas de privacidad</a> y los <a href="#" target="_blank">términos y condiciones</a>
                    </label>
                  </div>
                  <div class="form-group">
                    <button type='submit' class="btn btn-block btn-primary">Solicitar</button>
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
import Card from './../components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card
  },
  methods: {
    ...mapActions(['getCursosAction'])
  },
  computed: {
    ...mapState(['cursos'])
  },
  created() {
    let fecha = new Date();
    let fechaJson = JSON.stringify(fecha);
    console.log(fecha);
    console.log(fecha.toISOString());
    console.log(fechaJson);
    console.log(JSON.parse(fechaJson));
    this.getCursosAction();
  }
}
</script>

<style>

</style>
