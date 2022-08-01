import React from "react";
import { Screen } from "../components/Screen/Screen";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeFooter } from "../components/HomeFooter/HomeFooter";

const Home = () => {
  return (
    <>
      <Screen header={<HomeHeader />} footer={<HomeFooter />} />
    </>
  );
};

export default Home;
