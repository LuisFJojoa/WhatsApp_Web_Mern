import React from 'react'
import Chat_Content from '../Chat_Content/Chat_Content'
import Chat_Header from '../Chat_Header/Chat_Header'
import Chat_InputText from '../Chat_InputText/Chat_InputText'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
           <Chat_Header/> 
           <Chat_Content/>
           <Chat_InputText/>
        </div>
    )
}

export default Chat
