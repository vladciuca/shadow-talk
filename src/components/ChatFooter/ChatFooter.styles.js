import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100%;
`;

export const SwitchUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

export const SwitchUserButton = styled.div`
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textLight};
  font-size: 0.9rem;
  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    padding: 0 0.5rem;
  }
`;

export const SwitchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  padding: 0 0.5rem;
`;
