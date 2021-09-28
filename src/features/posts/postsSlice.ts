import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPosts } from './postsAPI';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsState {
  posts: Array<Post>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
};

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    }
  },
  extraReducers: {
    [String(fetchPostsAsync.pending)]: (state) => {
      state.status = 'loading';
    },
    [String(fetchPostsAsync.fulfilled)]: (state, action) => {
      state.status = 'idle';
      state.posts = action.payload;
    },
    [String(fetchPostsAsync.rejected)]: (state) => {
      state.status = 'failed';
    },
  }
});

export const { setPosts, deletePost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.postsReducer.posts
export const selectStatus = (state: RootState) => state.postsReducer.status



export default postsSlice.reducer;
