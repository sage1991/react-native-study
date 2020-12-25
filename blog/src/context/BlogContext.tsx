import React, { Dispatch, FC, useReducer } from "react";
import { ActionBuilder, createDataContext } from "./createDataContext";
import { jsonServer } from "../api/JsonServer";


type Action = AddPostAction | DeletePostAction | UpdatePostAction | FetchPostAction;

export enum BlogContextAction {
  FETCH_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
}

interface FetchPostAction {
  type: BlogContextAction.FETCH_POST;
  payload: Post[];
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

const reducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {
    case BlogContextAction.FETCH_POST:
      return action.payload;
    case BlogContextAction.ADD_POST:
      return [ ...state, action.payload ];
    case BlogContextAction.DELETE_POST:
      return state.filter((post) => action.payload !== post.id);
    case BlogContextAction.UPDATE_POST:
      return state.map((post) => post.id === action.payload.id ? action.payload : post);
    default:
      return state;
  }
}

class BlogPostActionBuilder implements ActionBuilder<Action> {
  constructor(public dispatch: Dispatch<Action>) {}

  fetchPost = async () => {
    const response = await jsonServer.get<Post[]>("/post");
    this.dispatch({ type: BlogContextAction.FETCH_POST, payload: response.data });
  }

  addPost = async (title: string, content: string, callback?: () => void) => {
    const response = await jsonServer.post<Post>("/post", { title: title, content: content });
    // this.dispatch({ type: BlogContextAction.ADD_POST, payload: response.data });
    callback && callback();
  }

  deletePost = async (id: number) => {
    await jsonServer.delete<Post>(`/post/${id}`);
    this.dispatch({ type: BlogContextAction.DELETE_POST, payload: id });
  }

  updatePost = async (post: Post, callback?: () => void) => {
    const { id, ...rest } = post;
    await jsonServer.put<Post>(`/post/${id}`, { ...rest });
    this.dispatch({ type: BlogContextAction.UPDATE_POST, payload: post });
    callback && callback();
  }
}

export const [ BlogContext, BlogProvider ] = createDataContext(reducer, BlogPostActionBuilder, []);