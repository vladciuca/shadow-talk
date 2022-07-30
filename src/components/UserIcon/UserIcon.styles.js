import styled from "styled-components";

export const UserBackground = styled.div`
  height: ${({ bgHeightAndWidth }) => bgHeightAndWidth}rem;
  width: ${({ bgHeightAndWidth }) => bgHeightAndWidth}rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.neutralDark};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  span {
    font-size: ${({ iconSize }) => iconSize}rem;
    margin-top: ${({ iconMargin }) => iconMargin}rem;
    color: ${({ theme }) => theme.neutral};
  }
`;