import styled from "styled-components";

export const ChatStatusInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textLight};
  font-size: 0.8rem;
`;

export const Info = styled.div`
  text-align: center;
  padding: 0.3rem 0;
  font-size: 0.7rem;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

export const ResolvedMark = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 999px;
  margin: 0 0.2rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.positive};
`;

export const Button = styled.span`
  cursor: pointer;
  background: ${({ theme }) => theme.positive};
  color: ${({ theme }) => theme.text};
  border-radius: 25px;
  margin: 0 0.2rem;
  padding: 0 0.4rem;
`;
