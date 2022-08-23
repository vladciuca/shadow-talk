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
  flex-grow: 1;
  margin-left: 1rem;
  padding: 0.5rem 0;
`;

export const ChatTopic = styled.div`
  display: flex;
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.text};
  padding: 5px 0;
  span {
    font-size: 1rem;
    padding-right: 0.25rem;
    color: ${({ theme }) => theme.textLight};
  }
`;

export const TopicText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 210px;
  @media (max-width: 400px) {
    max-width: 180px;
  }
  @media (max-width: 360px) {
    max-width: 150px;
  }
`;

export const TopicForm = styled.form`
  flex-grow: 1;
`;

export const TopicInput = styled.input`
  width: 100%;
  padding: 0 2px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.card};
  &:focus {
    outline: none;
  }
`;

export const ChatSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 7px;
  border-bottom: 1px solid ${({ theme }) => theme.card};
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

export const StatusIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.2rem;
  color: ${({ theme }) => theme.positive};
`;

export const ChatIntegration = styled.div`
  color: ${({ theme }) => theme.textLight};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

export const IntegrationNr = styled.div`
  font-weight: 700;
  margin-right: 0.2rem;
`;

export const IntegrationIcon = styled.span`
  margin-left: 0.2rem;
`;

export const ChatStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
`;

export const Stats = styled.div`
  display: flex;
  flex: 1;
`;

export const StatContainer = styled.div`
  display: flex;
  width: 25%;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textLight};
`;

export const StatIcon = styled.div`
  margin: 0 0.2rem;
  padding-top: 1px;
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
  span {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
