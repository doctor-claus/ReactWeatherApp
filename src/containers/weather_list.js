import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import Cancel from './cancel';
class WeatherList extends Component{
	constructor(props){
		super(props);
	}
	renderWeather(cityData){
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lat = cityData.city.coord.lat;
		const lon = cityData.city.coord.lon;
		return ( 
			<tr key = {cityData.city.name} className = 'city'>
				<td><GoogleMap lat = {lat} lon = {lon} /></td>
				<td><Chart data = {temps} color = 'orange' units = "K" /></td>
				<td><Chart data = {pressures} color = 'green' units = "hPa" /></td>
				<td><Chart data = {humidities} color = 'black' units = "%" /></td>
				<td><Cancel city = {cityData} className = 'cancel'/></td>
			</tr>
		);
	}
	render(){
		return ( 
			<div>
				<table className = "table table-hover">
					<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			</div>
		);
	}
}
function mapStateToProps(state){
	return { weather: state.weather, error: state.error };
}
export default connect(mapStateToProps)(WeatherList);