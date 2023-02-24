import airport from '../imgs/first.JPG';
import airline from '../imgs/second.jpg';
import parking from '../imgs/third.jpg';
import express from '../imgs/fourth.jpg';
import services from '../imgs/fifth.jpg';
import covid from '../imgs/covid-3.jpeg';
import destinations from '../imgs/seventh.jpg';
import vip from '../imgs/eighth.jpg';
import mastercard from '../imgs/ninth.jpg';
import infocentre from '../imgs/ten.jpg';

const bodySections = [
	{
		id: 301,
		elLocation: 'left',
		title: 'Airport directions',
		bodyText: `2 Medova str., Kyiv \n Terminals A, B and D`,
		hyperlinkText: 'Get directions',
		img: airport,
	},
	{
		id: 302,
		elLocation: 'right',
		title: 'Airline tickets',
		bodyText: `Any destination. Best fares.`,
		hyperlinkText: 'Search',
		img: airline,
	},
	{
		id: 303,
		elLocation: 'left',
		title: 'Parking',
		bodyText: `Parking directions and fares`,
		hyperlinkText: 'Find out more',
		img: parking,
	},
	{
		id: 304,
		elLocation: 'right',
		title: 'Express line',
		bodyText: `Express security pass`,
		hyperlinkText: 'Search',
		img: express,
	},
	{
		id: 305,
		elLocation: 'left',
		title: 'IEV services',
		bodyText: 'Online booking',
		hyperlinkText: 'Find out more',
		img: services,
	},
	{
		id: 306,
		elLocation: 'right',
		title: 'COVID-19 testing',
		bodyText: 'You can get tested 24/7 at Terminal A',
		hyperlinkText: 'Find out more',
		img: covid,
	},
	{
		id: 307,
		elLocation: 'left',
		title: 'Airlines & Destinations',
		bodyText: 'Discover your flight and destination options',
		hyperlinkText: 'View',
		img: destinations,
	},
	{
		id: 308,
		elLocation: 'right',
		title: 'VIP terminal',
		bodyText: 'Exclusive services for VIPs',
		hyperlinkText: 'Terminal B',
		img: vip,
	},
	{
		id: 309,
		elLocation: 'left',
		title: 'Mastercard fast line',
		bodyText: `Easy passage through the controls`,
		hyperlinkText: 'Find out more',
		img: mastercard,
	},
	{
		id: 310,
		elLocation: 'right',
		title: 'Info centre',
		bodyText: `24/7 Information \n +38 (044) 500 49 73 `,
		hyperlinkText: 'Contact now',
		img: infocentre,
	},
];

export default bodySections;
