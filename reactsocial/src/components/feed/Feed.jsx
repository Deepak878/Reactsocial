import React, { useContext } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import {Posts} from "../../dummyData"

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      // console.log("feed rendered");
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/" + user._id
          );
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      // console.log(posts);
      // console.log(res.data);
    };
    fetchPosts();
  }, [username, user._id]);
  // http://localhost:8800/api/posts/timeline/63cfcaf66f001c908291fcab
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
