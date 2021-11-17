import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

const Chats = () => {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const route = useRouter();

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) route.push("/");
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return null;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="a0d460a1-6e8d-43fb-b3af-d8123b8f6d7e"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
};

export default Chats;
