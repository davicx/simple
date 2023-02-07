const IndividualPost = (props) => {
    const posts = props.posts;
    const postID = posts.postID

    return (
        <div className = "post-list">
            { posts.map((post) => (
                <div className="post" key={ post.id }>
                    <p className = "post-text"> { post.title } </p>
                    <p className = "post-text"> { post.body }</p>    
                    <hr />                       
                </div>
            ))}
        </div>
        );
    }  
  
  export default IndividualPost;
  