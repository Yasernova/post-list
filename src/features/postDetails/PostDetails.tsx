import { memo, useCallback } from 'react';
import _get from 'lodash/get';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { deletePost } from '../posts/postsSlice';
import { useAppDispatch } from '../../app/hooks';
import './PostDetails.css';

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
    <div className="post-details">
      <p>{_get(location, 'state.body', '')}</p>
      <button className="delete" onClick={deletePostById}>delete</button>
    </div>
  );
})

export default PostDetails;
