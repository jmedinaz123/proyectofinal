<template>
  <nav id='navbar' class='navbar fixed-top bg-transparent'>
    <div class="container p-0">
      <div class="row w-100 px-4 px-sm-5 py-2 m-0">
        <div class="col-12 d-flex justify-content-between p-0">

            <router-link to='/' class="d-inline-block">
              <img src='/assets/IconPachaqtec.svg' alt='logo' >
            </router-link>
            <div class="d-inline-block">
              <router-link to='/carrito' class="navbar-toggler pb-2 position-relative">
                <span class="text-white">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span v-if='cursosSeleccionados.length > 0' class="bg-violet text-white rounded-circle position-absolute px-2 py-1 mx-n2 mt-n1 font-weight-bold text-parrafo" >
                  {{cursosSeleccionados.length }}
                </span>
              </router-link>
              <button class="navbar-toggler toggler-example"  
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                  <span class="text-white"><i class="fas fa-bars"></i></span>
              </button>
            </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Navbar',
    methods: {
      ...mapActions(['getCursosSeleccionadosAction', 'setFunctionScrollAction'])
    },
    computed: {
      ...mapState(['cursosSeleccionados'])
    },
    created() {
      this.getCursosSeleccionadosAction();
      this.setFunctionScrollAction();
    }
}
</script>

<style>

</style>