import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';

const Posts = lazy(() => import('./features/posts/Posts'))
const PostDetails = lazy(() => import('./features/postDetails/PostDetails'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={Posts} />
          <Route path="/posts/:id" exact component={PostDetails} />
        </Suspense>
      </BrowserRouter>
    </div >
  );
}

export default App;
