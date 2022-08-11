import styled, { keyframes, css } from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

export const ChatProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatInfo = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-left: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.card};
`;

export const ChatTopic = styled.div`
  width: 260px;
  @media (max-width: 400px) {
    width: 230px;
  }
  @media (max-width: 360px) {
    width: 210px;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.text};
  padding-bottom: 5px;
  span {
    font-size: 1rem;
    padding-right: 0.25rem;
    color: ${({ theme }) => theme.textLight};
  }
`;

export const ChatSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatDate = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textLight};
`;

export const ChatResolve = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textLight};
`;

export const ResolvedMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 999px;
  margin: 0 0.2rem;
  background: ${({ theme }) => theme.positive};
`;

export const Options = styled.div`
  cursor: pointer;
  font-size: 1.3rem;
  margin-left: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideIn = keyframes`
  0% {
    margin-bottom: -5px;
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
  animation: ${SlideIn} 0.3s linear;
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
