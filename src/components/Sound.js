import React, { useState } from "react";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import ReactHowler from "react-howler";

const Sound = ({ src, name }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value, 10) / 100);
  };

  return (
    <div className={playing ? "sound solid-sound" : "sound opaque-sound"}>
      <h2 className="sound-name">{name}</h2>
      <ReactHowler
        src={src}
        playing={playing}
        html5={true}
        loop={true}
        volume={volume}
        style={{ dipslay: "none" }}
      />
      <div className="controls">
        {!playing ? (
          <PlayCircleFilledRoundedIcon
            className="play-pause-btn"
            onClick={() => {
              setPlaying(true);
            }}
          />
        ) : (
          <PauseCircleFilledRoundedIcon
            className="play-pause-btn"
            onClick={() => {
              setPlaying(false);
            }}
          />
        )}

        <div className="volume-controls">
          <input
            type="range"
            className="volume-slider"
            max="100"
            defaultValue="75"
            onChange={handleVolumeChange}
          />
        </div>
        {volume > 0.5 ? (
          <VolumeUpRoundedIcon className="volume-icon" />
        ) : volume <= 0.5 && volume > 0 ? (
          <VolumeDownRoundedIcon className="volume-icon" />
        ) : (
          <VolumeOffRoundedIcon className="volume-icon" />
        )}
      </div>
    </div>
  );
};

export default Sound;
