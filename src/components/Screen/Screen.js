import React from "react";
import {
  ScreenContainer,
  ScreenHeader,
  ScreenContent,
  ScreenOverflow,
  ScreenFooter,
} from "./Screen.styles";

export const Screen = ({ header, content, footer, chatContent }) => (
  <ScreenContainer>
    <ScreenHeader>{header}</ScreenHeader>
    <ScreenContent chatContent={chatContent}>
      <ScreenOverflow chatContent={chatContent}>{content}</ScreenOverflow>
    </ScreenContent>
    <ScreenFooter>{footer}</ScreenFooter>
  </ScreenContainer>
);
