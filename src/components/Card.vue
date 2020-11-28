<template>
  <div class="card-pq w-100 my-3 border-primary">
      <div class="img-container-pq w-100 h-50">
          <img class="img-pq"
            :src='curso.imageUrl'
            :alt='curso.nombre' />
            <ul class="list-container">
              <li v-if='!curso.aperturado' class="list-item bg-primary text-white">PROXIMAMENTE</li>
              <li v-else-if='curso.precioAnterior > 0' class="list-item bg-red text-white">OFERTA</li>
            </ul>
      </div>
      <div class="w-100 h-50 p-2 d-flex flex-column justify-content-between">
        <div class="h-50 d-flex flex-column justify-content-between">
          <p class="m-0 font-weight-bold">{{curso.nombre}}</p>
          <p v-if="!curso.aperturado" class="m-0 font-weight-bold text-secondary">Proximamente</p>
          <p v-else-if="curso.precioAnterior > 0" class="m-0 font-weight-bold text-red">S/{{curso.precioActual}}<strike class="ml-2 text-muted font-weight-normal title-6">S/{{curso.precioAnterior}}</strike></p>
          <p v-else class="m-0 font-weight-bold text-red">S/{{curso.precioActual}}</p>
        </div>
        <div class="h-50 mt-2">
          <button class="btn btn-block btn-primary rounded-0" @click='agregarCursoAction(curso)' :disabled='!curso.aperturado'>Añadir</button>
          <button class="btn btn-block btn-outline-secondary rounded-0" :disabled='!curso.aperturado'>Ver más</button>
        </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Card',
    props: {
        curso: Object
    },
    methods: {
      ...mapActions(['agregarCursoAction'])
    }
}
</script>

<style>
 .card-pq {
     height: 400px;
     border: 2px solid ;
 }
 .card-pq:hover {   
    box-shadow: 0px 0px 4px 2px silver;
 }
 .img-pq {
   width: 100%;
   height: 100%;
 }
 .img-container-pq {
   position: relative;
   padding: 0;
 }
 .list-container {
   position: absolute;
   z-index: 1;
   left: 0;
   top: 1.2rem;
   list-style: none;
   padding: 0;
 }
 .list-item {
   padding: 2px 5px;
 }
 .bg-red {
   background: red;
 }
 .text-red {
   color: red;
 }
 .title-6 {
   font-size: 13px;
 }
</style>