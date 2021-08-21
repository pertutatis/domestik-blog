import Post from '../model/post'
class PostFactory {
  getPost (apiData) {
    const postItem = {
      userId: apiData.userId,
      postId: apiData.id,
      date: "20-01-2021",
      title: apiData.title,
      body: apiData.body
    }

    return new Post(postItem)
  }
}
export default new PostFactory()
