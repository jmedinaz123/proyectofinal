<template>
  <div>
        <Navbar :backgroundTransparent="false" />
        <div class="container p-0 pt-5 mt-5">
            <div v-if="cursoDetalle === undefined" class="row px-5">
                <div class="col-12 h4 text-left mb-4">
                    <Back urlBack="/" :label="this.$route.params.nombre" />
                </div>
            </div>
            <div v-else class="row px-5">
                <div class="col-12 h4 text-left mb-4">
                    <Back urlBack="/" :label="this.$route.params.nombre" />
                </div>
                <div class="col-12 font-weight-bold h3 text-left mb-4">
                    {{cursoDetalle.introduccion}}
                </div>
                <div class="col-12 mb-5">
                    <img class="w-100" :src="cursoDetalle.gifUrl" :alt='cursoDetalle.nombre'>
                </div>

                <div class="col-12 font-weight-bold h3 text-left mb-3">
                    ¿En qué consiste el programa de <span class="text-lowercase">{{this.$route.params.nombre}}</span>?
                </div>
                <div class="col-12 text-left mb-3">
                    {{cursoDetalle.consiste}}
                </div>
                <div v-if='cursoDetalle.dirigido !== undefined' class="col-12 font-weight-bold text-left mb-3">
                    El programa de <span class="text-lowercase">{{this.$route.params.nombre}}</span> está dirigido a:
                </div>
                <div v-if='cursoDetalle.dirigido !== undefined' class="col-12 text-left mb-5">
                    {{cursoDetalle.dirigido}}
                </div>

                <div class="col-12 font-weight-bold h3 text-left mb-3">
                    Beneficios
                </div>
                <div class="col-12">
                    <div v-for='beneficio in beneficios' :key="beneficio.nombre" class="row">
                        <div class="col-12 text-left font-weight-bold">
                            <CardBeneficio :beneficio='beneficio' />
                        </div>
                    </div> 
                </div>

                <div class="col-12 font-weight-bold text-left mb-3">
                    Idat otorga:
                </div>
                <div class="col-12 text-left mb-5">
                    Tu certificado indicará que has cursado el programa de especialización en {{this.$route.params.nombre}} y estará a nombre de idat.
                </div>

                <div class="col-12 font-weight-bold h3 text-left mb-3">
                    Horarios
                </div>
                <div class="col-12 text-left mb-5">
                    <table class="table text-center">
                        <tr>
                            <td :rowspan="cursoDetalle.horarios.length + 1" class="align-middle bg-violet text-white">Inicio de Clases<br>{{cursoDetalle.inicioClases}}</td>
                            <td class="align-middle bg-dark-pachaqtec text-white">Frecuencia</td>
                            <td class="align-middle bg-dark-pachaqtec text-white">Horario</td>
                        </tr>
                         <tr v-for='item in cursoDetalle.horarios' :key="item.index">
                            <td class="align-middle table-active">{{item.frecuencia}}</td>
                            <td class="align-middle table-active">{{item.horario}}</td>
                        </tr>
                    </table>
                </div>

                <div class="col-12 text-left mb-5">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li v-for="(unidad, index) in cursoDetalle.unidades" :key="index" class="nav-item text-center" style="width: 33.33%">
                            <a :class="`nav-link rounded-0 text-parrafo text-white  ${index === tabSelected ? 'bg-dark' : 'bg-secondary'}`" 
                                :id="`${index}-tab`" 
                                data-toggle="tab" 
                                :href="`#${index}`" 
                                role="tab" 
                                :aria-controls="index" 
                                :aria-selected="index === tabSelected ? 'true' : 'false'"
                                @click="setTabSelected(index)">
                                Unidad {{unidad.nombre}}
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div v-for="(unidad, index) in cursoDetalle.unidades" 
                            :key="index" 
                            :class="`tab-pane fade ${index === tabSelected ? 'show active' : ''}`" 
                            :id="index" 
                            role="tabpanel" 
                            :aria-labelledby="`${index}-tab`">
                            <div class="row pt-3 mx-0 table-active">
                                <div v-for="(semana, index) in unidad.semanas" 
                                    :key="index"
                                    class="col-12 col-lg-6">
                                    <div class="row">
                                        <div class="col-12 font-weight-bold">
                                            {{semana.nombre}}: {{semana.descripcion}}
                                        </div>
                                        <div class="col-12">
                                            <ul class="pl-3">        
                                                <li v-for="(tema, index) in semana.temas" :key="index" class="mt-2">
                                                    {{tema}}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
</template>

<script>
import Navbar from './../components/Navbar.vue';
import Back from './../components/Back.vue';
import CardBeneficio from './../components/CardBeneficio.vue';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Programa',
    components: {
        Navbar,
        Back,
        CardBeneficio
    },
    data() {
        return {
            tabSelected: 0
        }
    },
    computed: {
        ...mapState(['cursoDetalle','beneficios'])
    },
    methods: {
        ...mapActions(['getCursoAction','getBeneficiosAction']),
        setTabSelected(tab) {
            this.tabSelected = tab;
        }
    },
    created() {
        this.getCursoAction(this.$route.params.nombre);
        this.getBeneficiosAction();
    }
}
</script>
<style>

</style>