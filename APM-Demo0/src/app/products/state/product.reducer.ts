import { Product } from '../product';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

// feature selector
const getProductFeatureState =
  createFeatureSelector<ProductState>('products');

// state selector
export const getShowProductCode =
  createSelector(
    getProductFeatureState,
    state => state.showProductCode
  );

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };

    default:
      return state;
  }
}
