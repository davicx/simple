const Post = (props) => {
    const post = props.post;

    return (
        <div className="post" key={ post.postID }>
            <p><b> Post from: </b>{ post.postFrom } </p>
            <p className = "post-text"> post to: { post.postTo } </p>
            <p className = "post-text"> { post.postCaption } </p>
            <hr />                       
        </div>
        );
    }  
  
  export default Post;