import React from 'react'
import Sidebar_Chats from '../Sidebar_Chats/Sidebar_Chats'
import Sidebar_Header from '../Sidebar_Header/Sidebar_Header'
import Sidebar_Search from '../Sidebar_Search/Sidebar_Search'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <Sidebar_Header/>
            <Sidebar_Search/>
            <Sidebar_Chats/>
        </div>
    )
}

export default Sidebar
