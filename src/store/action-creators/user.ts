import { TUserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<TUserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://api.ownvibe.app/product/explore?page=0&seed=444&startDate=2022-04-6&fbclid=IwAR12EmYP36DZkfS5cjpuArZ37dUrG2wmOeTZJ028YdvUYij43-itKEvLdOI"
      );
      const slicedArray = response.data.data.slice(0, 3);
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: slicedArray,
        });
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "error" });
      }, 500);
    }
  };
};
