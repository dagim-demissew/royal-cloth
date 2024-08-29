import { userActionTypes } from "./user-types";
const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
// all reducers get the action fired even if the action doesn't really concern the reducer

export default userReducer;
