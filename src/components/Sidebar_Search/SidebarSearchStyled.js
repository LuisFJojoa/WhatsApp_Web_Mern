import styled from "styled-components";

export const SidebarSearch = styled.div`
display:flex;
    align-items:center;
    background: var(--search-color-font);
    height:39px;
    padding: 10px;

    .sidebar__searchContainer{
        display:flex;
        align-items:center;
        background: var(--white);
        width:100%;
        height:35px;
        border-radius:20px;

        .MuiSvgIcon-root{
            color: var(--icon-color);
            padding: 10px;
        }
    }
    
    input{
        border: none;
        outline-width: 0;
        margin-left: 10px;
    }
`;
