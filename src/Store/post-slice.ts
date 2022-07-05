import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  date: Date;
}
interface Posts {
  posts: Post[];
}

const initialState: Posts = {
  posts: [],
};
const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postFetch(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
      // state.posts.forEach((post) => {
      //   post.date = new Date(randomDate(new Date(2012, 0, 1), new Date()));
      // });
    },
    //     removeSingleUser(state, action) {
    //       state.blog = state.blog.filter((blog) => blog.userID !== action.payload);
    //     },
  },
});
export const { postFetch } = postSlice.actions;
