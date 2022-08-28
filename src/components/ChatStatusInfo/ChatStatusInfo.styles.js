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
`;

export const Status = styled.div`
  padding-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
`;

export const Icon = styled.div`
  margin-left: 0.4rem;
`;

export const Button = styled.span`
  cursor: pointer;
  background: gray;
  color: ${({ theme }) => theme.text};
  border-radius: 25px;
  margin: 0 0.3rem;
  padding: 0rem 0.4rem;
  font-size: 0.7rem;
`;
