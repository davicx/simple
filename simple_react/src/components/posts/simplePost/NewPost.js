import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'
import Post from '../../reactQuery/Post';


const api = axios.create({
  
})

async function updatePost(post) {
    const postURL = "http://localhost:3003/post/";
    const response = await axios.post(postURL, post);
    return response.data;
  } 


function NewPost() {
    var groupID = 72;
    const queryClient = useQueryClient();
    const [postCaption, setPostCaption] = useState('say something cool!')
    
    const { isLoading, mutate } = useMutation(updatePost, {
        onSuccess: (data) => {
            //queryClient.invalidateQueries(['posts'])
            const newPost = data;
            //queryClient.setQueryData(['posts'], newPost)
            //NEW TRYING
            const fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.push("Kiwi");
            queryClient.setQueryData(['group', groupID], (oldPostData) => {
                console.log("oldPostData")
                console.log(oldPostData)
                console.log("newPost")
                console.log(newPost)
                //const newPosts = [newPost]
                console.log("all posts")
                oldPostData.unshift(newPost);
                console.log(oldPostData);

                return oldPostData;
            })
            /*
            queryClient.setQueryData(['posts'], (oldPostData) => {
                return {
                ...oldPostData,
                data: [...oldPostData.data, data.data],
                }
            })
            */
            //
            //console.log("worked!")
            //console.log(data);
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
    <div className="new-post">
         <p><b> Make Post </b></p>
         <form onSubmit={ handleSubmit }>
          <label> </label> 
          <input name= "postCaption" type="text" value={ postCaption } onChange={handleChange} />
          <p> {postCaption}</p>
          <button type="submit"> Submit </button>
      </form>
    </div>
    );
}


export default NewPost;

