import classes from "./PostList.module.css";
import Post from "./Post";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData()

  function renderPosts() {
    console.log("rendering posts");
    console.log(posts);
    return posts.map((post) => (
      <Post key={post.author} id = {post.id} author={post.author} body={post.body} />
    ));
  }
  const postList = renderPosts();

  return (
    <>
      {
      (posts.length > 0 ? (
          <ul className={classes.posts}>{postList} </ul>
        ) : (
          <div>
            <p>No posts yet!</p>
          </div>
        ))}
    </>
  );
}

export default PostList;
