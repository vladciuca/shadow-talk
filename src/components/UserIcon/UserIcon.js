import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { UserBackground } from "./UserIcon.styles";

const UserIcon = ({ bgHeightAndWidth, iconSize, iconMargin, user }) => {
  return (
    <>
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
    </>
  );
};

export default UserIcon;
