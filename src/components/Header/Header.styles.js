import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const UserName = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  padding-top: 5px;
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.textLight};
`;

export const AppInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;
