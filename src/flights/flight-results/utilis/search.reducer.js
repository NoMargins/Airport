import {
	SET_CONTENT,
	SET_USERINPUT,
	SET_DATE,
	SET_DIRECTION,
	SET_UPLOAD_STATUS,
} from './search.actions';

const thisDateInPast = new Date().setFullYear(new Date().getFullYear() - 2);

const initialData = {
	flightsList: [],
	direction: 'departure',
	searchRequest: '',
	date: new Date(thisDateInPast),
	isPending: false,
	error: null,
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
		case SET_UPLOAD_STATUS:
			return {
				...state,
				isPending: action.payload.isPending,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default searchReducer;
