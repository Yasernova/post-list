import React, { useCallback, useEffect } from 'react';
import _shuffle from 'lodash/shuffle'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPostsAsync, selectPosts, selectStatus, setPosts,
} from './postsSlice';
import Loader from '../../components/Loader/Loader';
import Post from '../../components/Post/Post';

import styles from './Posts.module.css';

//

export default function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();
  const getPosts = useCallback(() => dispatch(fetchPostsAsync()), [dispatch]);

  const shufflePosts = useCallback(() => {
    const shuffled = _shuffle(posts);
    dispatch(setPosts(shuffled));
  }, [posts, dispatch]);

  useEffect(() => {
    if (!posts.length) {
      getPosts()
    }
  }, [getPosts, posts]);

  if (status === 'loading') return <Loader />
  if (status === 'failed') return <button type="button" onClick={getPosts}>Retry</button>
  return (
    <div>
      <button onClick={shufflePosts} type="button" disabled={!posts.length}>shuffle</button>
      <ul className={styles.posts}>
        {posts.map(({ id, title, body }) => <Post key={String(id)} {...{ title, id, body }} />)}
      </ul>
    </div>
  );
}
