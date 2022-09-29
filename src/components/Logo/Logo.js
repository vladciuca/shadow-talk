import React from "react";
import { IoIosMan } from "react-icons/io";
import { LogoContainer, PastSelfIcon, PresentSelfIcon } from "./Logo.styles";

const Logo = () => (
  <>
    <LogoContainer>
      <PastSelfIcon>
        <IoIosMan size="12rem" />
      </PastSelfIcon>
      <PresentSelfIcon>
        <IoIosMan size="12rem" />
      </PresentSelfIcon>
    </LogoContainer>
  </>
);

export default Logo;
