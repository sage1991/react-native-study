import React, { Dispatch, FC, useReducer } from "react";
import { ActionBuilder, createDataContext } from "./createDataContext";


type Action = AddPostAction | DeletePostAction | UpdatePostAction;

export enum BlogContextAction {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
}

interface AddPostAction {
  type: BlogContextAction.ADD_POST;
  payload: Post;
}

interface DeletePostAction {
  type: BlogContextAction.DELETE_POST;
  payload: number;
}

interface UpdatePostAction {
  type: BlogContextAction.UPDATE_POST;
  payload: Post;
}


export interface Post {
  id: number;
  title: string;
  content: string;
}

const reducer = (state: Post[], action: Action) => {
  switch (action.type) {
    case BlogContextAction.ADD_POST:
      return [ ...state, action.payload ];
    case BlogContextAction.DELETE_POST:
      return state.filter((post) => action.payload !== post.id);
    case BlogContextAction.UPDATE_POST:
      const nextState: Post[] = [];
      state.forEach((post) => {
        nextState.push(post.id === action.payload.id ? action.payload : post);
      });
      return nextState;
    default:
      return state;
  }
}

class BlogPostActionBuilder implements ActionBuilder<Action> {
  constructor(public dispatch: Dispatch<Action>) {}

  addPost = (post: Post, callback?: () => void) => {
    this.dispatch({ type: BlogContextAction.ADD_POST, payload: post });
    callback && callback();
  }

  deletePost = (id: number) => this.dispatch({ type: BlogContextAction.DELETE_POST, payload: id });

  updatePost = (post: Post, callback?: () => void) => {
    this.dispatch({ type: BlogContextAction.UPDATE_POST, payload: post });
  }
}


export const [ BlogContext, BlogProvider ] = createDataContext(reducer, [ { id: Date.now(), title: "Test", content: "Test Content" } ], BlogPostActionBuilder);