import React from 'react'
import {SidebarSearch} from "./SidebarSearchStyled"
import {SearchOutlined} from '@material-ui/icons'

function Sidebar_Search() {
    return (
        <SidebarSearch>
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or start new chat" type="text"/>
            </div> 
        </SidebarSearch>
    )
}

export default Sidebar_Search
