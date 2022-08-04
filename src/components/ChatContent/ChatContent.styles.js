import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ user }) => (user === "Present" ? "end" : "start")};
  flex-direction: ${({ user }) => (user === "Present" ? "row-reverse" : "")};
  padding: 0.5rem 0;
`;

export const UserIconContainer = styled.div`
  width: 13%;
  display: flex;
  align-items: top;
  justify-content: ${({ user }) => (user === "Present" ? "end" : "start")};
`;

export const MessageContent = styled.div`
  max-width: 74%;
  padding: 0.5rem 0.75rem;
  line-height: 1.4rem;
  background: ${({ theme }) => theme.cardPrimary};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
`;
