import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { UserIconContainer, UserBackground } from "./UserIcon.styles";

const UserIcon = ({ bgHeightAndWidth, iconSize, iconMargin, user }) => {
  return (
    <UserIconContainer>
      <UserBackground
        bgHeightAndWidth={bgHeightAndWidth}
        iconSize={iconSize}
        iconMargin={iconMargin}
        user={user}
      >
        <span>
          <FaUserAlt />
        </span>
      </UserBackground>
    </UserIconContainer>
  );
};

export default UserIcon;
