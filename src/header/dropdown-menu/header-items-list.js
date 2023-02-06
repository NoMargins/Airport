import aviasales from '../../img/aviasales-1.jpg';
import hotels from '../../img/hotels-2.jpg';
import vip from '../../img/vip-3.jpg';

const headerItemsList = [
	{
		title: 'For passangers',
		id: 1,
		droppingMenu: {
			leftElem: {
				title: 'Airline tickets',
				text: 'Purchase tickets online',
				buttonText: 'Search',
				img: aviasales,
			},
			rightElem: [
				{
					title: 'Information',
					content: [
						{ title: 'COVID-19', id: 101 },
						{ title: 'Before flight', id: 102 },
						{ title: 'Aviation security', id: 103 },
						{ title: 'Customs control', id: 104 },
						{ title: 'Border control', id: 105 },
						{ title: 'For passangers with disabilities', id: 106 },
						{ title: 'Travelling with animals', id: 107 },
						{ title: 'Airport map', id: 108 },
						{ title: 'Feedback from', id: 109 },
						{ title: 'Contacts', id: 110 },
					],
				},
				{
					title: 'General',
					content: [
						{ title: 'On-line schedule', id: 111 },
						{ title: 'Airport Directors ', id: 112 },
						{ title: 'Parking', id: 113 },
						{ title: 'Baggage', id: 114 },
						{ title: 'Relaxation room', id: 115 },
						{ title: 'Airlines', id: 116 },
						{ title: 'Shop & dine', id: 117 },
						{ title: 'Mastercard Fast Line', id: 118 },
						{ title: 'Feedback from', id: 119 },
					],
				},
			],
		},
	},
	{
		title: 'IEV Services',
		id: 2,
		droppingMenu: {
			leftElem: {
				title: 'Hotels worldwide',
				text: 'Book hotels all over the world at best prices',
				buttonText: 'View',
				img: hotels,
			},
			rightElem: [
				{
					title: 'All services',
					content: [
						{ title: 'COVID-19 testing', id: 201 },
						{ title: 'Priority line', id: 202 },
						{ title: 'Express Line', id: 203 },
						{ title: 'Business lounge', id: 204 },
						{ title: 'VIP service', id: 205 },
						{ title: 'Hotel IEV', id: 206 },
					],
				},
				{
					title: '',
					content: [
						{ title: 'Transfer', id: 207 },
						{ title: 'Baggage wrapping', id: 208 },
						{ title: 'Long-term parking', id: 209 },
						{ title: 'Airline tickets', id: 210 },
						{ title: 'Hotels worldwide', id: 211 },
						{ title: 'Car rental', id: 212 },
					],
				},
			],
		},
	},
	{
		title: 'VIP',
		id: 3,
		droppingMenu: {
			leftElem: {
				title: 'Terminal B',
				text: 'Speed, comfort, confidentiality',
				buttonText: 'Book now',
				img: vip,
			},
			rightElem: [
				{
					title: '',
					content: [
						{ title: 'Terminal B', id: 301 },
						{ title: 'VIP service', id: 302 },
						{ title: 'Transfer', id: 303 },
						{ title: 'Hotel IEV', id: 304 },
						{ title: 'Private flight', id: 305 },
						{ title: 'Fares & Rules', id: 306 },
						{ title: 'Art Gallery', id: 307 },
						{ title: 'Virtual tour', id: 308 },
						{ title: 'Terminal B contacts', id: 309 },
					],
				},
			],
		},
	},
	{
		title: 'Corporate',
		id: 4,
		droppingMenu: {
			leftElem: {
				title: 'Airline tickets',
				text: 'Purchase tickets online',
				buttonText: 'Search',
				img: aviasales,
			},
			rightElem: [
				{
					title: 'Corporate',
					content: [
						{ title: 'Corporate page', id: 401 },
						{ title: 'Ground handling', id: 402 },
						{ title: 'Airport characteristics', id: 403 },
						{ title: 'Education', id: 404 },
						{ title: 'Cargo terminal', id: 405 },
						{ title: 'Careers', id: 406 },
						{ title: 'Corporate contacts', id: 407 },
					],
				},
			],
		},
	},
	{
		title: 'Press Room',
		id: 5,
		droppingMenu: {
			leftElem: {
				title: 'Airline tickets',
				text: 'Purchase tickets online',
				buttonText: 'Search',
				img: aviasales,
			},
			rightElem: [
				{
					title: 'Press Room',
					content: [
						{ title: 'Press Room main page', id: 501 },
						{ title: 'Newsroom', id: 502 },
						{ title: 'Social & Art Projects', id: 503 },
						{ title: 'Traffic statistics', id: 504 },
						{ title: 'Financial reports', id: 505 },
						{ title: 'Media contact', id: 506 },
					],
				},
			],
		},
	},
];

export default headerItemsList;
