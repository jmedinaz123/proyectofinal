<template>
  <div class="container p-0">
    <div class="row px-5">
        <div class="col-12 col-lg-7">
            <div class="row">
                <div class="col-12 text-left font-weight-bold mb-4">
                        Beneficios
                </div>
            </div>
            <div v-for='beneficio in beneficios' :key="beneficio.nombre" class="row">
                <div class="col-12 text-left font-weight-bold">
                    <CardBeneficio :beneficio='beneficio' />
                </div>
            </div> 
        </div>    
    </div> 
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CardBeneficio from './../components/CardBeneficio.vue';
export default {
    name: 'Beneficios',
    components: {
        CardBeneficio
    },
    methods: {
        ...mapActions(['getBeneficiosAction'])
    },
    computed: {
        ...mapState(['beneficios'])
    },
    created() {
        this.getBeneficiosAction();
    }
}
</script>