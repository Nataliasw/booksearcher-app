import { BookActionType } from "../action-types";
import { Action } from "../actions";

interface ListState {
  loading: boolean;
  data: { title: string; author: string }[];
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const bookListReducer = (
  state: ListState = initialState,
  action: Action
): ListState => {
  switch (action.type) {
    case BookActionType.SEARCHING_LIST:
      return { loading: true, data: [], error: null };
    case BookActionType.SEARCHING_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,

        error: null,
      };
    case BookActionType.SEARCHING_LIST_FAILED:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default bookListReducer;
