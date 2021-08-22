import Post from '../model/post'
class PostFactory {
  getPost (apiData) {
    const postItem = {
      userId: apiData.userId,
      postId: apiData.id,
      date: apiData.date,
      title: apiData.title,
      lead: apiData.lead,
      body: apiData.body,
      featuredImage: apiData.featuredImage,
      images: apiData.images
    }

    return new Post(postItem)
  }
}
export default new PostFactory()
