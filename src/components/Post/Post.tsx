import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

type PostProps = {
  id: number;
  key: string;
  title: string;
  body: string;
}

const Post = memo(({ title, id, body }: PostProps) => {
  return <li className="post"><Link to={{ pathname: `/posts/${id}`, state: { body } }} > {title}</Link></li >;
})

export default Post;
