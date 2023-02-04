import { GET_MENU, SET_CONTENT } from './header.actions';
import headerItemsList from './dropdown-menu/header-items-list.js';

const initialData = {
	headerItemsList,
};

const headerReducer = (state = initialData, action) => {
	switch (action.type) {
		case SET_CONTENT:
			return {
				...state,
				frame: action.payload.chosenFrame,
			};
		case GET_MENU:
			return {
				...state,
			};

		default:
			return state;
	}
};

export default headerReducer;
