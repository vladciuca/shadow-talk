import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsCheckLg, BsExclamationLg } from "react-icons/bs";
import { IconBackground } from "components";
import {
  HomeHeaderContainer,
  Header,
  Title,
  SubTitle,
  SubTitleItem,
  Icon,
  HomeAboutLink,
  Spacer,
} from "./HomeHeader.styles";

const HomeHeader = ({ nrOfChats, nrOfResolvedChats, nrOfIntegratingChats }) => {
  let navigate = useNavigate();

  return (
    <HomeHeaderContainer>
      <Header>
        <Title>
          {nrOfChats < 1 ? "No" : nrOfChats} Chat
          {nrOfChats === 1 ? null : "s"}
        </Title>
        {/* <SubTitle>
          {nrOfResolvedChats < 1 ? null : (
            <SubTitleItem>
              {nrOfResolvedChats}
              <Icon>
                <IconBackground size={0.8} icon={<BsCheckLg />} />
              </Icon>
              Resolved
            </SubTitleItem>
          )}
          {nrOfResolvedChats >= 1 && nrOfIntegratingChats >= 1 ? (
            <Spacer>,</Spacer>
          ) : null}
          {nrOfIntegratingChats < 1 ? null : (
            <SubTitleItem>
              {nrOfIntegratingChats}
              <Icon>
                <IconBackground size={0.8} icon={<BsExclamationLg />} />
              </Icon>
              Integrating...
            </SubTitleItem>
          )}
        </SubTitle> */}
      </Header>
      <HomeAboutLink onClick={() => navigate("/about")}>
        <AiOutlineQuestionCircle />
      </HomeAboutLink>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
