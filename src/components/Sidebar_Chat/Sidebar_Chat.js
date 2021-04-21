import { Avatar } from '@material-ui/core'
import React from 'react'
import {SidebarChat} from './SidebarChatStyled'

function Sidebar_Chat() {
    return (
        <SidebarChat>
            <Avatar/>
            <div className="sidebar__chatInfo">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </SidebarChat>
    )
}

export default Sidebar_Chat
