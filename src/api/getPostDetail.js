import API from './endpoints'
import { HTTP } from './http'
import PostFactory from '../domain/blog/services/PostFactory'


export const getPostDetail = (postId) => {
  const getPostUrl = API.blog.getPost.replace('${id}', postId) 

  // return HTTP('https://61217baaf5849d0017fb4246.mockapi.io' + getPostUrl) // not working :(
  return HTTP(getPostUrl)
    .then(result => {
      return PostFactory.getPost(result)
    })
    .catch(err => { throw err })

}
