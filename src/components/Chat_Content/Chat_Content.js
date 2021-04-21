import React from 'react'
import Chat_Message from '../Chat_Message/Chat_Message'
import {ChatContent} from './ChatContentStyled'

function Chat_Content() {
    return (
        <ChatContent>
            <Chat_Message recieverClass={true}/>
            <Chat_Message/>
            <Chat_Message/>
            <Chat_Message/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message recieverClass={true}/>
            <Chat_Message />
            <Chat_Message />
            <Chat_Message recieverClass={true}/>
            <Chat_Message />
            <Chat_Message recieverClass={true}/>
        </ChatContent>
    )
}

export default Chat_Content
