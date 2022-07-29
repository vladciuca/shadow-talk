import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { UserBackground } from "./UserIcon.styles";

export const UserIcon = ({
  bgHeightAndWidth,
  iconSize,
  // iconColor,
  iconMargin,
}) => {
  return (
    <>
      <UserBackground
        bgHeightAndWidth={bgHeightAndWidth}
        iconSize={iconSize}
        // iconColor={iconColor}
        iconMargin={iconMargin}
      >
        <span>
          <FaUserAlt />
        </span>
      </UserBackground>
    </>
  );
};
