<template>
    <div class="banner">
        <div class="container p-0">
            <div class="row px-5 text-left text-white">
                <div class="col-12">
                    <div class="row">
                        <div class='col-12'>
                            <Navbar />
                        </div>
                    </div>
                    <div class="row">
                        <div class='col-12 col-sm-8'>
                            <p class="h1 font-weight-bold my-5 pt-5">¡Explota todo tu potencial tecnológico!</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class='col-12 col-sm-6'>
                            <p class="h5 font-weight-bold">Con nuestros programas de especialización</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: 'Header',
    components: {
        Navbar
    },
}
</script>

<style>    
.banner {
  height: 25rem;
  background-image: url('/assets/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>