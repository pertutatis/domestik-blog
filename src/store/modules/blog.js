import { getPostDetail, getPostList } from '../../api/index'

export default {
  namespaced: true,

  state: {
    posts: [],
    post: {},
  },

  mutations: {
    updatePost (state, newPost) {
      state.post = newPost
    },
    updatePostList (state, newPostList) {
      state.posts = newPostList
    }
  },

  actions: {
    fetchBlogPost ({ commit }, postId) {
      return getPostDetail(postId)
        .then(res => {
          commit('updatePost', res)
        })
        .catch(err => { throw err })
    },
    fetchBlogList ({ commit }) {
      return getPostList()
        .then(res => {
          commit('updatePostList', res)
        })
        .catch(err => { throw err })
    }
  }
}
