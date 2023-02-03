const flightsUrl = 'https://api.iev.aero/api/flights';

const fetchFlightsByDate = (date) => {
	return fetch(`${flightsUrl}/${date}`).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Failed to load the flights data');
		}
	});
};

export default fetchFlightsByDate;
