import React from "react";
import { Screen, ErrorHeader, ErrorContent } from "../../components";

const Error = () => {
  return <Screen header={<ErrorHeader />} content={<ErrorContent />} />;
};

export default Error;
