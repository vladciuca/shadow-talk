import React from "react";
import { Screen } from "../components/Screen/Screen";
import { ErrorPageContent } from "../components/ErrorPageContent/ErrorPageContent";
import { ErrorPageHeader } from "../components/ErrorPageHeader/ErrorPageHeader";

const ErrorPage = () => {
  return <Screen header={<ErrorPageHeader />} content={<ErrorPageContent />} />;
};

export default ErrorPage;
