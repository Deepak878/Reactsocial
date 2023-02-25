import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";
// import {Posts} from "../../dummyData"

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      console.log("feed rendered");
      const res = await axios.get(
        "http://localhost:8800/api/posts/timeline/63cfcaf66f001c908291fcab"
      );
      setPosts(res.data);
      console.log(posts);
      console.log(res.data);
    };
    fetchPosts();
  }, []);
  // http://localhost:8800/api/posts/timeline/63cfcaf66f001c908291fcab
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
