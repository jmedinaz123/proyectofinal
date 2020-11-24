<template>
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
              <option>Desarrollo front-end</option>
              <option>Desarrollo back-end</option>
              <option>Desarrollo de experiencia de usuario</option>
              <option>Desarrollo de video juegos</option>
              <option>Desarrollo de aplicativos móviles</option>
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
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>

</style>
