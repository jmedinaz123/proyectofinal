import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    cursosSeleccionados: []
  },
  mutations: {
    agregarCursoMutation(state, payload) {
      if (state.cursosSeleccionados.filter(c => c.id === payload.id).length > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo añadir el programa porque ya ha sido añadido anteriormente',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        state.cursosSeleccionados.push(payload);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El programa se añadió correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
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
        apellidos: inscripcion.apellidos,
        email: inscripcion.email,
        telefonocelular: inscripcion.telefonocelular,
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
