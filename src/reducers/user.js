export const users = (state = [], action) => {
    switch (action.type) {
      case "ADD_USERS":
  
        return action.repos;

      default:
        return state;
    }
  };
  