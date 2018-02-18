import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false,
    scrollHeight: 0
  },
  navbar: {
    opened: false,
    hidden: false
  },
  effect: {
    translate3d: true
  }
}

const getters = {
  language: state => state.language,
  scrollHeight: state => state.device.scrollHeight
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_NAVBAR] (state, status) {
    state.navbar.opened = typeof status.opened !== 'undefined' ? status.opened : state.navbar.opened
    state.navbar.hidden = typeof status.hidden !== 'undefined' ? status.hidden : state.navbar.hidden
  },

  [types.SCROLL_HEIGHT] (state, height) {
    state.device.scrollHeight = height
  }
}

const actions = {

  async toggleNavbar ({ commit }, status) {
    commit(types.TOGGLE_NAVBAR, status)
  },

  async toggleDevice ({ commit }, device) {
    commit(types.TOGGLE_DEVICE, device)
  },

  async setScrollHeight ({ commit }, height) {
    commit(types.SCROLL_HEIGHT, height)
  },

  expandMenu ({ commit },
    menuItem) {
    if (menuItem) {
      menuItem.expanded = menuItem.expanded || false
      commit(types.EXPAND_MENU, menuItem)
    }
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
