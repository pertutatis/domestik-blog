import { getPostDetail } from '../../api/index'

export default {
  namespaced: true,

  state: {
    post: {},
  },

  mutations: {
    updatePost (state, newPost) {
      state.post = newPost
    }
  },


  actions: {
    fetchBlogPost ({ commit }, postId) {
      return getPostDetail(postId)
        .then(res => {
          commit('updatePost', res)
        })
        .catch(err => { throw err })
    }
  }
}
