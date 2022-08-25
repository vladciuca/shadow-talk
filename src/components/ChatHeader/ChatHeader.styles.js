import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
`;

export const UserName = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserStats = styled.div`
  display: flex;
  justify-content: center;
`;

export const Stat = styled.div`
  color: ${({ theme }) => theme.textLight};
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0 0.2rem;
  span {
    font-size: 1rem;
    padding: 0 0.2rem;
  }
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.textLight};
  padding-bottom: 7px;
`;

export const Topic = styled.div`
  padding-top: 7px;
  color: ${({ theme }) => theme.textLight};
  display: flex;
  width: 215px;
  span {
    padding-right: 0.25rem;
  }
`;

export const TopicText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Hint = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  height: 20px;
  font-size: 0.8rem;
  transition: 0.2s ease-in-out;
  background: ${({ autoTyping }) =>
    autoTyping === true
      ? css`
          ${({ theme }) => theme.neutralOpac}
        `
      : css`
          ${({ theme }) => theme.neutral}
        `};
  padding: 0.1rem 1rem;
  border-radius: 20px;
`;
