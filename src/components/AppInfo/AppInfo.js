import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import {
  AppInfoContainer,
  FlagShipLogo,
  AppTitle,
  Logo,
  LogoShadow,
  Title,
  AppVersion,
  InfoMessageContainer,
  Message,
  SubMessage,
  InfoIcon,
  CloseButton,
} from "./AppInfo.styles";

const AppInfo = () => {
  const [showInfoMessage, setShowInfoMessage] = useState(true);
  return (
    <AppInfoContainer>
      <FlagShipLogo>mind-dev@tools/</FlagShipLogo>
      <AppTitle>
        <Logo></Logo>
        <LogoShadow></LogoShadow>
        <Title>
          Self-Chat Journal<AppVersion>1.0</AppVersion>
        </Title>
      </AppTitle>
      {showInfoMessage ? (
        <InfoMessageContainer>
          <CloseButton onClick={() => setShowInfoMessage(false)}>X</CloseButton>
          <Message>
            <InfoIcon>
              <AiFillWarning />
            </InfoIcon>
            Your data does not persist across devices!
          </Message>
          <SubMessage>
            The current version of the app uses local storage to store your
            data.
          </SubMessage>
        </InfoMessageContainer>
      ) : null}
    </AppInfoContainer>
  );
};

export default AppInfo;
