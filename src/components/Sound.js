import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";

const Sound = ({ src, name }) => {
  let id1;
  const sound = new Howl({
    src: src,
    html5: true,
    volume: 0.75,
  });

  const handleVolumeChange = (e) => {
    sound.volume(parseInt(e.target.value, 10) / 100);
  };

  return (
    <div className="sound">
      <p className="sound-name">{name}</p>
      <div className="controls">
        <PlayCircleFilledRoundedIcon
          className="play-pause-btn"
          onClick={() => {
            sound.play();
          }}
        />

        <div className="volume-controls">
          <input
            type="range"
            className="volume-slider"
            max="100"
            defaultValue="75"
            onChange={handleVolumeChange}
          />
        </div>
        <PauseCircleFilledRoundedIcon
          className="play-pause-btn"
          onClick={() => {
            sound.pause();
          }}
        />
      </div>
    </div>
  );
};

export default Sound;