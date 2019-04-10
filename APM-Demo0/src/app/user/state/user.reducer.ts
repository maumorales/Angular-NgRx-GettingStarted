import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

const getUserFeature =
  createFeatureSelector<UserState>('users');

export const getMaskUserName =
  createSelector(
    getUserFeature,
    state => state.maskUserName
  );

export function reducer(state = initialState, action): UserState {
  switch (action.type) {
    case 'MASK_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
