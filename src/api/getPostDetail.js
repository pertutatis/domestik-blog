// import API from './endpoints'
// import { HTTP } from '@jeff-labs/http'
import PostFactory from '../domain/blog/services/PostFactory'

const response = {
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  };

export const getPostDetail = () => {
  // const getPostUrl = API.blog.getPost.replace('{id}', postId) 

  // return HTTP.get(getPostUrl)
  //   .then(res => PostFactory.getListItem(res))
  //   .catch(err => { throw err })

  return Promise.resolve(PostFactory.getPost(response))
}
