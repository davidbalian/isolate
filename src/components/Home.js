import React from "react";
import Sound from "./Sound";

const Home = () => {
  const prefix = "https://isolatesounds.s3.eu-central-1.amazonaws.com/";

  return (
    <div className="home">
      <div className="main-functionality">
        <div className="sounds">
          <Sound src={prefix + "brown-noise.mp3"} name="brown noise" />
          <Sound src={prefix + "rain-light-long.mp3"} name="rain" />
          <Sound src={prefix + "fire-long.mp3"} name="fire" />
          <Sound src={prefix + "birds-long.mp3"} name="birds" />
          <Sound src={prefix + "heavy-waves-long.mp3"} name="heavy waves" />
          <Sound src={prefix + "cafe-long.mp3"} name="cafe" />
        </div>
        <div className="text-container">
          <p className="text">
            Click on the play button to play. Adjust the volume using the volume
            slider next to it. Click on the pause button to pause.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
