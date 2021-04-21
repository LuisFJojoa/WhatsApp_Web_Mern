import styled from "styled-components"

export const SidebarChat = styled.div`
display:flex;
padding: 20px;
cursor:pointer;
border-bottom: 1px solid var(--line-color-separator-chat);

:hover{
    background: var(--hover-sidebar-chat);
}

.sidebar__chatInfo{
    margin-left: 15px;

    h2{
        font-size:16px;
        margin-bottom: 8px;
    }
}
`


