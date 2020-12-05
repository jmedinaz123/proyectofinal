<template>
    <div>
        <div v-for="cupon in carrito.descuentos" :key="cupon.id" class="row mb-4 text-danger h5 font-weight-bold  d-flex justify-content-between">
            <span>{{cupon.codigo}}</span>
            <i class="fas fa-trash text-dark" style="cursor:pointer" title="Quitar descuento" @click.prevent="deleteCarritoDescuentoAction(cupon.id)"></i>
            <span>S/{{cupon.descuento * -1}}</span>
        </div>
    </div> 
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Descuento',
    computed: {
        ...mapState(['carrito'])
    },
    methods: {
        ...mapActions(['deleteCarritoDescuentoAction'])
    }
}
</script>

<style>

</style>