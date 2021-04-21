import styled from "styled-components";

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--panel-header-background);
  border-right: 1px solid var(--line-color-separator);

  .sidebar__headerOptions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    .MuiSvgIcon-root {
      font-size: 24px !important;
    }

    .MuiIconButton-root {
      .MuiIconButton-label {
        .MuiSvgIcon-root {
          color: var(--icon-color);
        }
      }
    }
  }
`;
