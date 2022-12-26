import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

const Sound = ({ src, name }) => {
	const [volume, setVolume] = useState(0.75);

	const sound = new Howl({
		src: src,
		html5: true
	});

	useEffect(() => {
		Howler.volume(volume);
	}, [volume, setVolume]);

	return (
		<div className='sound'>
			<p className='sound-name'>{name}</p>
			<div className='play-pause-container'>
				<button
					className='play-pause play'
					onClick={() => {
						sound.play();
					}}
				>
					play
				</button>
				<button
					className='play-pause pause'
					onClick={() => {
						sound.pause();
					}}
				>
					pause
				</button>
			</div>
			<div className='volume-controls'>
				<div className='volume-graph'>
					<div
						className={`volume-bar quarter ${
							volume === 0.25 || volume === 0.5 || volume === 0.75 || volume === 1
								? "active"
								: null
						}`}
						onClick={() => {
							setVolume(0.25);
						}}
					></div>
					<div
						className={`volume-bar half ${
							volume === 0.5 || volume === 0.75 || volume === 1 ? "active" : null
						}`}
						onClick={() => {
							setVolume(0.5);
						}}
					></div>
					<div
						className={`volume-bar three-quarters ${
							volume === 0.75 || volume === 1 ? "active" : null
						}`}
						onClick={() => {
							setVolume(0.75);
						}}
					></div>
					<div
						className={`volume-bar full ${volume === 1 ? "active" : null}`}
						onClick={() => {
							setVolume(1);
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Sound;
