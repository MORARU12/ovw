// import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { feedReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: feedReducer,
  // todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
