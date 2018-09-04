const initialState = {

}

export default (state = [], action) => {
  switch (action.type) {

  case "NEWDATA":
    return { ...state }

  default:
    return state
  }
}
