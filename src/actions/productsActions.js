import axios from 'axios';

export const LIST_PRODUCTS = 'LIST_PRODUCTS';

export function loadProducts () {
  return (dispatch) => {
    return axios.get("http://localhost:3004/products").then((response) => {
      dispatch(listProducts(response.data));
    });
  }
}

export function listProducts (data) {
  return {
    type: LIST_PRODUCTS,
    data
  }
}