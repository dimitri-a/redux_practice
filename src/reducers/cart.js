const initialState = {

}

export const cart = (state = { totalPrice: 0, items: [] }, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.id] }

      // just testing does not make any sense
    case 'RECEIVEDUSERS':
      console.log(action.data);
      debugger;

    default:
      return state
  }
}
