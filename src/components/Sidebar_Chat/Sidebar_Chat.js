import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar_Chat.css'

function Sidebar_Chat() {
    return (
        <div className="sidebar__chat">
            <Avatar/>
            <div className="sidebar__chatInfo">
                <h2>Room name</h2>
                <p>This is the last message</p>

            </div>
        </div>
    )
}

export default Sidebar_Chat
