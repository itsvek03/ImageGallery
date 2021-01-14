import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function SliderContainer({ likesimg, data }) {
	const valueChange = (e, value) => {
		likesimg(data, value);
	};
	return (
		<div>
			<Typography id="discrete-slider-always" gutterBottom>
				Likes
			</Typography>
			<Slider
				defaultValue={51}
				max={2000}
				valueLabelDisplay="on"
				onChange={valueChange}
				aria-labelledby="range-slider"
			/>
		</div>
	);
}
