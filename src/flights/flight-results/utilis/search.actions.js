import { dateSelector, searchDirectionSelector } from './search.selectors';
import moment from 'moment';
import fetchFlightsByDate from './flights.gateway';

export const SET_CONTENT = 'FLIGHTS/SET_CONTENT';
export const SET_DATE = 'FLIGHTS/SET_DATE';
export const SET_DIRECTION = 'FLIGHTS/SET_DIRECTION';
export const SET_USERINPUT = 'FLIGHTS/SET_USERINPUT';
export const SET_UPLOAD_STATUS = 'FLIGHTS/SET_UPLOAD_STATUS';

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

const setFlightsListReceived = (flightsList, direction) => {
	const neededList = [];

	if (direction === 'arrival') {
		flightsList.body.arrival
			.sort(function (a, b) {
				return (
					new Date(a.timeLandFact).getTime() -
					new Date(b.timeLandFact).getTime()
				);
			})
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
			.sort(function (a, b) {
				return (
					new Date(a.timeDepFact).getTime() - new Date(b.timeDepFact).getTime()
				);
			})
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

const setUploadStatus = (isPending, error) => {
	return {
		type: SET_UPLOAD_STATUS,
		payload: { isPending, error },
	};
};

export const fetchAction = () => {
	const thunkAction = function (dispatch, getState) {
		const direction = searchDirectionSelector(getState());
		const dateSaved = moment(dateSelector(getState())).format('DD-MM-YYYY');

		dispatch(setUploadStatus(true));
		fetchFlightsByDate(dateSaved).then((data) => {
			dispatch(setUploadStatus(false, null));
			console.log(data);
			dispatch(setFlightsListReceived(data, direction));
		});
	};
	return thunkAction;
};
