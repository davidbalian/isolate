import React from "react";
import Sound from "./Sound";

const Home = () => {
  const prefix = "https://cdn.jsdelivr.net/gh/davidbalian/isolate-sounds/";

  return (
    <div>
      <div className="sounds">
        <Sound src={prefix + "rain-light.wav"} name="rain" />
        <Sound src={prefix + "fire.wav"} name="fire" />
        <Sound src={prefix + "birds.wav"} name="birds" />
        <Sound src={prefix + "waves-heavy.wav"} name="heavy waves" />
        <Sound src={prefix + "cafe.wav"} name="cafe" />
      </div>
    </div>
  );
};

export default Home;
