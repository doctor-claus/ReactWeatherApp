import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}
	onInputChange(event){
		this.setState({term: event.target.value});
	}
	formSubmit(event){
		event.preventDefault(); //To prevent page reload after clicking enter or submit button
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}
	render(){
		let error = null;
		if(this.props.error == 'City Not Found'){
			error = <div className = 'error'>City Not Found!</div>
		}
		return (
			<div className = 'frm'>
				<form onSubmit = {this.formSubmit} className ='input-group'>
					<input 
						placeholder= "Get a five-day forecast of your favorite cities"
						className = "form-control"
						value = {this.state.term}
						onChange = {this.onInputChange} //Callback has reference to this, so we need to bind 'this' in line 6
					/>
				</form>
				{error}
			</div>
		);
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}
function mapStateToProps(state){
	return { error: state.error };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar); // null is passed as because mapDispatchToProps is kept as second argument