import Likes from './Likes';
import EditPost from './EditPost';

const Post = (props) => {
    const currentUser = props.currentUser;
    const post = props.post;

    return (
        <div className="post">
            <p><b> Post from: </b>{ post.postFrom } </p>
            <p className = "post-text"> post to: { post.postTo } | ID: { post.postID }</p>
            <p className = "post-text"> { post.postCaption } </p>
            <Likes post = { post } currentUser = {currentUser}  />    
            <EditPost post = { post } currentUser = {currentUser}  />    
        </div>
        );
    }  
  
export default Post;
