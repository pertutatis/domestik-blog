export default class Post {
  constructor (postData) {
    this.userId = postData.userId
    this.postId = postData.postId
    this.date = postData.date
    this.title = postData.title
    this.body = postData.body
  }
}
