import { ISearchState, SearchActionTypes } from "../../types/user";

const initialState: ISearchState = {
  query: "",
  loading: false,
  productsCount: 0,
  users: [],
};

export const searchReducer = (
  state = initialState,
  action: any
): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH:
      return { loading: true };
    case SearchActionTypes.FETCH_SEARCH_SUCCESS:
      const {
        data: { productsCount, users },
        query,
      } = action.payload;
      return {
        productsCount,
        users,
        loading: false,
        query,
      };
    case SearchActionTypes.FETCH_SEARCH_ERROR:
      return { loading: false };
    default:
      return state;
  }
};
