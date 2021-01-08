import { createClient } from '../../plugins/contentful'
const client = createClient()

export const state = {
  navigationMenu: null,
}

export const mutations = {
  setMenuItems(state, data) {
    state.navigationMenu = data
  },
}

const getPages = (commit) => {
  client
    .getEntries({
      content_type: 'globalNavigation',
      order: '-sys.createdAt',
    })
    .then((page) => {
      if (page) {
        commit('setMenuItems', page.items[0])
      }
    })
}

export const actions = {
  nuxtServerInit({ commit }) {
    getPages(commit)
  },
  getPageItems({ commit }) {
    getPages(commit)
  },
}

export default {
  state,
  mutations,
  actions,
}
