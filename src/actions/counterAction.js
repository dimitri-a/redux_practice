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
export const getUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(receivedUsers(json)))
}