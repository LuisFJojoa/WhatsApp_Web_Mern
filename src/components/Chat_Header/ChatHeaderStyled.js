import styled from "styled-components"

export const ChatHeader = styled.div`

    padding: 20px;
    display:flex;
    align-items:center;
    background-color: var(--panel-header-background);
    border-bottom: 1px solid var(--line-color-separator);

    .chat__headerAvatar{
        margin-right: 20px;
    }

    .chat__headerInfo{
        flex: 1;

        h3{
            margin-bottom: 3px;
            font-weight: 500;
        }
    }

    .chat__headerOptions > .MuiIconButton-root > .MuiIconButton-label > .MuiSvgIcon-root{
        color: var(--icon-color);
    }
`