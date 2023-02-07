import { GET_FOOTER_ITEMS, SET_CONTENT } from './footer.actions';
import footerItems from './footer-items-list.js';

const initialData = {
	footerItems,
};

const footerReducer = (state = initialData, action) => {
	switch (action.type) {
		case SET_CONTENT:
			const chosenSection = state.filter(
				(el) => el.id === action.payload.sectionID
			);
			return {
				...state,
				sectionItems: chosenSection.items,
			};
		case GET_FOOTER_ITEMS:
			return {
				...state,
			};

		default:
			return state;
	}
};

export default footerReducer;
