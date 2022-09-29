import React from "react";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/chats")}>Go to Chats</button>
      <Spline scene="https://prod.spline.design/wwP9ftETBzWL8ilx/scene.splinecode" />
    </>
  );
};

export default Landing;
