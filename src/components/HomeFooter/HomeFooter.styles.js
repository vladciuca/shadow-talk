import styled from "styled-components";

export const HomeFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background: ${({ theme }) => theme.negative};
`;
