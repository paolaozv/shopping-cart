export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const CART_PRODUCTS = 'CART_PRODUCTS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function cartProducts (data) {
  return {
    type: CART_PRODUCTS,
    data
  }
}

export function addProduct({ id, product_name, product_color, product_price, quantity = 1 }) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: [{ id, product_name, product_color, product_price, quantity }]
  }
}

export function updateQuantity({ id, quantity }) {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity }
  }
}

export function deleteProduct({ id }) {
  return {
    type: DELETE_PRODUCT,
    payload: { id }
  }
}