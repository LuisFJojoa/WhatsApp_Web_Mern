import React from 'react'
import './Chat_Message.css'

const Chat_Message = (props) => {
    return (
        <>
           <p className={`chat__messageContent ${props.recieverClass ? 'chat__reciever':''}`}>
                <span className="chat__messageUsername">Fernando</span>
                <div className="chat__data">
                    <p className="chat__messageData">message extremly large with a lot data</p>
                    <span className="chat__messageTimestamp">{new Date().toUTCString()}</span>
                </div>
            </p> 
        </>
    )
}

export default Chat_Message
