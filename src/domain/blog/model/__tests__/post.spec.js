import Post from '../post'
import mockedPost from './__mocks__/post'

describe('Post Model', () => {
  it('The model maintains the structure', () => {
    const post = new Post(mockedPost)

    expect(post).toMatchSnapshot()
  })
})
