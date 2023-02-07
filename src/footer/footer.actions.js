export const GET_FOOTER_ITEMS = 'FOOTER/GET_FOOTER_ITEMS';
export const SET_CONTENT = 'FOOTER/SET_CONTENT';

export const itemsReceived = () => {
	return {
		type: GET_FOOTER_ITEMS,
	};
};

export const setContent = (sectionID) => {
	return {
		type: SET_CONTENT,
		payload: {
			sectionID,
		},
	};
};
