import styled from "styled-components";

// export const AppContainer = styled.div`
//   width: 100%,
//   height: 100vh;
//   max-width: 800px;
//   padding: 0 0.5rem;
//   margin: 0 auto;
// `;

export const Container = styled.div`
  with: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const CenterColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const CenterRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const Spacer = styled.div`
//   height: 200px;
// `;

//TEXT components

export const Paragraph = styled.div`
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
  @media (min-width: 600px) {
    padding: 1rem 3rem;
  }
`;

export const Text = styled.span`
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.text};
`;

export const TextLight = styled.span`
  font-size: 1.1rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.textLight};
`;

export const Source = styled.span`
  text-decoration: underline;
`;

export const TextHighlight = styled.span`
  background-color: ${({ theme }) => theme.textHighlight};
`;

export const NeutralHighlight = styled.span`
  background-color: ${({ theme }) => theme.neutral};
`;

export const PositiveHighlight = styled.span`
  background-color: ${({ theme }) => theme.positive};
`;

export const NegativeHighlight = styled.span`
  background-color: ${({ theme }) => theme.negative};
`;

export const NeutralColor = styled.span`
  color: ${({ theme }) => theme.neutral};
`;

export const PositiveColor = styled.span`
  color: ${({ theme }) => theme.positive};
`;
export const NegativeColor = styled.span`
  color: ${({ theme }) => theme.negative};
`;

//SECTION components

export const SectionTitle = styled.div`
  font-size: 1.7rem;
  line-height: 2.3rem;
  @media (max-width: 600px) {
    padding: 3rem 1.5rem 1rem 1.5rem;
  }
  @media (min-width: 600px) {
    padding: 3rem 3rem 1rem 3rem;
  }
`;
