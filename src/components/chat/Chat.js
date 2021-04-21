import React from 'react'
import Chat_Content from '../Chat_Content/Chat_Content'
import Chat_Header from '../Chat_Header/Chat_Header'
import Chat_InputText from '../Chat_InputText/Chat_InputText'
import {Chat_} from './ChatStyled'

function Chat() {
    return (
        <Chat_>
           <Chat_Header/> 
           <Chat_Content/>
           <Chat_InputText/>
        </Chat_>
    )
}

export default Chat
