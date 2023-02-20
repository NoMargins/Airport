const flightsUrl = 'https://api.iev.aero/api/flights';

export default function fetchFlightsByDate(date) {
	return fetch(`${flightsUrl}/${date}`).then((res) => {
		if (!res.ok) {
			throw new Error('Failed to load the flights data');
		}
		return res.json();
	});
}

//
