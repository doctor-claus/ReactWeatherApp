import { FETCH_WEATHER } from '../actions/index';
export default function(state = null, action){
	if(action.type == FETCH_WEATHER && action.payload.request.statusText == 'Not Found'){
		return "City Not Found";
	}
	return null;
}