import { useEffect, useState } from 'react'
import axios from 'axios'

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

async function getPosts() {   
  //const { data } = await axiosRequest.get(groupURL)
  const results = await api.get('posts')
  console.log(results.data)
  return results
} 

function SimplePosts() {
  useEffect(() => {
    console.log("Getting data")
    getPosts()
  }, []);

  return (
    <div className="App">
      <p> Display Posts! </p>
    </div>
  );
}

export default SimplePosts;