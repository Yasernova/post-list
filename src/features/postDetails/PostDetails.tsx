import { memo, useCallback } from 'react';
import _get from 'lodash/get';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { deletePost } from '../posts/postsSlice';
import { useAppDispatch } from '../../app/hooks';

const PostDetails = memo(() => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const dispatch = useAppDispatch();
  const deletePostById = useCallback(() => {
    history.replace('/');
    dispatch(deletePost(+_get(params, 'id')));
  }, [dispatch, params, history]
  )
  return (
    <div>
      <button onClick={deletePostById}>delete</button>
      <p className="postDetails">{_get(location, 'state.body', '')}</p>;
    </div>
  );
})

export default PostDetails;
