import React from 'react'
import "./feed.css"
import Share from '../share/Share'
 import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from "axios"
// import {Posts} from "../../dummyData"

export default function Feed() {
  const [posts, setPosts] =  useState([]);
useEffect(()=>{
  const fetchPosts = async() =>{
    console.log("feed rendered")
    const res = await axios.get("http://localhost:8800/api/posts/63cfdb135daafb574ca7e242");
    setPosts(res.data)
    console.log(res)
  };
  fetchPosts();
},[])
// http://localhost:8800/api/posts/timeline/63cfcaf66f001c908291fcab
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>{
        
            <Post key={p.id} post={p}/>
        
        })}
      </div>
    </div>
  )
}
