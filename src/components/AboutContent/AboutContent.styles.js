import styled from "styled-components";

export const Paragraph = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  div {
    font-size: 1rem;
    line-height: 1.4rem;
    margin-bottom: 1rem;
    padding: 0.4rem;
    border-radius: 0.3rem;
    text-align: start;
  }
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.textLight};
  line-height: 1.4rem;
  div {
    margin-bottom: 0.5rem;
  }
  ul {
    margin: 0.5rem 0;
  }
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0;
  margin: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;
