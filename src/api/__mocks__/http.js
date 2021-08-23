const mockedPostList = [{
  "userId": 1,
  "id": 2,
  "date": "01-02-2021",
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
},{
  "userId": 1,
  "id": 2,
  "date": "01-02-2021",
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
}];

export const HTTP = (url) => {
  if (url == '/posts') {
    return Promise.resolve(mockedPostList)
  }
  return Promise.resolve(url)
}
