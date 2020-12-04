<template>
  <div class="rounded table-active my-3 d-flex">
    <div class="card-image d-flex justify-content-center">
        <img class="w-100" :src='beneficio.imageUrl' :alt='beneficio.nombre' />
    </div>
    <div class="d-flex flex-column justify-content-center pl-0 pr-4 py-4">
      <p class="font-weight-bold my-2">{{beneficio.nombre}}</p>
      <p class="font-weight-normal my-2 text-justify d-none d-md-inline-block" style="font-size: 0.8rem">{{beneficio.descripcion}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardBeneficio',
    props: {
        beneficio:  {
            nombre: String,
            descripcion: String,
            imageUrl: String
        }
    }
}
</script>