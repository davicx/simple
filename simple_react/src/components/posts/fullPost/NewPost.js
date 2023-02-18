import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'

const api = axios.create({
  
})

async function makePost(post) {
    const postURL = "http://localhost:3003/api/post/make";
    const response = await axios.post(postURL, post);

    return response.data;
} 


function NewPost() {
    var groupID = 72;
    const queryClient = useQueryClient();
    const [postCaption, setPostCaption] = useState('say something cool!')
    
    const { isLoading, mutate } = useMutation(makePost, {
        onSuccess: (data) => {
            //queryClient.invalidateQueries(['posts'])
            const newPost = data;

            queryClient.setQueryData(['group', groupID], (oldPostData) => {
                oldPostData.unshift(newPost);

                return oldPostData;
            })
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

