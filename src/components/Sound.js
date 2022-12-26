import React, { useState } from "react";
import { Howl } from "howler";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';

const Sound = ({ src, name }) => {
	const [playing, setPlaying] = useState(0);

	const sound = new Howl({
		src: src,
		html5: true,
		volume: .75	
	});

	const handleVolumeChange = (e) => {
		sound.volume(parseInt(e.target.value, 10) / 100);
	}

	const togglePlay = () => {
		if (sound.playing()) {
			sound.pause();
		} else {
			sound.play();
		}
	}

	return (
		<div className='sound'>
			<p className='sound-name'>{name}</p>
			<div className='play-pause-container' onClick={() => {
				togglePlay();
				playing ? setPlaying(0) : setPlaying(1);}}>
				{playing ? <PauseCircleFilledRoundedIcon /> : <PlayCircleFilledRoundedIcon />}
			</div>
			<div className='volume-controls'>
				<input type="range" className="volume-slider" max="100" defaultValue="75" onChange={handleVolumeChange}/>
			</div>
		</div>
	);
};

export default Sound;
