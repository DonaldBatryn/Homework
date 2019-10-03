import React from "react";
import { Route } from "react-router-dom";
import PostIndex from "./posts/PostIndex";
import Register from "./Register";
import CreatePost from './posts/CreatePost';

const App = () => (
  <div>
    <h1>Hellloooo World!</h1>
    <Route path="/" component={PostIndex} />
    <Route path="/posts/new" component={CreatePost}/>
    <Route path="/" component={Register} />
  </div>
);

export default App;
