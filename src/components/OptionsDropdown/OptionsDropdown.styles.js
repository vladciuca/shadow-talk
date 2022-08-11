import styled, { css, keyframes } from "styled-components";

const SlideOut = keyframes`
  0% {
    margin-top: -5px;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
`;

export const OptionsContainer = styled.div`
  background: ${({ theme }) => theme.bgPrimary};
  top: 0;
  right: 3rem;
  border-radius: 0.5rem;
  div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  }
  animation: ${SlideOut} 0.3s linear;
`;

export const Option = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.delete
      ? css`
          ${({ theme }) => theme.danger};
        `
      : css`
          ${({ theme }) => theme.text};
        `};
`;
