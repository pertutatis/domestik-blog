import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import blog from '../blog'

jest.mock('../../../api/http')

const mockedPost = {
  "userId": 1,
  "id": 2,
  "date": "01-02-2021",
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
};

const mockedPostList = [{
  "userId": 1,
  "id": 2,
  "date": "01-02-2021",
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
},{
  "userId": 1,
  "id": 2,
  "date": "01-02-2021",
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
}];

describe('List module', () => {
  let store

  beforeEach(() => {
    createLocalVue().use(Vuex)

    const storeConfig = { modules: { blog: {...blog} } }
    store = new Vuex.Store(storeConfig)
  })

  it('updates the post state when "updatePost" is commited', () => {
    store.commit('blog/updatePost', mockedPost)

    expect(store.state.blog.post).toBe(mockedPost)
  })

  it('fetchs and updates the post state when "fetchBlogPost" is dispatched', async () => {
    jest.spyOn(store, 'commit')
    await store.dispatch('blog/fetchBlogPost')

    expect(store.commit).toHaveBeenCalledWith('blog/updatePost', expect.any(Object), undefined)
  })

  it('updates the post list state when "updatePostList" is commited', () => {
    store.commit('blog/updatePostList', mockedPostList)

    expect(store.state.blog.posts).toBe(mockedPostList)
  })

  it('fetchs and updates the post list state when "fetchBlogPost" is dispatched', async () => {
    jest.spyOn(store, 'commit')
    await store.dispatch('blog/fetchBlogList')

    expect(store.commit).toHaveBeenCalledWith('blog/updatePostList', expect.any(Array), undefined)
  })
})
