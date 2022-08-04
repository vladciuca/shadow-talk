import styled from "styled-components";

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
  width: 250px;
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
