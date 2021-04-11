import React from 'react'
import Chat_Message from '../Chat_Message/Chat_Message'
import './Chat_Content.css'

function Chat_Content() {
    return (
        <div className="chat__content">
            <Chat_Message recieverClass={true}/>
            <Chat_Message/>
            <Chat_Message/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
        </div>
    )
}

export default Chat_Content
