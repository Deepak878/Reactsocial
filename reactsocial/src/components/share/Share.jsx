import React, { useContext } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import { useState } from "react";
import axios from "axios";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useRef } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      var data = new FormData();
      var key;
      // let fileName = Date.now() + file.name;
      let fileName = file.name;
      console.log(file);
      console.log(fileName);
      data.append("file", file);
      data.append("name", fileName);

      // for (key of data) {
      //   console.log(key);
      // }
      console.log(data);
      newPost.img = fileName;
      try {
        // console.log(data);
        const res = await axios.post("http://localhost:8800/api/upload", data);
        console.log("send bho", res);
      } catch (err) {
        console.log(err);
      }
    }
    console.log(newPost);
    try {
      console.log("new post");
      await axios.post("http://localhost:8800/api/posts", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? user.profilePicture
                : PF + "person/noAvatar.jpeg"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"></hr>
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <div className="shareOption">
              <label htmlFor="file" className="shareOption">
                <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
