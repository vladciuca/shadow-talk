import React from "react";
import { ErrorPageContent } from "../components/ErrorPageContent/ErrorPageContent";
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
        <ScreenOverflow>
          <ErrorPageContent />
        </ScreenOverflow>
      </ScreenContent>
      <ScreenFooter></ScreenFooter>
    </Screen>
  );
};

export default ErrorPage;
