export const incrementCounter = () => ({
  type: 'INCREMENT'
})


export const gotUsers = (data) => (
  {
    type: 'GOTUSERS',
    data
  }
)

//thunk
export const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      debugger;
      gotUsers(response.data);

    }
    )

} 
