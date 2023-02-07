import { useEffect, useState } from 'react'
import axios from 'axios'
import Child from './Child';

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


function Parent() {
  return (
    <div className="App">
      <p> Parent Display Posts! </p>
      <Child api = { api }/>
      
    </div>
  );
}

export default Parent;

/*
<Groups currentUser = { currentUser } />  
*/