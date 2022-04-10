import { IUserState, TUserAction, UserActionTypes } from "../../types/user";

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const feedReducer = (
  state = initialState,
  action: TUserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
