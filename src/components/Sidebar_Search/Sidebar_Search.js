import React from 'react'
import "./Sidebar_Search.css"
import {SearchOutlined} from '@material-ui/icons'

function Sidebar_Search() {
    return (
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or start new chat" type="text"/>
            </div> 
        </div>
    )
}

export default Sidebar_Search
