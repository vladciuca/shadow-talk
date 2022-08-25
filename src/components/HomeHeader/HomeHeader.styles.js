import styled from "styled-components";

export const HomeHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 1.5rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.textLight};
  display: flex;
`;

export const SubTitleItem = styled.div`
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.positive};
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
`;

export const Spacer = styled.div`
  padding: 0.5rem 0.7rem 0 0.1rem;
`;

export const HomeAboutLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  font-size: 1.3rem;
`;
