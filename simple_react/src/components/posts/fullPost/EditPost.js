import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'

const api = axios.create({
  
})

async function editPost(post) {
    const postURL = "http://localhost:3003/api/post/edit";
    const response = await axios.post(postURL, post);

    console.log(response.data)

    return response.data;
} 

    
function EditPost(props) {
    var groupID = 72;
    const currentUser = props.currentUser;
    const post = props.post;

    const queryClient = useQueryClient();
    const [newPostCaption, setPostCaption] = useState(post.postCaption)

    //API UPDATE
    const { isLoading, mutate } = useMutation(editPost, {
        onSuccess: (returnedData) => {
            //queryClient.invalidateQueries(['group', groupID])
            queryClient.setQueryData(['group', groupID], (originalQueryData) => {
                console.log("returnedData")
                console.log(returnedData)
                console.log("originalQueryData")
                console.log(originalQueryData)
                    
                //STEP 1: Get post ID of updated post and new like array 
                const postID = returnedData.postID;
                const newPostCaption = returnedData.postCaption;
  
                var updatedQueryData = structuredClone(originalQueryData);

                for (let i = 0; i < updatedQueryData.length; i++) {
                    //console.log(updatedQueryData[i].postID + " " + postID)
                    if(updatedQueryData[i].postID == postID) {
                        console.log("Change this post! " + postID)
                        //Create the new array of users who have liked this
                        updatedQueryData[i].postCaption = newPostCaption
                    }
                }

                return updatedQueryData;
            }) 
        }
    })


    //HANDLE CHANGE
    const handleChange = (event) => {
        const { name, value } = event.target
        setPostCaption(value)
        console.log(value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        post.newPostCaption = newPostCaption;
        mutate(post)
        //editPost(post) 

    }

    return (
    <div className="new-post">
         <p><b> Edit Post </b></p>
         <form onSubmit={ handleSubmit }>
            <label> </label> 
            <input name= "postCaption" type="text" value={ newPostCaption } onChange={handleChange} />
            <p> {newPostCaption}</p>
            <button type="submit"> Submit </button>
        </form>
    </div>
    );
}


export default EditPost;

//WORKS
/*
import React, { useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import axios from 'axios'

const api = axios.create({
  
})

async function editPost(post) {
    const postURL = "http://localhost:3003/api/post/edit";
    const response = await axios.post(postURL, post);

    console.log(response.data)

    return response.data;
} 

    
function EditPost(props) {
    var groupID = 72;
    const currentUser = props.currentUser;
    const post = props.post;

    const queryClient = useQueryClient();
    const [newPostCaption, setPostCaption] = useState(post.postCaption)

    const handleChange = (event) => {
        const { name, value } = event.target
        setPostCaption(value)
        console.log(value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        post.newPostCaption = newPostCaption;
        //mutate(post)
        editPost(post) 

    }

    return (
    <div className="new-post">
         <p><b> Edit Post </b></p>
         <form onSubmit={ handleSubmit }>
            <label> </label> 
            <input name= "postCaption" type="text" value={ newPostCaption } onChange={handleChange} />
            <p> {newPostCaption}</p>
            <button type="submit"> Submit </button>
        </form>
    </div>
    );
}


export default EditPost;
*/

/*



function EditPost() {
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


export default EditPost;
*/

