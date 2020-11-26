import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: []
  },
  mutations: {
    getCursosMutation(state, payload) {
      state.cursos = payload;
    }
  },
  actions: {
    getCursosAction({commit}) {
      fetch('http://localhost:4000/cursos')
      .then(res => {
        return res.json();
      }).then(data => {
        commit('getCursosMutation', data);
      })
    }
  },
  modules: {
  }
})
