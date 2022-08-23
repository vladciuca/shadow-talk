import styled from "styled-components";

export const ChatStatusInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textLight};
`;

export const Info = styled.div`
  text-align: center;
  padding: 0.3rem 0;
  font-size: 0.8rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.textLight};
  padding-bottom: 7px;
`;

export const Status = styled.div`
  padding-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

export const Icon = styled.div`
  margin: 0 0.2rem;
`;

export const Button = styled.span`
  cursor: pointer;
  background: ${({ theme }) => theme.negative};
  color: ${({ theme }) => theme.text};
  border-radius: 25px;
  margin: 0 0.2rem;
  padding: 0.1rem 0.4rem;
`;
