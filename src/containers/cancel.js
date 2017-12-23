import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
const Cancel = (props) => { 
     return(
         <img src="https://png.icons8.com/metro/26/000000/delete-sign.png" onClick = {event => props.deleteWeather(props.city)} />
    );
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ deleteWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(Cancel);