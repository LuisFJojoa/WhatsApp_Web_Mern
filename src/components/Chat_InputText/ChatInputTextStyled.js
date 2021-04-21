import styled from "styled-components";

export const ChatInputText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid var(--line-color-separator);
  background-color: var(--panel-footer-background);

  form {
    flex: 1;
    display: flex;

    input {
      flex: 1;
      border-radius: 30px;
      outline-width: 0;
      padding: 10px;
      border: none;
    }

    button {
      display: none;
    }
  }

  .MuiSvgIcon-root {
    padding: 10px;
    color: var(--icon-color);
  }
`;
