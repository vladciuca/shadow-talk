import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

export const ErrorCode = styled.div`
  font-size: 7rem;
  font-weight: 550;
  position: absolute;
  top: 0;
`;

export const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textLight};
  position: absolute;
  bottom: 2rem;
`;
