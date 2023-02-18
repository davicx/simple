import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'
import Post from './Post';


const api = axios.create({
  
})

async function updatePost(post) {
    const postURL = "http://localhost:3003/post/";
    const response = await axios.post(postURL, post);
    return response.data;
  } 


function UpdateSinglePost() {
    const queryClient = useQueryClient();
    const [postCaption, setPostCaption] = useState('say something cool!')
    
    //WORKING
    const { isLoading, mutate } = useMutation(updatePost, {
        onSuccess: (data) => {
            //queryClient.invalidateQueries(['posts'])
            const newPost = data;
            queryClient.setQueryData(['posts'], newPost)
            console.log("worked!")
            console.log(data);
        }
    })
    
        
    const handleChange = (event) => {
        const { name, value } = event.target
        setPostCaption(value)
        console.log(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var post = {
            postID: 1,
            postFrom: "david",
            postTo: "sam",
            postCaption: postCaption
        }
        //updatePost(post)
        mutate(post)
        console.log("handleSubmit " + postCaption)
    }

    return (
    <div className="posts">
         <p><b> Update Post </b></p>
         <form onSubmit={ handleSubmit }>
          <label> </label> 
          <input name= "postCaption" type="text" value={ postCaption } onChange={handleChange} />
          <p> {postCaption}</p>
          <button type="submit"> Submit </button>
      </form>
    </div>
    );
}


export default UpdateSinglePost;


//WORKS
/*
import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'
import Post from './Post';


const api = axios.create({
  
})

async function updatePost(post) {
    const postURL = "http://localhost:3003/post/";
    const response = await axios.post(postURL, post);
    return response.data;
  } 


function UpdatePost() {
    const queryClient = useQueryClient();
    const [postCaption, setPostCaption] = useState('say something cool!')
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setPostCaption(value)
        console.log(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var post = {
            postID: 1,
            postFrom: "david",
            postTo: "sam",
            postCaption: postCaption
        }
        updatePost(post)
        queryClient.setQueryData(['posts'], post)
        console.log("handleSubmit " + postCaption)
    }

    return (
    <div className="posts">
         <p><b> Update Post </b></p>
         <form onSubmit={ handleSubmit }>
          <label> </label> 
          <input name= "postCaption" type="text" value={ postCaption } onChange={handleChange} />
          <p> {postCaption}</p>
          <button type="submit"> Submit </button>
      </form>
    </div>
    );
}


export default UpdatePost;
*/

//APPENDIX
/*
import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'


async function updatePost(post) {
  const postURL = "http://localhost:3003/post/temp";
  const response = await axios.post(postURL, post);
  //console.log("RESPONSE DATA: ")
  //console.log(response.data)
  //console.log("_____________________")
  return response.data;
} 

function MakePost() {
  const queryClient = useQueryClient();
  const [postCaption, setPostCaption] = useState('say something cool!')

  
    const { isLoading, mutate } = useMutation(updatePost, {
        onMutate: (post) => {
            console.log("on Mutate: post");
            console.log(post);
            
        },
        onSuccess: (data) => {
            console.log("on Success: data");
            console.log(data.postID);
            console.log(data);
            //queryClient.setQueryData(['posts'], data)
            queryClient.invalidateQueries(['posts'])
        }
    })

        
        //setIsEditing(false)
        //queryClient.invalidateQueries(['post', postID])
        //queryClient.invalidateQueries(['posts', 0])
        //queryClient.setQueryData(['posts', { groupID: 77 }], updatePost)
        //queryClient.setQueryData(['post', { id: 1 }], data)
        console.log("onSuccess: ")
        console.log(data)
        //Doesn't work
        queryClient.setQueryData('posts', (oldQueryData) => {
            return {
                ... oldQueryData,
                data: [...oldQueryData,data, data.data]
            }
        })
        //WORKS
        //queryClient.invalidateQueries(['posts'])
        


    //WORKING
    const { isLoading, mutate } = useMutation(updatePost, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(['posts'])
        }
    })
    

    const handleChange = (event) => {
        const { name, value } = event.target
        //console.log(value)
        setPostCaption(value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit " + postCaption)
        console.log(post)    
        var post = {
            masterSite: "kite",
            postType: "text",
            postFrom: "davey",
            postTo: "frodo",
            groupID: 77,
            listID: 0,
            postCaption: postCaption,   
            notificationMessage: "Posted a Message",   
            notificationType: "new_post_text",
            notificationLink: "http://localhost:3003/posts/group/77"
          }
        mutate(post)
    }

    if(isLoading) {
        return <p> saving data </p> 
    }

  return (
    <div className="user">
      <p> Make Post </p>
      <form onSubmit={ handleSubmit }>
          <label> </label> 
          <input name= "postCaption" type="text" value={ postCaption } onChange={handleChange} />
          <p> {postCaption}</p>
          <button type="submit"> Submit </button>
      </form>
    </div>
  );
}


export default MakePost;
*/