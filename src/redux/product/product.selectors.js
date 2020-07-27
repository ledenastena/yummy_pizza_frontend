import { createSelector } from 'reselect';

const selectProduct = state => state.product;

export const selectItems = createSelector(
  [ selectProduct ],
  product => product.items
);