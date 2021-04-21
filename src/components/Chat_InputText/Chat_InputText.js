import React from "react";
import InserEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import {ChatInputText} from './ChatInputTextStyled'

function Chat_InputText() {
  return (
    <ChatInputText>
      <InserEmoticonIcon />
      <form>
        <input placeholder="Type a message" type="text" />
        <button type="submit">Send a message</button>
      </form>
      <MicIcon />
    </ChatInputText>
  );
}

export default Chat_InputText;
