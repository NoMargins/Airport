import {
	SET_CONTENT,
	SET_USERINPUT,
	SET_DATE,
	SET_DIRECTION,
} from './search.actions';

const initialData = {
	flightsList: [],
	direction: null,
	searchRequest: '',
	date: new Date(),
};

const searchReducer = (state = initialData, action) => {
	switch (action.type) {
		case SET_CONTENT:
			return {
				...state,
				flightsList: action.payload.flightsList,
			};
		case SET_USERINPUT:
			return {
				...state,
				searchRequest: action.payload.userInput,
			};
		case SET_DIRECTION:
			return {
				...state,
				direction: action.payload.direction,
			};
		case SET_DATE:
			return {
				...state,
				date: new Date(action.payload.date),
			};
		default:
			return state;
	}
};

export default searchReducer;
