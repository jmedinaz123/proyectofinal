<template>
  <div class="card-pq w-100 my-3 border-primary bg-white">
      <div class="w-100 h-50">
          <img class="img-fluid"
            src=''
            alt="" />
      </div>
      <div class="w-100 h-50 p-2 d-flex flex-column justify-content-between">
        <p class="m-0 font-weight-bold">{{curso.nombre}}</p>
        <p v-if="curso.precioOferta > 0" class="m-0 font-weight-bold text-danger">S/{{curso.precioOferta}}<strike class="ml-2 text-muted">S/{{curso.precio}}</strike></p>
        <p v-else class="m-0 font-weight-bold text-danger">S/{{curso.precio}}</p>
        <button class="btn btn-block btn-primary">Añadir</button>
      </div>
   </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        curso: Object
    },
    methods: {
      getImgUrl(imageUrl) {
        var images = require(imageUrl);
        console.log(images);
        return imageUrl;
      }
    }
}
</script>

<style>
 .card-pq {
     height: 300px;
     border: 2px solid ;
 }
</style>