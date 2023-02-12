import {
	searchRequestSelector,
	searchDirectionSelector,
} from './search.selectors';
import fetchFlightsByDate from './flights.gateway.js';

export const SET_CONTENT = 'FLIGHTS/SET_CONTENT';
export const SET_DATE = 'FLIGHTS/SET_DATE';
export const SET_DIRECTION = 'FLIGHTS/SET_DIRECTION';
export const SET_USERINPUT = 'FLIGHTS/SET_USERINPUT';

export const setSearchingRequest = (userInput) => {
	return {
		type: SET_USERINPUT,
		payload: {
			userInput,
		},
	};
};

export const setSearchDirection = (direction) => {
	return {
		type: SET_DIRECTION,
		payload: { direction },
	};
};

export const setDate = (date) => {
	return {
		type: SET_DATE,
		payload: { date },
	};
};
const flightsListReceived = (flightsList, direction) => {
	let neededList = [];
	if (direction === 'arrival') {
		flightsList.body.arrival
			.sort((a, b) => new Date(a.timeArrShedule) - new Date(b.timeArrShedule))
			.map((el) => {
				const { ID, term, timeLandFact, timeArrShedule, codeShareData } = el;
				const dest = el['airportFromID.city_en'];
				const flightNo = codeShareData.map((el) => el.codeShare);
				const airlineLogo = codeShareData.map(
					({ airline }) => airline.en.logoSmallName
				);
				const airlineName = codeShareData.map(({ airline }) => airline.en.name);
				const flightDetails = codeShareData.map(
					({ airline }) => airline.en.about
				);

				neededList.push({
					id: ID,
					terminal: term,
					flightNo: flightNo,
					airlineLogo: airlineLogo,
					airlineName: airlineName,
					sheduled: new Date(timeArrShedule),
					timeFact: new Date(timeLandFact),
					destination: dest,
					details: flightDetails,
				});
			});
	}
	if (direction === 'departure') {
		flightsList.body.departure
			.sort((a, b) => new Date(a.timeArrShedule) - new Date(b.timeArrShedule))
			.map((el) => {
				const { ID, term, timeDepShedule, timeDepFact, codeShareData } = el;
				const dest = el['airportToID.city_en'];
				const flightNo = codeShareData.map((el) => el.codeShare);
				const airlineLogo = codeShareData.map(
					({ airline }) => airline.en.logoSmallName
				);
				const airlineName = codeShareData.map(({ airline }) => airline.en.name);
				const flightDetails = codeShareData.map(
					({ airline }) => airline.en.about
				);

				neededList.push({
					id: ID,
					terminal: term,
					flightNo: flightNo,
					airlineLogo: airlineLogo,
					airlineName: airlineName,
					sheduled: new Date(timeDepShedule),
					timeFact: new Date(timeDepFact),
					destination: dest,
					details: flightDetails,
				});
			});
	}
	return {
		type: SET_CONTENT,
		payload: {
			flightsList: neededList,
		},
	};
};

export const fetchFlightsList = (type) => {
	const thunkAction = function (dispatch) {
		fetchFlightsByDate('11-01-2022').then((flightsList) =>
			dispatch(flightsListReceived(flightsList, type))
		);
	};
	return thunkAction;
};
