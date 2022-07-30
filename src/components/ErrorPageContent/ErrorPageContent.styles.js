import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ErrorCode = styled.div`
  font-size: 7rem;
  font-weight: 550;
`;

export const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textLight};
`;
