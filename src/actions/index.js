export const addUsers = repos => ({
  type: "ADD_USERS",
  repos
});

export const getUsers = username => async dispatch => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addUsers(responseBody));
  } catch (error) {
    console.error(error);
  }
};
