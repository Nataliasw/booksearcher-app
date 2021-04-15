import axios from "axios";
import { Dispatch } from "redux";
import { BookActionType } from "../action-types";
import { Action } from "../actions";

export const searchBookRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: BookActionType.SEARCHING_LIST,
    });
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=" +
          term +
          "&api-key=UDK7Ljrw6Vdjn6ydzNSQni66r4fp2UPP"
      );

      const names = data.results.map((result: any) => {
        return { title: result.title, author: result.author };
      });

      dispatch({
        type: BookActionType.SEARCHING_LIST_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: BookActionType.SEARCHING_LIST_FAILED,
        payload: err.message,
      });
    }
  };
};
