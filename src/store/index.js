import Vue          from 'vue'
import Vuex         from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations    from './mutation-types'

import modules          from './modules/'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules,
  state: {
    user: {},
    toggle: false
  },
  mutations,
  actions,
  getters
})

export default store
