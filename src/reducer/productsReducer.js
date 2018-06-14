const initState = {
  isFetching:false,
  data: []
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LIST_PRODUCTS':
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        filter: action.filter

      }
  }
  return state;
}

export default productReducer;