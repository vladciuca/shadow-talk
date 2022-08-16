import styled, { keyframes } from "styled-components";

const Scaling = keyframes`
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

export const TypingIndicatorContainer = styled.div`
  display: flex;
  align-items: end;
  height: 1.3rem;
  div {
    background: ${({ theme }) => theme.textLight};
    height: 4px;
    width: 4px;
    border-radius: 999px;
    margin: 0 0.15rem;
    animation: ${Scaling} 1.5s ease-in-out infinite;
  }
  div:nth-child(0) {
    animation-delay: 0.25s;
  }
  div:nth-child(1) {
    animation-delay: 0.5s;
  }
  div:nth-child(2) {
    animation-delay: 0.75s;
  }
`;
