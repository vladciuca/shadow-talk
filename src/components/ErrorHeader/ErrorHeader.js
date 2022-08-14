import React from "react";
import { BackToHome } from "../../components";
import { ErrorHeaderContainer, ErrorTitle } from "./ErrorHeader.styles";

const ErrorHeader = () => {
  return (
    <ErrorHeaderContainer>
      <BackToHome />
      <ErrorTitle>Go Back</ErrorTitle>
    </ErrorHeaderContainer>
  );
};

export default ErrorHeader;
