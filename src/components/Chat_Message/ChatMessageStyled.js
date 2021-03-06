import styled from "styled-components"

export const ChatMessageContent = styled.p`

    position: relative;
    font-size: 16px;
    padding: 5px 10px 5px 15px;
    width: fit-content;
    margin-bottom: 30px;
    border-radius: 10px;
    background-color: var(--white);
    display:flex;
    flex-direction:column;

    .chat__messageUsername{
        font-weight: 500;
        color: var(--color-username);
    }

    .chat__data{
        display:flex;
        flex-direction: row;
        padding: 2px;
        margin-bottom: 2px;;
    }

    .chat__messageData{
        font-size: 12px;
    }

    .chat__messageTimestamp{
        font-size: xx-small;
        margin-left: 10px;
        margin-top: 10px;
    }

    .chat__reciever{
        margin-left: auto;
        background: var(--message-reciever-background);
    }
`
