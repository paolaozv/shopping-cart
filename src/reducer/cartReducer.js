const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      console.log(action)
      let existingIndex = findProductIndex(state, action.payload.id);
      console.log(existingIndex)
      if (existingIndex !== -1) {
        state[existingIndex].quantity += 1;
        return state.concat([]);
      }
      return state.concat(action.payload);
      
    case 'UPDATE_QUANTITY':
      console.log(state, action.payload.id);
      let existingItemIndex = findProductIndex(state, action.payload.id);
      if (state[existingItemIndex].quantity === 0 && action.payload.quantity === -1) {
        break;
      }
      state[existingItemIndex].quantity += action.payload.quantity;
      return state.concat([]);
    
    case 'DELETE_PRODUCT':
      let indexToDel = findProductIndex(state, action.payload.id);
      return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
  }

  function findProductIndex(products, id) {
    return products.findIndex((product) => product.id === id)
  }

  return state;
}

export default cartReducer;