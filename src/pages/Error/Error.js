import React from "react";
import {
  Screen,
  ErrorHeader,
  ErrorContent,
  AppInfo,
  AppFeedback,
  Logo,
} from "components";

const Error = () => {
  return (
    <>
      <AppInfo />
      <AppFeedback />
      <Logo />
      <Screen header={<ErrorHeader />} content={<ErrorContent />} />
    </>
  );
};

export default Error;
