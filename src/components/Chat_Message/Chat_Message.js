import React from 'react'
import {ChatMessageContent} from './ChatMessageStyled'

const Chat_Message = (props) => {
    return (
        <>
        {/* ${props.recieverClass ? 'chat__reciever':''}`} */}
           <ChatMessageContent recieverClass={props.recieverClass}>
                <span className="chat__messageUsername">Fernando</span>
                <div className="chat__data">
                    <p className="chat__messageData">message extremly large with a lot data</p>
                    <span className="chat__messageTimestamp">{new Date().toUTCString()}</span>
                </div>
            </ChatMessageContent> 
        </>
    )
}

export default Chat_Message
