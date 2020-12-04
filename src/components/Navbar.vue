<template>
  <nav id='navbar' :class='this.$route.name === "Home" ? "navbar fixed-top bg-transparent" : "navbar fixed-top bg-dark-pachaqtec" '>
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
                <span v-if='carrito.cursos.length > 0' class="bg-violet text-white rounded-circle position-absolute px-2 py-1 mx-n2 mt-n1 font-weight-bold text-parrafo" >
                  {{carrito.cursos.length }}
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
    props: {
      backgroundTransparent: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      ...mapActions(['getCarritoAction'])
    },
    computed: {
      ...mapState(['carrito'])
    },
    created() {
      this.getCarritoAction();
      if (this.backgroundTransparent) {
        window.onscroll = function() {
          scrollFunction();
        };
      }
      else {
        window.onscroll = null;
      }

      function scrollFunction() {
        let navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
          navbar.classList.remove('bg-transparent');
          navbar.classList.add('bg-dark-pachaqtec');
        } else {
          navbar.classList.remove('bg-dark-pachaqtec');
          navbar.classList.add('bg-transparent');
        }
      }
    }
}
</script>

<style>

</style>