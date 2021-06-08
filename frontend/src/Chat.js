import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/chat/ChatFeed.jsx";

const projectID = "0056905e-32d6-48aa-a93c-4c4d4808e8bb";

const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
    //   userName="nguyenvananh"
      userName="langdaiduong"
      userSecret="xyz01634016082"
      projectID={projectID}
      // userName={localStorage.getItem('username')}
      // userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default Chat;
