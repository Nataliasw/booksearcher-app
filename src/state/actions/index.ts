import { BookActionType } from "../action-types";

interface SearchingListAction {
  type: BookActionType.SEARCHING_LIST;
}

interface SearchingListSuccessAction {
  type: BookActionType.SEARCHING_LIST_SUCCESS;
  payload: string[];
}

interface SearchingListFailedAction {
  type: BookActionType.SEARCHING_LIST_FAILED;
  payload: string;
}

export type Action =
  | SearchingListAction
  | SearchingListSuccessAction
  | SearchingListFailedAction;
