export const incrementCounter = () => ({
  type: 'INCREMENT'
})


export const receivedUsers = (data) => (
  {
    type: 'RECEIVEDUSERS',
    data
  }
)

//thunk
export const getUsers = dispatch => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(receivedUsers(json)))
}


// const fetchPosts = subreddit => dispatch => {
//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)))
// }