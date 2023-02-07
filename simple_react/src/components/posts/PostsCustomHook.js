import { useEffect, useState } from 'react'
import axios from 'axios'
import useFetchPosts from '../../customHooks/useFetchPosts';


function PostsCustomHook() {
  const { data, isPending, error } = useFetchPosts('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="App">
      <p> Display Posts! </p>
      { error && <p> { error }</p>}
      { isPending && <p> { isPending }</p>}
      { data && console.log(data) }
    </div>
  );
}

export default PostsCustomHook;

