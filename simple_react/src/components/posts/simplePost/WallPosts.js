import React, { useState } from 'react';
import { useQuery } from "react-query";
import axios from 'axios'
import Post from '../../reactQuery/Post';


const api = axios.create({
  
})

async function getPosts(groupID) {
  const postURL = 'http://localhost:3003/posts';  
  const { data } = await api.get(postURL)
  return data
} 


function WallPosts() {
    var groupID = 72;
    const postID = 1;

    //const { isLoading, data, isError, error  } = useQuery(['post'], () => getPosts(postID),   
    //const { isLoading, data, isError, error  } = useQuery({ queryKey: ['todos'] }, () => getPosts(postID), 
    //const { isLoading, data, isError, error  } = useQuery({queryKey: ['post']}, () => getPosts(postID), 
    
    const { isLoading, data, isError, error  } = useQuery({
        //queryKey: ['posts', 1],

        queryKey: ['group', groupID],
        queryFn: () => getPosts(postID),
        refetchInterval: 10000000 
      })
    

    const currentPosts = data;
    //console.log(isLoading  + " " + isError + " " + error)
  
    return (
    <div className="posts">
        { isLoading && <div> loading... </div>}
        { isError && <div> There was an error fetching the posts { error.message } </div>}
        { data && currentPosts.map((post) => (
            <Post post = { post } key = { post.postID }/>
        ))}
    </div>
    );
}




export default WallPosts;
/*
{ data && <Post post = { data } />}

{data.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
*/
//Commment
/*
const useAddComment = (id) => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (newComment) =>
      axios.post(`/posts/${id}/comments`, newComment),
    onSuccess: () => {
      //refetch the comments list for our blog post
      queryClient.invalidateQueries({ queryKey: ['posts', id, 'comments'] })
    },
  })
}
*/

/*
        
  var groups = data;
  //console.log(groups + " " + isError + " " + error)

  return (
  <div className="groups">
      { isLoading && <div> loading... </div>}
      { isError && <div> There was an error fetching the posts { error.message } </div>}
      { data && console.log(data)}
      {data && groups.groups.map(group => (
          <div className="group" key={ group.groupID } >
            <Link to={`/group/${group.groupID}`}>{ group.groupID } | {group.groupName } </Link>
          </div>
      ))}
  </div>
  );
  }
*/
