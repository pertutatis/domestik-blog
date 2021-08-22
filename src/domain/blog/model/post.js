export default class Post {
  constructor (postData) {
    this.userId = postData.userId
    this.postId = postData.postId
    this.date = postData.date
    this.title = postData.title
    this.lead = postData.lead
    this.body = postData.body
    this.featuredImage = postData.featuredImage
    this.images = postData.images
  }
}
