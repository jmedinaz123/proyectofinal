<template>
    <div>
        <Navbar />
        <div class="container p-0 pt-5 mt-5">
            <div v-for='curso in cursosSeleccionados' :key="curso.id" class="row px-5">
                <div class="col-12 col-lg-7">
                    {{curso.nombre}}
                </div> 
            </div>
        </div>     
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from './../components/Navbar.vue';
export default {
    name: 'Carrito',
    components: {
        Navbar
    },
    computed: {
        ...mapState(['cursosSeleccionados'])
    }
}
</script>

<style>

</style>