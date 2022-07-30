import React from "react";
import { ErrorPageHeader } from "../components/ErrorPageHeader/ErrorPageHeader";
import {
  Screen,
  ScreenHeader,
  ScreenContent,
  ScreenOverflow,
  ScreenFooter,
} from "../components/UI/UI.styles";

const ErrorPage = () => {
  return (
    <Screen>
      <ScreenHeader>
        <ErrorPageHeader />
      </ScreenHeader>
      <ScreenContent>
        <ScreenOverflow>Page Not Found</ScreenOverflow>
      </ScreenContent>
      <ScreenFooter></ScreenFooter>
    </Screen>
  );
};

export default ErrorPage;
