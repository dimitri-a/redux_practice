const initialState = {

}

export const cart = (state = { totalPrice: 0, items: [] }, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.id] }

    case 'GOTUSERS':
      console.log(action.data);
      debugger;

    default:
      return state
  }
}
