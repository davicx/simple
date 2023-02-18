import React, { useState } from 'react';
import { useQuery } from "react-query";
import axios from 'axios'
import Post from '../../reactQuery/Post';


const api = axios.create({
  
})

async function getPosts(groupID) {
  const postURL = 'http://localhost:3003/post';  
  const { data } = await api.get(postURL)
  return data
} 


function SinglePost() {
    const postID = 1;

    //const { isLoading, data, isError, error  } = useQuery(['post'], () => getPosts(postID),   
    //const { isLoading, data, isError, error  } = useQuery({ queryKey: ['todos'] }, () => getPosts(postID), 
    //const { isLoading, data, isError, error  } = useQuery({queryKey: ['post']}, () => getPosts(postID), 
    
    const { isLoading, data, isError, error  } = useQuery({
        //queryKey: ['posts', 1],
        queryKey: ['posts'],
        queryFn: () => getPosts(postID),
        refetchInterval: 10000000 
      })
    

    const currentPosts = data;
    console.log(isLoading  + " " + isError + " " + error)
  
    return (
    <div className="posts">
         <p><b> Posts </b></p>
        { isLoading && <div> loading... </div>}
        { isError && <div> There was an error fetching the posts { error.message } </div>}
        { data && console.log(data) }
        { data && <Post post = { data } />}
    </div>
    );
}


export default SinglePost;

