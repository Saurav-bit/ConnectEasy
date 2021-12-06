import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";

import "./Chat.css";

function Chat({ messages ,name}) {

  
  console.log(name)
  // console.log(name);
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    await axios.post("https://connecteasy.herokuapp.com/messages/new", {
      message: input,
      name: name,
      timestamp: new Date().toLocaleString(),
      received: false,
    });

    setInput("");
  };


  const messagesEndRef=useRef(null)
  const scrollToBottom=()=>{
    messagesEndRef.current?.scrollIntoView({behavior:"smooth"})
  }
  useEffect(()=>{
    scrollToBottom()
  },[messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Conference  </h3>
          {/* <p>Last seen at ...</p> */}
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        {messages.map((message) => {

          const rec=message.name !== name;
          // console.log(rec);
          if(rec)
          {
            console.log(message.message);
          }
          return (
            <p
              className={`chat__message ${
                !rec && "chat__reciever"
              }`}
            >
              <span className={`chat__name ${message.name ==={name} && "display_name"}`} >{message.name}</span>
              {message.message}
              {/* {console.log(message.name)} */}
              <span className="chat__timestamp">
                {message.timestamp}
              </span>
            </p>
          );
        })}

        {/* <p className="chat__reciever chat__message">
          <span className="chat__name">Name</span>
          this is msg
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p> */}

        {/* automatic scroll */}
        <div ref={messagesEndRef} /> 
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(event) =>setInput(event.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
