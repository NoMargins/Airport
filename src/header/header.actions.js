export const GET_MENU = 'HEADER/GET_MENU';
export const SET_CONTENT = 'HEADER/SET_CONTENT'

export const menuReceived = () => {
	return {
		type: GET_MENU,
	};
};

export const setContent = (chosenFrame) => {
	return {
		type: SET_CONTENT,
		payload: {
			chosenFrame,
		},
	};
}