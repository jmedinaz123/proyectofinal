<template>
  <div class="card-pq w-100 my-3 border-primary">
      <div class="w-100 h-50">
          <img v-if='curso.imageUrl.length > 0' class="img-fluid"
            :src='curso.imageUrl' 
            alt="" />
          <img v-else class="img-fluid"
            src='./../assets/Front-End.png' 
            alt="" />
      </div>
      <div class="w-100 h-50 p-2 d-flex flex-column justify-content-between">
        <p class="m-0 font-weight-bold">{{curso.nombre}}</p>
        <p v-if="curso.precioOferta > 0" class="m-0 font-weight-bold text-primary">{{curso.precioOferta}}<strike class="ml-2 text-secondary">{{curso.precio}}</strike></p>
        <p v-else class="m-0 font-weight-bold text-primary">{{curso.precio}}</p>
        <button class="btn btn-block btn-primary">Lo quiero</button>
      </div>
   </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        curso: Object
    }
}
</script>

<style>
 .card-pq {
     height: 300px;
     border: 2px solid ;
 }
</style>