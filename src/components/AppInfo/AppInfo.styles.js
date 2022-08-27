import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const AppInfoContainer = styled.div`
  display: block;
  position: absolute;
  top: 2rem;
  left: 2rem;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FlagShipLogo = styled.div`
  font-family: "Inconsolata", monospace;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const AppTitle = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled(FaUser)`
  margin-right: 0.8rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.negativeOpac};
  position: relative;
`;

export const LogoShadow = styled(FaUser)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.neutralOpac};
  position: absolute;
  left: 7px;
`;

export const Title = styled.div`
  font-size: 1.6rem;
`;

export const AppVersion = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
`;

export const InfoMessageContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 270px;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 7px;
  position: relative;
  line-height: 1.3rem;
  font-family: "Inconsolata", monospace;
`;

export const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
  color: ${({ theme }) => theme.textLight};
  position: absolute;
  top: 7px;
  right: 7px;
  font-size: 0.8rem;
`;

export const InfoIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.warning};
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SubMessage = styled.div`
  line-height: 1.1rem;
  font-size: 0.9rem;
  text-align: justify;
  text-justify: inter-word;
  color: ${({ theme }) => theme.textLight};
`;
