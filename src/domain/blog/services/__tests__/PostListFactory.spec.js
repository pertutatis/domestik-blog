import PostListFactory from '../PostListFactory'
import Post from '../../model/post'
import { postListMock } from './__mocks__/PostFactory'

describe('List Factory', () => {
  it('returns a List instance', () => {
    const PostListInstance = PostListFactory.getPostList(postListMock)

    PostListInstance.map(PostInstance => {
      expect(PostInstance).toBeInstanceOf(Post)
    })
    expect(PostListInstance).toMatchSnapshot()
  })
})
