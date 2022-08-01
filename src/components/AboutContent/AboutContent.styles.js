import styled from "styled-components";

export const Paragraph = styled.div`
  line-height: 1.4rem;
  padding-bottom: 1.5rem;
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.textLight};
`;

export const Title = styled.div`
  text-decoration: underline;
  text-transform: uppercase;
  text-align: center;
  padding: 1.5rem 0;
`;
