<template>
    <div class="w-100 p-0 d-flex justify-content-between">
        <img class="rounded d-inline-block w-25" style="max-height:115px" :src="curso.imageUrl" :alt='curso.nombre'>
        <div class="row w-75 p-0 mx-3 font-weight-bold d-flex flex-row justify-content-between">
            <div class="w-100 d-flex justify-content-between">
                <p class="d-inline-block p-0 m-0">{{curso.nombre}}</p>
                <p class="d-none p-0 m-0 d-md-inline-block">{{`S/ ${curso.precioActual}`}}</p>
            </div>
            <div class="w-100 d-flex justify-content-between align-items-end">
                <p class="d-inline-block p-0 m-0 text-violet" style="cursor:pointer" @click.prevent='deleteCarritoCursoAction(curso)' ><u>Eliminar</u></p>
                <p class="d-inline-block d-md-none p-0 m-0">{{`S/ ${curso.precioActual}`}}</p>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'CarritoCurso',
    props: {
        curso: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions(['deleteCarritoCursoAction'])
    }
}
</script>

<style>

</style>