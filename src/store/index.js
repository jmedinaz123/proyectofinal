import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beneficios: [],
    cursos: [],
    cursosSeleccionados: [],
  },
  mutations: {
    agregarCursoMutation(state, payload) {
      if (state.cursosSeleccionados.filter(c => c.id === payload.id).length > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo añadir el programa porque ya ha sido añadido anteriormente',
          showConfirmButton: false,
          timer: 2000
        })
      }
      else {
        state.cursosSeleccionados.push(payload);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El programa se añadió correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    getBeneficiosMutation(state, payload){
      state.beneficios = payload;
    },
    getCursosMutation(state, payload) {
      state.cursos = payload;
    }
  },
  actions: {
    agregarCursoAction({commit}, curso) {
      commit('agregarCursoMutation', curso);
    },
    createInscripcionAction({commit}, inscripcion) {
      db.collection('inscripciones').add({
        nombres: inscripcion.nombres,
        email: inscripcion.email,
        celular: inscripcion.celular,
        curso_id: inscripcion.curso_id
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: '¡Felicitaciones!',
          text: 'Su inscripción se registró correctamente'
        })
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Lo sentimos, se produjo un error'
        })
      });
    },
    getBeneficiosAction({commit}) {
      const beneficios = [];
      db.collection('Beneficios').orderBy('nombre').get()
      .then(res => {
        res.forEach(doc => {
          beneficios.push(doc.data());
          commit('getBeneficiosMutation', beneficios);
        })
      })
    },
    getCursosAction({commit}) {
      const cursos = [];
      db.collection('cursos').orderBy('nombre').get()
      .then(res => {
        res.forEach(doc => {
          let curso = doc.data();
          curso.id = doc.id;
          cursos.push(curso);

          commit('getCursosMutation', cursos);
        })
      })
    }
  },
  modules: {
  }
})
