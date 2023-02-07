import React, { useState } from 'react';
import { useQuery } from "react-query";
import axios from 'axios'
import IndividualPost from './IndividualPost';


const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

api.interceptors.response.use(function (response) {
  console.log("INTERCEPTOR: Looks good! 200 ")
  return response;

  }, function (error) {
  console.log("INTERCEPTOR: Oh no got an error " + error.response.status)  
  return Promise.reject(error);

});

async function getPosts(groupID) {
  const postURL = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5';  
  const { data } = await api.get(postURL)
  return data
} 


function AllPosts() {
    const groupID = 72;

    const { isLoading, data, isError, error  } = useQuery(['group-posts', groupID], () => getPosts(groupID), 
      { refetchInterval: 10000000 }
    )
  
    const currentPosts = data;
    console.log(isLoading)
    console.log(isError)
    console.log(error)
  
    return (
    <div className="posts">
         <p><b> Posts </b></p>
        { isLoading && <div> loading... </div>}
        { isError && <div> There was an error fetching the posts { error.message } </div>}
        { data && <IndividualPost posts = { currentPosts } />}
        {console.log(data)}
    </div>
    );
}


export default AllPosts;
