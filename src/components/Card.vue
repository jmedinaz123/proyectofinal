<template>
  <div class="card-pq w-100 my-3 border-violet rounded-lg">
      <div class="img-container-pq w-100 h-50">
          <img class="img-pq rounded-top"
            :src='curso.imageUrl'
            :alt='curso.nombre' />
            <ul class="list-container">
              <li v-if='!curso.aperturado' class="list-item bg-violet text-white">PROXIMAMENTE</li>
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
          <button class="btn btn-block btn-violet" @click='agregarCarritoCursoAction(curso)' :disabled='!curso.aperturado'>Añadir</button>
          <button class="btn btn-block btn-outline-secondary " :disabled='!curso.aperturado' @click.prevent="verMas(curso.nombre)">Ver más</button>
        </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from './../router';
export default {
    name: 'Card',
    props: {
        curso: Object
    },
    methods: {
      ...mapActions(['agregarCarritoCursoAction']),
      verMas(nombre) {
        router.push(`/programa/${nombre}`);
      }
    }
}
</script>
