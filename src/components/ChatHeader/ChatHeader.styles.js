import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 7.5%;
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
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
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.textLight};
  padding-bottom: 7px;
`;

export const Topic = styled.div`
  padding-top: 7px;
  color: ${({ theme }) => theme.textLight};
  display: flex;
  width: 200px;
  span {
    padding-right: 0.25rem;
  }
`;

export const TopicText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
