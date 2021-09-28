import postsReducer, { PostsState } from './postsSlice';

describe('posts reducer', () => {
  const initialState: PostsState = {
    posts: [],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
      posts: [],
      status: 'idle',
    });
  });
});
