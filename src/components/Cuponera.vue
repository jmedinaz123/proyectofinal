<template>
    <div class="position-relative w-100">
        <input type="text" v-model="codigo" class="form-control text-uppercase pr-4" placeholder="Agrega un código de dscto">
        <button class='btn m-0  position-absolute' style="top:0; right:0" @click.prevent="agregarDescuento()">
            <img src='/assets/send.svg' alt='send'  >
        </button>
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