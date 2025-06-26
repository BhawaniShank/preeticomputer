import React from "react";
import Header from "../components/About/Header";
import AboutMain from "../components/About/AboutMain";
import WhoWeAre from "../components/About/WhoWeAre.jsx";
import SeamlessRepairsSection from "../components/About/SeamlessRepairsSection";
import ExceptionalService from "../components/About/ExceptionalService";
import Sideimg from "../components/About/Sideimg";

function About() {
  return (
    <div >
      <Header />
      {/* <Sideimg /> */}
      <div className="bg-white w-full h-full">
      <WhoWeAre />
      </div>
      <AboutMain />
      <SeamlessRepairsSection />
      <ExceptionalService />
    </div>
  );
}

export default About;