import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => size}rem;
  width: ${({ size }) => size}rem;
  font-size: calc(${({ size }) => size}rem * 0.55);
  background: ${({ theme }) => theme.positive};
  color: ${({ theme }) => theme.text};
  border-radius: 999px;
`;
