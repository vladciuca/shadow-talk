import styled, { css, keyframes } from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ user }) => (user === "Present" ? "end" : "start")};
  flex-direction: ${({ user }) => (user === "Present" ? "row-reverse" : "")};
  padding: 0.5rem 0;
`;

export const UserIconContainer = styled.div`
  width: 10%;
  justify-content: ${({ user }) => (user === "Present" ? "end" : "start")};
`;

export const MessageContent = styled.div`
  ${({ messageHighlight, messageResolve, user }) =>
    messageResolve
      ? css`
          background: ${({ theme }) => theme.positiveOpac};
        `
      : messageHighlight && user === "Past"
      ? css`
          background: ${({ theme }) => theme.neutralOpac};
        `
      : messageHighlight && user === "Present"
      ? css`
          background: ${({ theme }) => theme.negativeOpac};
        `
      : css`
          background: ${({ theme }) => theme.cardSecondary};
        `}
  overflow-wrap: anywhere;
  max-width: 70%;
  line-height: 1.4rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
`;

export const Options = styled.div`
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-top: 0.5rem;
`;

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
  span {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const OptionsSpacer = styled.div`
  width: 18px;
`;
