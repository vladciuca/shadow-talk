import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MdOutlineInsertEmoticon,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import { RiEmotionHappyLine, RiEmotionNormalLine } from "react-icons/ri";
import {
  FeedbackContainer,
  UserName,
  Icon,
  UserInput,
  UserExperience,
  UserExperienceInput,
  RadioLabel,
  ButtonContainer,
  Button,
} from "./AppFeedback.styles";

const AppFeedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hkxtjlk",
        "template_kfw3579",
        form.current,
        "KL3vNnR5nIGq8WNsR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <FeedbackContainer ref={form} onSubmit={sendEmail}>
      <UserName>
        <Icon>
          <MdOutlineAlternateEmail />
        </Icon>
        <input type="text" placeholder="name" name="user_name" />
      </UserName>
      <UserInput
        rows="10"
        placeholder="Help us improve your experience! Tell us how you feel about our app."
        name="message"
        required
      />
      <UserExperience>
        <UserExperienceInput>
          <input type="radio" id="great" name="ux" value="great" required />
          <RadioLabel htmlFor="great">
            <MdOutlineInsertEmoticon />
          </RadioLabel>
        </UserExperienceInput>
        <UserExperienceInput>
          <input type="radio" id="good" name="ux" value="good" />
          <RadioLabel htmlFor="good">
            <RiEmotionHappyLine />
          </RadioLabel>
        </UserExperienceInput>
        <UserExperienceInput>
          <input type="radio" id="bad" name="ux" value="bad" />
          <RadioLabel htmlFor="bad">
            <RiEmotionNormalLine />
          </RadioLabel>
        </UserExperienceInput>
      </UserExperience>

      <ButtonContainer>
        <Button type="submit">Send Feedback</Button>
      </ButtonContainer>
    </FeedbackContainer>
  );
};

export default AppFeedback;
