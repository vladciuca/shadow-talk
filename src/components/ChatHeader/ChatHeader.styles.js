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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const SwitchTextUnchecked = styled.div`
  padding-top: 0.2rem;
  margin-left: -40px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchTextChecked = styled.div`
  padding-top: 0.2rem;
  margin-left: 35px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchHandleIcon = styled.div`
  margin-top: -1px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
