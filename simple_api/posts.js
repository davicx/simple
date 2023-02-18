const express = require('express')
const postRouter = express.Router();

var currentUser = "davey"

var post = {
    postID: 5, 
    postFrom: "davey",
    postTo: "sam",
    postCaption: "hiya wanna hike!",
    postLikesArray: ["davey", "sam"],
    totalLikes: 2
  }

  var post2 = {
    postID: 6, 
    postFrom: "davey",
    postTo: "sam",
    postCaption: "hiya wanna garden!",
    postLikesArray: ["davey", "sam"],
    totalLikes: 2
  }

  var post3 = {
    postID: 7, 
    postFrom: "davey",
    postTo: "sam",
    postCaption: "lets go to the inn!",
    postLikesArray: ["frodo", "merry", "pippin"],
    totalLikes: 3
}



function findPost(postID) {
  return posts.postID == postID;
}
/*
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
*/

var posts = [post, post2, post3]

//Full Posts
postRouter.get("/api/posts", (req, res) => {
    console.log("responding to /api/posts")

    res.json(posts)
})

function findPost(posts, postID) {
  for (let i = 0; i < posts.length; i++) {
    //console.log(posts[i].postID + " " + postID)
    if(posts[i].postID == postID) {
      return posts[i];
    }
  } 
}

//Like a Post
postRouter.post("/api/post/like", (req, res) => {
  const postID = req.body.postID
  console.log("You liked post with the POST ID " + postID)

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].postID + " " + postID)
    if(posts[i].postID == postID) {
      if(posts[i].postLikesArray.includes(currentUser)) {
        console.log(currentUser + " Had already liked this post so we will unlike! with POST ID  " + postID)
        const index = posts[i].postLikesArray.indexOf(currentUser);
        if (index > -1) { 
          posts[i].postLikesArray.splice(index, 1); 
        }
        posts[i].totalLikes = posts[i].postLikesArray.length
        res.json(posts[i])
        return 
      } else {
        console.log(currentUser + " Liked this post!")
        posts[i].postLikesArray.push(currentUser);
        posts[i].totalLikes = posts[i].postLikesArray.length
        res.json(posts[i])
        return 
      }
      posts[i].postLikesArray.includes(currentUser)
    }

  } 
  console.log(posts)
  
  //res.json(posts)
})

//Edit a Post
postRouter.post("/api/post/edit", (req, res) => {
    const post = req.body
    const postID = post.postID
    const newPostCaption = post.newPostCaption
    console.log("error! post not found " + postID)
  
    for (let i = 0; i < posts.length; i++) {
      
      if(posts[i].postID == postID) {
        console.log("Found the post " + posts[i].postID + " " + postID)
        console.log(posts[i].postCaption);
        console.log(newPostCaption);
        posts[i].postCaption = newPostCaption;
        res.json(posts[i])
        return 
        
      } else {
        console.log("error! post not found " + posts[i].postID + " " + postID)
        res.json(posts[i])
        return
      }
    } 
    
  })
  
  postRouter.post("/api/post/make", (req, res) => {
    const postCaption = req.body.postCaption
  
    console.log("Making a post with this body")
    console.log(req.body)
    var newPostID = req.body.postID + 10
  
    var newPost = {
      postID: newPostID, 
      postFrom: "davey",
      postTo: "sam",
      postCaption: postCaption,
      postLikesArray: ["frodo", "merry", "pippin"],
      totalLikes: 2,
      postComments: []
    }

    posts.unshift(newPost)
    console.log(posts);
  
    res.json(newPost)
  })
  
postRouter.get("/learning", (req, res) => {

  //Destructure
  /*
  const user = {
    userName:"frodo",
    town:"shire",
    hobby: {
      gardening: "fruit trees",
      hiking: "Day hikes"
    }
  }
  
  const {userName: frodoName = 'default', town } = user
  */
  var newPosts = structuredClone(posts);
  console.log(posts)
  newPosts[0].postCaption = "This is new!"
  console.log(newPosts)

  
  res.json(posts)
})

//FUNCTIONS
function updatePostCaption(postID, newPostCaption) {
  
}



module.exports = postRouter;
