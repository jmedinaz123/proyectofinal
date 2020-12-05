import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beneficios: [],
    cursos: [],
    carrito: {
      cursos: [],
      descuentos: [],
      totalCursos: 0,
      totalDescuestos: 0,
      totalGeneral: 0
    },
    cursoDetalle: undefined
  },
  mutations: {
    agregarCarritoCursoMutation(state, payload) {
      if (state.carrito.cursos.filter(c => c.id === payload.id).length > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo añadir el programa porque ya ha sido añadido anteriormente',
          showConfirmButton: false,
          timer: 2000
        })
      }
      else {
        state.carrito.cursos.push(payload);
        state.carrito.totalCursos = state.carrito.cursos.reduce((a, b) => a + b.precioActual, 0);
        state.carrito.totalGeneral = state.carrito.totalCursos - state.carrito.totalDescuentos;
        window.localStorage.setItem('carrito', JSON.stringify(state.carrito));
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El programa se añadió correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    agregarCarritoDescuentoMutation(state, payload) {
      if (state.carrito.descuentos.filter(c => c.id === payload.id).length > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo añadir el código de descuento porque ya ha sido añadido anteriormente',
          showConfirmButton: false,
          timer: 2000
        })
      }
      else {
        state.carrito.descuentos.push(payload);
        state.carrito.totalDescuentos = state.carrito.descuentos.reduce((a, b) => a + b.descuento, 0);
        state.carrito.totalGeneral = state.carrito.totalCursos - state.carrito.totalDescuentos;
        window.localStorage.setItem('carrito', JSON.stringify(state.carrito));
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El código de descuento se añadió correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    deleteCarritoCursoMutation(state, payload) {
      state.carrito.cursos = state.carrito.cursos.filter(c => c.id !== payload);
      state.carrito.totalCursos = state.carrito.cursos.reduce((a, b) => a + b.precioActual, 0);
      state.carrito.totalGeneral = state.carrito.totalCursos - state.carrito.totalDescuentos;
      window.localStorage.setItem('carrito', JSON.stringify(state.carrito));

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El programa se eliminó correctamente',
        showConfirmButton: false,
        timer: 2000
      })
    },
    deleteCarritoDescuentoMutation(state, payload) {
      state.carrito.descuentos = state.carrito.descuentos.filter(d => d.id !== payload);
      console.log(state.carrito.descuentos);
      state.carrito.totalDescuentos = state.carrito.descuentos.reduce((a, b) => a + b.descuento, 0);
      state.carrito.totalGeneral = state.carrito.totalCursos - state.carrito.totalDescuentos;
      window.localStorage.setItem('carrito', JSON.stringify(state.carrito));

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El descuento se quitó correctamente',
        showConfirmButton: false,
        timer: 2000
      })
    },
    getBeneficiosMutation(state, payload){
      state.beneficios = payload;
    },
    getCursoMutation(state, payload) {
      state.cursoDetalle = payload;
    },
    getCursosMutation(state, payload) {
      state.cursos = payload;
    },
    getCarritoMutation(state) {
      const carrito = window.localStorage.getItem('carrito');
      if (carrito !== null) {
        state.carrito = JSON.parse(carrito);
      }
    }
  },
  actions: {
    agregarCarritoCursoAction({commit}, curso) {
      commit('agregarCarritoCursoMutation', curso);
    },
    agregarCarritoDescuentoAction({commit}, codigo) {
      db.collection('cuponera').where("codigo", "==", codigo).get()
      .then(res => {
        let descuento;
        res.forEach(doc => {
          descuento = doc.data();
          descuento.id = doc.id;
        })
        if (descuento)
        {
          commit('agregarCarritoDescuentoMutation', descuento);
        }
        else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No se encontró ningún descuento con el código ingresado',
            showConfirmButton: false,
            timer: 2000
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
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
    deleteCarritoCursoAction({commit}, curso) {
      Swal.fire({
        title: '¿Estas seguro de eliminar el programa?',
        text: curso.nombre,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#5640ff',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
              commit('deleteCarritoCursoMutation', curso.id);
            }
        })
    },
    deleteCarritoDescuentoAction({commit}, descuento_id) {
      commit('deleteCarritoDescuentoMutation', descuento_id);
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
    getCursoAction({commit}, curso_nombre) {
      commit('getCursoMutation', undefined);
      db.collection('cursos').where("nombre", "==", curso_nombre).get()
      .then(res => {
        let curso_id;
        res.forEach(doc => {
          curso_id = doc.id;
        })

        if (curso_id)
        {
          db.collection('cursoDetalle').where("curso_id", "==", curso_id).get()
          .then(res => {
            let cursoDetalle;
            res.forEach(doc => {
              cursoDetalle = doc.data();
              cursoDetalle.id = doc.id;
              
              commit('getCursoMutation', cursoDetalle);
            })
          })
        }
      })
      .catch(error => {
        console.log(error);
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
    },
    getCarritoAction({commit}) {
      commit('getCarritoMutation');
    }
  },
  modules: {
  }
})
