import React from "react";
import { OptionsContainer, Option } from "./OptionsDropdown.styles";

export const OptionsDropdown = ({ options }) => {
  return (
    <OptionsContainer>
      {options.map((option, i) => (
        <Option key={i} onClick={() => option.function}>
          {option.text}
          {option.icon}
        </Option>
      ))}
    </OptionsContainer>
  );
};
