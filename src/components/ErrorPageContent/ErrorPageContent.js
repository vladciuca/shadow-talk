import React from "react";
import {
  ErrorPageContainer,
  ErrorCode,
  ErrorMessage,
} from "./ErrorPageContent.styles";

export const ErrorPageContent = () => (
  <ErrorPageContainer>
    <ErrorCode>404</ErrorCode>
    <ErrorMessage>Page Not Found</ErrorMessage>
  </ErrorPageContainer>
);
