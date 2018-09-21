const initialState = {

}

export const cart = (state = { totalPrice: 0, items: [] }, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.id] }

      // just testing does not make any sense
    case 'RECEIVEDUSERS':
      console.log('RECEIVEDUSERS called in reducer :), action.data=',action.data);
      
    default:
      return state
  }
}
