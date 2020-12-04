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
          <button class="btn btn-block btn-primary rounded-0" @click='agregarCarritoCursoAction(curso)' :disabled='!curso.aperturado'>Añadir</button>
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
      ...mapActions(['agregarCarritoCursoAction'])
    }
}
</script>
