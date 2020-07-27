import productActionTypes from './product.types';
import { retrieveItems } from './product.utils';

const INITIAL_STATE = {
  items: []
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch( action.type ) {
    case ( productActionTypes.UPDATE_PRODUCT_STATE ): {
      return {
        ...state,
        items: retrieveItems(action.payload)
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default productReducer;