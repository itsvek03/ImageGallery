import axios from "axios";
import { FETCH_IMAGES, GLOBAL_IMAGES } from "./types";

export function fetcImages(category = "tree") {
	return (dispatch) => {
		axios
			.get(
				`https://pixabay.com/api/?key=19402242-1dcafe4236724ab76b8602529&q=yellow+${category}&image_type=photo&pretty=true`
			)
			.then((response) => {
				let data = response.data.hits;
				dispatch({ type: GLOBAL_IMAGES, payload: data });
				dispatch({ type: FETCH_IMAGES, payload: data });
			});
	};
}

export function fetchImagesBylikes(data, likes) {
	return (dispatch) => {
		let newData = data.filter((imgdata) => imgdata.likes > likes);
		dispatch({
			type: FETCH_IMAGES,
			payload: newData,
		});
	};
}
