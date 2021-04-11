import React from 'react'
import './Chat_InputText.css'
import InserEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat_InputText() {
    return (
        <div className="chat__inputText">
            <InserEmoticonIcon/>
            <form>
                <input placeholder="Type a message" type="text"/>
                <button type="submit">Send a message</button>
            </form>
            <MicIcon/>
        </div>
    )
}

export default Chat_InputText
