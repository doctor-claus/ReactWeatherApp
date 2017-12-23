import axios from 'axios';
const API_KEY = '5930a2c8558b0f67c26b721660a71eec';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
	const url = ROOT_URL + '&q=' + city;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request // if payload is a promise, redux-promise unwraps the promise and returns a new payload
	}
}
export const DELETE_WEATHER = 'DELETE_WEATHER';
export function deleteWeather(city){
	return {
		type: DELETE_WEATHER,
		payload: city
	}
}