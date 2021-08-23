import API from './endpoints'
import { HTTP } from './http'
import PostListFactory from '../domain/blog/services/PostListFactory'


export const getPostList = () => {
  const getPostUrl = API.blog.getPosts 

  return HTTP(getPostUrl)
    .then(result => {
      return PostListFactory.getPostList(result)
    })
    .catch(err => { throw err })

}
