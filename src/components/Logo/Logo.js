import React from "react";
import { IoMan } from "react-icons/io5";
import { LogoContainer, PastSelfIcon, PresentSelfIcon } from "./Logo.styles";

export const Logo = () => (
  <>
    <LogoContainer>
      <PastSelfIcon>
        <IoMan size="12rem" />
      </PastSelfIcon>
      <PresentSelfIcon>
        <IoMan size="12rem" />
      </PresentSelfIcon>
    </LogoContainer>
  </>
);
