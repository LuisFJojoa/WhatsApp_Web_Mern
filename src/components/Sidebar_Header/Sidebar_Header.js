import React from 'react'
import "./Sidebar_Header.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Avatar, IconButton } from '@material-ui/core'

function Sidebar_Header() {
    return (
        <div className="sidebar__header">
            <div className="sidebar__headerLeft">
                <Avatar src="data:image/jpeg;base64,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"/>
            </div>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                

            </div>
        </div>
    )
}

export default Sidebar_Header
