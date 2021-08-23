import Post from '../model/post'
class PostListFactory {
  getPostList (postList) {
    return postList.map(post => {
      const postItem = {
        userId: post.userId,
        postId: post.id,
        date: post.date,
        title: post.title,
        lead: post.lead,
        body: post.body,
        featuredImage: post.featuredImage,
        images: post.images
      }
      
      return new Post(postItem)
    })

  }
}
export default new PostListFactory()
