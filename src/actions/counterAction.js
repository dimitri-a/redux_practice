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
// export const getUsers = dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => dispatch(receivedUsers(json)))
// }

export const getUsers = () => async dispatch => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(receivedUsers(responseBody));
  } catch (error) {
    console.error(error);
   
  }
};



// const fetchPosts = subreddit => dispatch => {
//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)))
// }