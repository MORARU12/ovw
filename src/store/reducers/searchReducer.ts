import {
  ISearchState,
  SearchActionTypes,
  TItemsAction,
  ItemsActionTypes,
} from "../../types/user";

const initialState: ISearchState = {
  //type: "",
  //search: "",
  //productList: [],
  //page: 0,
  //loadedAll: false,
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
      // when searching, action payload is query
      return { productList: [], query: action.payload, loading: true };
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
      return { productList: [], loading: false };
    default:
      return state;
  }
};
