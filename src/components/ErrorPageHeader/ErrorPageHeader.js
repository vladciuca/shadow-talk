import React from "react";
import { BackToHome } from "../BackToHome/BackToHome";
import {
  ErrorPageHeaderContainer,
  ErrorPageTitle,
} from "./ErrorPageHeader.styles";

export const ErrorPageHeader = () => {
  return (
    <ErrorPageHeaderContainer>
      <BackToHome />
      <ErrorPageTitle>Go Back</ErrorPageTitle>
    </ErrorPageHeaderContainer>
  );
};
