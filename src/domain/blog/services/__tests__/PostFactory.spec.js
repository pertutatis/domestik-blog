import PostFactory from '../PostFactory'
import Post from '../../model/post'
import mockedPostFactory from './__mocks__/PostFactory'

describe('List Factory', () => {
  it('returns a List instance', () => {
    const PostInstance = PostFactory.getPost(mockedPostFactory)

    expect(PostInstance).toBeInstanceOf(Post)
    expect(PostInstance).toMatchSnapshot()
  })
})
