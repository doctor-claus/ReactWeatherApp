import { FETCH_WEATHER } from '../actions/index';
import { DELETE_WEATHER } from '../actions/index'
export default function(state = [], action){
	if(action.type == FETCH_WEATHER && action.payload.request.statusText == 'Not Found'){
		return  state;
	}
	switch(action.type){
		case FETCH_WEATHER: return state.concat([ action.payload.data ]);
		case DELETE_WEATHER: {
			for(let i = 0; i < state.length; i++){
				if(state[i].city.name == action.payload.city.name){
					return state.slice(0, i).concat(state.slice(i+1));
				}
			}
		}
	}
	return state;
}
// Never mutate and return state, always create new state and return that state
//state.concat() instead of state.push() for the above return code