import {
	dateSelector,
	searchDirectionSelector,
	searchRequestSelector,
} from './search.selectors';
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

const setFetchResult = (neededList) => {
	return {
		type: SET_CONTENT,
		payload: {
			flightsList: neededList,
		},
	};
};

const setFlightsListReceived = (flightList, direction) => {
	const neededList = [];
	function findValue(obj, value) {
		if (Array.isArray(obj)) {
			for (let i = 0; i < obj.length; i++) {
				if (findValue(obj[i], value)) {
					return true;
				}
			}
		} else if (typeof obj === 'object') {
			for (const prop in obj) {
				if (findValue(obj[prop], value)) {
					return true;
				}
			}
		} else if (
			typeof obj === 'string' &&
			obj.toLowerCase().includes(value.toLowerCase())
		) {
			return true;
		}

		return false;
	}
	const thunkAction = function (dispatch, getState) {
		const searchDate = dateSelector(getState());
		const userInput = searchRequestSelector(getState());
		if (direction === 'arrival') {
			const firstFilter = flightList.body.arrival
				.filter((flight) => {
					const flightDate = new Date(flight.timeArrShedule);
					return (
						flightDate.getDate() === searchDate.getDate() &&
						flightDate.getMonth() === searchDate.getMonth() &&
						flightDate.getFullYear() === searchDate.getFullYear()
					);
				})
				.reduce((acc, flight) => {
					const existingFlightIndex = acc.findIndex(
						(existingFlight) => existingFlight.fltNo === flight.fltNo
					);
					if (existingFlightIndex === -1) {
						acc.push(flight);
					} else {
						const existingFlight = acc[existingFlightIndex];
						if (existingFlight.timeLandFact < flight.timeLandFact) {
							acc[existingFlightIndex] = flight;
						}
					}
					return acc;
				}, []);

			const secondFilter =
				userInput.length > 0
					? firstFilter.filter((flight) => findValue(flight, userInput))
					: firstFilter;

			secondFilter
				.sort((a, b) => a.timeArrShedule - b.timeArrShedule)
				.map((el) => {
					const { ID, term, timeLandFact, timeArrShedule, codeShareData } = el;
					const shortId = el['airportFromID.IATA'];
					const dest = el['airportFromID.city_en'];
					const flightNo = codeShareData.map((el) => el.codeShare);
					const airlineLogo = codeShareData.map(
						({ airline }) => airline.en.logoSmallName
					);
					const airlineName = codeShareData.map(
						({ airline }) => airline.en.name
					);
					const flightDetails = codeShareData.map(
						({ airline }) => airline.en.about
					);

					neededList.push({
						id: ID,
						shortId: shortId,
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
			const firstFilter = flightList.body.departure
				.filter((flight) => {
					const flightDate = new Date(flight.timeDepShedule);
					return (
						flightDate.getDate() === searchDate.getDate() &&
						flightDate.getMonth() === searchDate.getMonth() &&
						flightDate.getFullYear() === searchDate.getFullYear()
					);
				})
				.reduce((acc, flight) => {
					const existingFlightIndex = acc.findIndex(
						(existingFlight) => existingFlight.fltNo === flight.fltNo
					);
					if (existingFlightIndex === -1) {
						acc.push(flight);
					} else {
						const existingFlight = acc[existingFlightIndex];
						if (existingFlight.timeDepFact < flight.timeDepFact) {
							acc[existingFlightIndex] = flight;
						}
					}
					return acc;
				}, []);

			const secondFilter =
				userInput.length > 0
					? firstFilter.filter((flight) => findValue(flight, userInput))
					: firstFilter;

			secondFilter
				.sort(
					(a, b) =>
						new Date(a.timeDepShedule).getTime() -
						new Date(b.timeDepShedule).getTime()
				)
				.map((el) => {
					const { ID, term, timeDepShedule, timeDepFact, codeShareData } = el;
					const shortId = el['airportToID.IATA'];
					const dest = el['airportToID.city_en'];
					const flightNo = codeShareData.map((el) => el.codeShare);
					const airlineLogo = codeShareData.map(
						({ airline }) => airline.en.logoSmallName
					);
					const airlineName = codeShareData.map(
						({ airline }) => airline.en.name
					);
					const flightDetails = codeShareData.map(
						({ airline }) => airline.en.about
					);

					neededList.push({
						id: ID,
						shortId: shortId,
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
		dispatch(setFetchResult(neededList));
		setTimeout(() => {
			dispatch(setSearchingRequest(''));
		}, 10000);
	};
	return thunkAction;
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
