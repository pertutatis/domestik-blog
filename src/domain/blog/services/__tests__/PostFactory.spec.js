import PostFactory from '../PostFactory'
import Post from '../../model/post'
import mockedPostFactory from './__mocks__/PostFactory'

describe('Post Factory', () => {
  it('returns a post instance', () => {
    const PostInstance = PostFactory.getPost(mockedPostFactory)

    expect(PostInstance).toBeInstanceOf(Post)
    expect(PostInstance).toMatchSnapshot()
  })
})
