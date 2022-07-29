import styled from "styled-components";

export const LogoContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PastSelfIcon = styled.div`
  position: relative;
  margin-left: 15px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  color: ${({ theme }) => theme.neutralOpac};
`;

export const PresentSelfIcon = styled.div`
  position: absolute;
  top: 0;
  color: ${({ theme }) => theme.negativeOpac};
`;
