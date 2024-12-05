import React from "react";
import About from "./About";
import HeroSection from "./HeroSection";
import HowItWork from "./HowItWork";
import WhatWeDo from "./WhatWeDo";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <HowItWork></HowItWork>
      <WhatWeDo></WhatWeDo>
      <Stats></Stats>
    </div>
  );
};

export default Home;
