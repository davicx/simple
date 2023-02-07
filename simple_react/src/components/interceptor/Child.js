import { useEffect, useState } from 'react'
import axios from 'axios'

async function getPosts(api) {   
    //const { data } = await axiosRequest.get(groupURL)
    const results = await api.get('posts')
    console.log(results.data)
    return results
  } 
  

function Child(props) {
    const api = props.api
    console.log(props)

  useEffect(() => {
    console.log("Getting data")
    getPosts(props.api)
  }, []);

  return (
    <div className="App">
      <p> Child Display Posts! </p>
    </div>
  );
}

export default Child;