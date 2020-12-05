<template>
    <div class="position-relative w-100">
        <input type="text" v-model="codigo" class="form-control text-uppercase pr-4" placeholder="Agrega un código de descuento">
        <img src='/assets/send.svg' alt='send' class="position-absolute"  style="top:11px; right:11px; cursor:pointer" @click.prevent="agregarDescuento()">
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Cuponera',
    data() {
        return { codigo: '' }
    },
    methods: {
        ...mapActions(['agregarCarritoDescuentoAction']),
        agregarDescuento() {
            if (this.codigo !== undefined && this.codigo !== '') {
                this.agregarCarritoDescuentoAction(this.codigo);
                this.codigo = '';
            }
        }
    }
}
</script>

<style>

</style>