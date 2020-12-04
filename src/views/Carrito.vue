<template>
    <div class="table-active">
        <Navbar :backgroundTransparent="false" />
        <div class="container p-0 pt-5 mt-5">
            <div class="row px-5">
                <div class="col-12 col-lg-7">
                    <div v-for='curso in carrito.cursos' :key="curso.id" class="row py-0 px-3 my-3">
                        <CarritoCurso :curso='curso' />
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="bg-white p-5 my-0 my-lg-3">
                        <div class="row mb-4 text-violet h5 font-weight-bold  d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>S/{{carrito.totalCursos}}</span>
                        </div>
                        
                        <div v-for="cupon in carrito.descuentos" :key="cupon.id" class="row mb-4 text-danger h5 font-weight-bold  d-flex justify-content-between">
                            <span>{{cupon.codigo}}</span>
                            <span>S/{{cupon.descuento * -1}}</span>
                        </div>
                        <div class="row mb-4 text-violet d-flex justify-content-between">
                            <Cuponera />
                        </div>
                        <div class="row ">
                            <button class="btn btn-block p-2 bg-violet text-white rounded-lg">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from './../components/Navbar.vue';
import CarritoCurso from './../components/CarritoCurso.vue';
import Cuponera from './../components/Cuponera.vue';
export default {
    name: 'Carrito',
    components: {
        Navbar,
        CarritoCurso,
        Cuponera
    },
    computed: {
        ...mapState(['carrito'])
    },
}
</script>

<style>

</style>