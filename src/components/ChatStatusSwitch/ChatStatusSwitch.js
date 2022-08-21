import React from "react";
import Switch from "react-switch";
import { AiFillCheckCircle, AiFillQuestionCircle } from "react-icons/ai";
import { theme } from "../../theme";
import {
  SwitchTextUnchecked,
  SwitchTextChecked,
  SwitchHandleIcon,
} from "./ChatStatusSwitch.styles";

const ChatStatusSwitch = ({
  resolve,
  toggleResolve,
  chatStatus,
  autoTyping,
}) => {
  return (
    <Switch
      disabled={autoTyping}
      checked={resolve}
      onChange={toggleResolve}
      height={20}
      width={100}
      handleDiameter={20}
      onColor={theme.positive}
      uncheckedIcon={<SwitchTextUnchecked>Integrate</SwitchTextUnchecked>}
      uncheckedHandleIcon={
        <SwitchHandleIcon>
          <AiFillQuestionCircle color="gray" />
        </SwitchHandleIcon>
      }
      checkedIcon={<SwitchTextChecked>{chatStatus}</SwitchTextChecked>}
      checkedHandleIcon={
        <SwitchHandleIcon>
          <AiFillCheckCircle color={theme.positive} />
        </SwitchHandleIcon>
      }
    />
  );
};

export default ChatStatusSwitch;
