import React from "react";
import { ErrorContainer, ErrorCode, ErrorMessage } from "./ErrorContent.styles";

const ErrorContent = () => (
  <ErrorContainer>
    <ErrorCode>404</ErrorCode>
    <ErrorMessage>Page Not Found</ErrorMessage>
  </ErrorContainer>
);

export default ErrorContent;
