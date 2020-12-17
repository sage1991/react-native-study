import React, { Dispatch, FC, useReducer } from "react";
import { ActionBuilder, createDataContext } from "./createDataContext";

type Action = AddPostAction | DeletePostAction;

export enum BlogContextAction {
  ADD_POST,
  DELETE_POST,
}

interface AddPostAction {
  type: BlogContextAction.ADD_POST;
  payload: any;
}

interface DeletePostAction {
  type: BlogContextAction.DELETE_POST;
  payload: number;
}

const reducer = (state: any[], action: Action) => {
  switch (action.type) {
    case BlogContextAction.ADD_POST:
      return [ ...state, action.payload ];
    case BlogContextAction.DELETE_POST:
      return state.filter((post) => action.payload !== post.id);
    default:
      return state;
  }
}

class BlogPostActionBuilder implements ActionBuilder<Action> {
  constructor(public dispatch: Dispatch<Action>) {}

  addPost = (post: any) => this.dispatch({ type: BlogContextAction.ADD_POST, payload: post });
  deletePost = (id: number) => this.dispatch({ type: BlogContextAction.DELETE_POST, payload: id });
}


export const [ BlogContext, BlogProvider ] = createDataContext(reducer, [], BlogPostActionBuilder);