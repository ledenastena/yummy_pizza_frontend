import productActionTypes from './product.types';

export const updateProductState = (payload) => ({
  type: productActionTypes.UPDATE_PRODUCT_STATE,
  payload: payload
});