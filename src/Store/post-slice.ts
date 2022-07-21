import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  date: Date;
  reactions: {
    like: number;
    dislike: number;
    love: number;
    haha: number;
    wow: number;
  };
}
interface Posts {
  posts: Post[];
}

const initialState: Posts = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postFetch(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    postCreate(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    postUpdate(state, action: PayloadAction<Post>) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    postDelete(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    reactionUpdate(
      state: any,
      action: PayloadAction<{ id: number; reaction: string }>
    ) {
      const index = state.posts.findIndex(
        (post: any) => post.id === action.payload.id
      );

      const reaction = action.payload.reaction;
      if (index !== -1) {
        state.posts[index].reactions[reaction]++;
      }
    },
  },
});
export const { postFetch, postCreate, reactionUpdate } = postSlice.actions;
